from socket import AF_INET, socket, SOCK_STREAM
from threading import Thread
import tkinter
import os


def receive():
    """Handles receiving of messages."""
    while True:
        try:
            msg = client_socket.recv(BUFSIZ).decode("utf8")
            if(msg[0:4]=="file"):
                 msg_f='c'+msg[4:]
                 print('file has started')
                 with open(msg_f, 'ab') as f:
                    '''with open(r"na.txt", "w", encoding='UTF-8') as f:
                    f.write ''' 
                    print('file has been opened')
                    while True:
                        print('receiving data...')
                        data = client_socket.recv(1024)
                        #print(type(data))
                        f.write(data)
                        print((data))
                        #data=(str(to_store[0],"utf8")
                        if data[-4:]==(bytes("over", "utf8")):
                            print('file ended')
                            f.seek(-4,os.SEEK_END)
                            f.truncate()
                            break
                        print('out')
                        # write data to a file

                    f.close()
                    msg_list.insert(tkinter.END, 'file has been recieved')
            else:
                msg_list.insert(tkinter.END, msg)
        except OSError:  # Possibly client has left the chat.
            break


def send(event=None):  # event is passed by binders.
    """Handles sending of messages."""
    msg = my_msg.get()
    my_msg.set("")  # Clears input field.
    client_socket.send(bytes(msg, "utf8"))
    #print(msg[0:5])
    if (msg[0:6]=="{file}"):
        msg_f =msg[6:]
        f = open(msg_f,'rb')
        l = f.read(1024)
        while (l):
          client_socket.send(l)
          #print('Sent ',repr(l))
          l = f.read(1024)
        f.close()
        client_socket.send(bytes("over","utf8"))
        #msg_list.insert(tkinter.END, msg_f)
        msg_list.insert(tkinter.END, msg_f+" has been sent")
    if msg == "{quit}":
        client_socket.close()
        top.quit()
    
        

def on_closing(event=None):
    """This function is to be called when the window is closed."""
    my_msg.set("{quit}")
    send()

top = tkinter.Tk()
top.title("Chatroom")

messages_frame = tkinter.Frame(top)
my_msg = tkinter.StringVar()  # For the messages to be sent.
my_msg.set("Type")
scrollbar = tkinter.Scrollbar(messages_frame)  # To navigate through past messages.
# Following will contain the messages.
msg_list = tkinter.Listbox(messages_frame, height=30, width=65, yscrollcommand=scrollbar.set)
scrollbar.pack(side=tkinter.RIGHT, fill=tkinter.Y)
msg_list.pack(side=tkinter.LEFT, fill=tkinter.BOTH)
msg_list.pack()
messages_frame.pack()

entry_field = tkinter.Entry(top, textvariable=my_msg)
entry_field.bind("<Return>", send)
entry_field.pack()
send_button = tkinter.Button(top, text="Send", command=send)
send_button.pack()

top.protocol("WM_DELETE_WINDOW", on_closing)

#----Now comes the sockets part----
HOST = '192.168.43.168'
#HOST='10.20.203.208'
PORT = 60000


BUFSIZ = 1024
ADDR = (HOST, PORT)

client_socket = socket(AF_INET, SOCK_STREAM)
client_socket.connect(ADDR)
receive_thread = Thread(target=receive)
receive_thread.start()
tkinter.mainloop() # Starts GUI execution.
