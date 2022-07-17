from socket import AF_INET, socket, SOCK_STREAM
from threading import Thread
import os


def accept_incoming_connections():
    """Sets up handling for incoming clients."""
    while True:
        client, client_address = SERVER.accept()
        print("%s:%s has connected." % client_address)
        client.send(bytes("Welcome to the chatroom!!. Now type your name and press enter!", "utf8"))
        addresses[client] = client_address
        Thread(target=handle_client, args=(client,)).start()


def handle_client(client):  # Takes client socket as argument.
    name = client.recv(BUFSIZ).decode("utf8")
    welcome = 'Welcome %s! If you ever want to quit, type {quit} to exit.' % name
    client.send(bytes(welcome, "utf8"))
    msg = "%s has joined the chat!" % name
    broadcast(bytes(msg, "utf8"))
    clients[client] = name
    while True:
        msg = client.recv(BUFSIZ)
        if msg == (bytes("{quit}", "utf8")) :
            client.send(bytes("{quit}", "utf8"))
            client.close()
            del clients[client]
            broadcast(bytes("%s has left the chat." % name, "utf8"))
            break
        elif msg[0:6]==(bytes("{file}", "utf8")) :
            msg_f=msg[6:]
            for sock in clients:
            	if sock!=client:
            		sock.send(bytes("a file is being sent by "+name,"utf8"))
            print(msg_f)
            msg_f='s'+(msg_f.decode("utf8"))
            with open(msg_f, 'ab') as f:
                '''with open(r"na.txt", "w", encoding='UTF-8') as f:
			    f.write	''' 
                while True:
                    print('receiving data...')
                    data = client.recv(1024)
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
            file_transfer(msg_f,client,name)    
        else:
            broadcast(msg, name+": ")
            


def broadcast(msg, prefix=""):  # prefix is for name identification.
    """Broadcasts a message to all the clients."""
    for sock in clients:
        sock.send(bytes(prefix, "utf8")+msg)
def file_transfer(file,c,n):
    for sock in clients:
        if(sock!=c):
            print("sending file")
            sock.send(bytes("file"+file,"utf8"))
            f = open(file,'rb')
            l = f.read(1024)
            while (l):
                sock.send(l)
                #print('Sent ',repr(l))
                l = f.read(1024)
            f.close()
            sock.send(bytes("over","utf8"))
            print('done')
            


clients = {}
addresses = {}

HOST = ''
PORT = 60000
BUFSIZ = 1024
ADDR = (HOST, PORT)

SERVER = socket(AF_INET, SOCK_STREAM)
SERVER.bind(ADDR)

if __name__ == "__main__":
    SERVER.listen(5)
    print("Waiting for connection...")
    ACCEPT_THREAD = Thread(target=accept_incoming_connections)
    ACCEPT_THREAD.start()
    ACCEPT_THREAD.join()
    SERVER.close()
