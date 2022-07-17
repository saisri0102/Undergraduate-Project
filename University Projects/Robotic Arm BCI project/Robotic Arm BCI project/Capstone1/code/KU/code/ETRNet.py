from keras.layers import Input,Conv2D,ReLU,MaxPool2D,Flatten,Dense,Dropout,BatchNormalization
from keras.optimizers import Adam
from miya.basicModel import modelComFun
'''
class Model(object):
    def __init__(self):
        self.model = Sequential()

    def train_generator(self, data_gen, epochs, batch_size, steps_per_epoch, save_dir, folderIndex,
                        valid_data_gen=None):
        timer = Timer()
        timer.start()
        print('Training Started')
        print('%s epochs, %s batch size, %s batches per epoch' % (epochs, batch_size, steps_per_epoch))

        modelFileName = '%s-e%s-%s' % (dt.datetime.now().strftime('%d%m%Y-%H%M%S'), str(epochs), folderIndex)
        save_fname = os.path.join(save_dir, '%s.h5' % modelFileName)
        callbacks = [
            ModelCheckpoint(filepath=save_fname, monitor='loss', save_best_only=True)
        ]
        if valid_data_gen is not None:
            his = self.model.fit_generator(
                data_gen,
                steps_per_epoch=steps_per_epoch,
                epochs=epochs,
                callbacks=callbacks,
                workers=1,
                validation_data=valid_data_gen,
                validation_steps=int(steps_per_epoch / 5)
            )
        else:
            his = self.model.fit_generator(
                data_gen,
                steps_per_epoch=steps_per_epoch,
                epochs=epochs,
                callbacks=callbacks,
                workers=1
            )
        saveRawDataToFile(os.path.join(save_dir, '%s.pkl' % modelFileName), his.history)
        print('Training Completed. Model saved as %s' % save_fname)
        timer.stop()

    def envalue(self, x_test,y_test):
        loss,accu=self.model.evaluate(x_test,y_test)
        return loss,accu

    def get_model(self, filepath):
        print('[Model] Loading model from file %s' % filepath)
        self.model = load_model(filepath)

    def plot_model(self,path):
        plot_model(self.model, to_file=path, show_shapes=True)

    def plot_feature(self,model_path,layer_num,img_path,img_width,img_height):
        model = load_model(model_path)  # 加载已经训练好的模型
        img = image.load_img(img_path, target_size=(img_width,img_height))
        img_tensor = image.img_to_array(img)
        img_tensor = np.expand_dims(img_tensor, axis=0)  # 图像维度拓展，输入网络 （1,150,150,3）
        img_tensor /= 255.

        # -----------------------------------
        layer_outputs = [layer.output for layer in model.layers[0:layer_num]]  # 获取模型节点输出
        # 构造节点测试模型，对实验数据进行测试
        activation_model = self.model.M.Model(inputs=model.input, outputs=layer_outputs)  # 8个激活模型
        activations = activation_model.predict(img_tensor)  # 8个激活层输出，即8个层输出的特征图

        layer_names = []  # 读取各个输出节点对应的层名称
        for layer in model.layers[0:8]:
            layer_names.append(layer.name)
        images_per_row = 16  # 每行现实的特征图数量
        for layer_name, layer_activation in zip(layer_names, activations):  # 每层名称+特征图输出
            n_features = layer_activation.shape[-1]
            size = layer_activation.shape[1]  # feature_map = [1, size, size, n_features]
            n_cols = n_features // images_per_row
            display_grid = np.zeros((size * n_cols, images_per_row * size))

            for col in range(n_cols):
                for row in range(images_per_row):
                    channel_image = layer_activation[:, :, col * images_per_row + row]
                    channel_image = np.clip(channel_image, 0, 255).astype('uint8')
                    display_grid[col * size: (col + 1) * size,
                    row * size: (row + 1) * size] = channel_image
                    # Display the grid
                    scale = 1. / size
                    plt.figure(figsize=(scale * display_grid.shape[1],
                                        scale * display_grid.shape[0]))
                    plt.title(layer_name)
                    plt.imshow(display_grid, aspect='auto', cmap='viridis')
'''

class ETRNet(modelComFun):
    def create_net(self,yml,classNum,label_2d=True):
        num_channels = 3
        filter_size = 3
        img_width=yml['ML']['img_width']
        img_height=yml['ML']['img_height']
        drop_rate = yml['ML']['drop_rate']
        #https://keras.io/examples/mnist_cnn/

        #self.model.add(Input(shape=(num_channels,img_width,img_height)))
        num_filters_conv1=yml['ML']['num_filters_conv1']
        self.model.add(Conv2D(num_filters_conv1,kernel_size=(3, 3),input_shape=(img_height,img_width,num_channels),activation='relu'))#!!! the image shape is height,width,channel
        #self.model.add(Conv2D(num_filters_conv1, kernel_size=(3, 3), activation='relu'))
        self.model.add(MaxPool2D())
        self.model.add(Dropout(drop_rate))
        self.model.add(BatchNormalization())

        num_filters_conv2 = yml['ML']['num_filters_conv2']
        self.model.add(Conv2D(num_filters_conv2, kernel_size=(3, 3), activation='relu'))
        #self.model.add(Conv2D(num_filters_conv2, kernel_size=(3, 3), activation='relu'))
        self.model.add(MaxPool2D())
        self.model.add(Dropout(drop_rate))
        self.model.add(BatchNormalization())

        num_filters_conv3 = yml['ML']['num_filters_conv3']
        self.model.add(Conv2D(num_filters_conv3, kernel_size=(3, 3), activation='relu'))
        #self.model.add(Conv2D(num_filters_conv3, kernel_size=(3, 3), activation='relu'))
        self.model.add(MaxPool2D())
        self.model.add(Dropout(drop_rate))
        self.model.add(BatchNormalization())

        self.model.add(Flatten())
        fc_layer_size=yml['ML']['fc_layer_size']
        self.model.add(Dense(fc_layer_size,activation='relu'))
        self.model.add(Dropout(drop_rate))
        self.model.add(BatchNormalization())
        self.model.add(Dense(classNum, activation='softmax'))
        lr=yml['ML']['learning_rate']
        #self.model.compile(loss='categorical_crossentropy',optimizer=Adam(learning_rate=lr), metrics=['acc'])
        if label_2d:
            self.model.compile(loss='categorical_crossentropy', optimizer=Adam(lr=lr),metrics=['acc'])
        else:
            self.model.compile(loss='sparse_categorical_crossentropy', optimizer=Adam(lr=lr), metrics=['acc'])
        self.model.summary()

from miya.MLTest import test_curModel

def test_oneModel(yml,loadData,chanDic, eventDic, getData, subjects,from_weight,modelFilePath,w_wb,test_sheet,colIndex,excelPath):
    #yml, loadData, chanDic, eventDic, getData,subjects,  from_weight, htFile,  w_wb, test_sheet, colIndex, excelPath
    model = ETRNet()
    class_num = len(eventDic)
    model.create_net(yml,class_num)
    model.get_model(modelFilePath,from_weight=True)
    test_curModel(model, yml, loadData, chanDic, eventDic, getData, subjects, modelFilePath, w_wb, test_sheet, colIndex,
                  excelPath)