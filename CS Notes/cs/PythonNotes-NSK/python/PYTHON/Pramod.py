from tkinter import*

from tkinter import Tk,StringVar

'''import random

import time;    

import datetime

import calendar'''


cost=0; route=''

costpkm=0.8

ncostpkm=0.7

distbm=150; distbma=470; distbb=425



def costdisplay():

   global cost

   global route

   if var1.get()=='1':

       if var5.get()=='1':

           route='Bengaluru to Mysuru'

           cost= costpkm*distbm

       elif var5.get()=='2':

           route='Bengaluru to Mangaluru'

           cost= costpkm*distbma

       elif var5.get()=='3':

           route='Bengaluru to Bellary'

           cost= costpkm*distbb

   else:

       if var5.get()=='1':

           cost= ncostpkm*distbm

       elif var5.get()=='2':

           cost= ncostpkm*distbma

       elif var5.get()=='3':

           cost= ncostpkm*distbb

   label=Label(bottomLeft2, font=('arial',20,'bold'), text="COST DETAILS")

   label.grid(row=0,column=0)

   Label(bottomLeft2, font=('arial',20,'bold'), text="Fare for adults: "+str(cost)).grid(row=1, column=0)

   Label(bottomLeft2, font=('arial',20,'bold'), text="Fare for children: "+str(cost/2)).grid(row=2,column=0)

   Button(bottomLeft2, text='Proceed', command=billdisplay).grid(row=5,column=0)

   


def billdisplay():

   global cost

   global route

   if var1.get()=='1':

       if var5.get()=='1':

           route='Bengaluru to Mysuru'

       elif var5.get()=='2':

           route='Bengaluru to Mangaluru'

       elif var5.get()=='3':

           route='Bengaluru to Bellary'


   Label(ft2, font=('arial',20,'bold'), text="Billing Details").grid(row=0,column=0)

   Label(ft2, font=('arial',20,'bold'), text="Your chosen route is:"+route).grid(row=1, column=0,sticky=W)

   total_cost=int(var7.get())*cost+int(var8.get())*cost/2

   Label(ft2, font=('arial',20,'bold'), text="Number of Adults:"+var7.get()).grid(row=3, column=0,sticky=W)

   Label(ft2, font=('arial',20,'bold'), text="Number of Children:"+var8.get()).grid(row=4, column=0,sticky=W)

   Label(ft2, font=('arial',20,'bold'), text="Total cost:"+str(total_cost)).grid(row=5, column=0,sticky=W)

   Label(fb2, font=('arial',20,'bold'), text="THANK YOU FOR USING OUR PORTAL").grid(row=0,column=0,sticky=W)

   Button(fb2, text="Download Bill", command=billDownload).grid(row=1, column=0, sticky=W)

   

def billDownload():

   global cost

   route=''

   if var1.get()=='1':

       if var5.get()=='1':

           route='Bengaluru to Mysuru'

       elif var5.get()=='2':

           route='Bengaluru to Mangaluru'

       elif var5.get()=='3':

           route='Bengaluru to Bellary'

   elif var1.get()=='2':

       if var5.get()=='1':

           route='Bengaluru to Mysuru'

       elif var5.get()=='2':

           route='Bengaluru to Mangaluru'

       elif var5.get()=='3':

           route='Bengaluru to Bellary'

   total_cost=int(var7.get())*cost+int(var8.get())*cost/2

   f = open('BILLING DETAILS.txt','w')

   f.write('\nRoute:'+route)

   if var6.get()=='1':

       time='10:00'

   elif var6.get()=='2':

       time='13.00'

   elif var6.get()=='3':

       time='15.00'

   f.write('\nTime:'+time)

   f.write('\nTotal cost:'+str(total_cost))

   f.close()

   master=Tk()

   master.title('Bill Download Alert')

   Label(master, font=('arial',20,'bold'), text='Bill downloaded').pack()

   master.mainloop()

  

root = Tk()

root.title("Reservation simulation")


Tops = Frame(root, width=1350, height=100, bd=14, relief='raise')

Tops.pack(side=TOP)


f1 = Frame(root, width=900, height=650, bd=8, relief="raise")

f1.pack(side=LEFT)

f2=Frame(root,width=440, height=650,bd=8,relief="raise")

f2.pack(side=RIGHT)


ft2 = Frame(f2, width=440,height=650,bd=12, relief="raise")

ft2.pack(side=TOP)

fb2=Frame(f2,width=440, height=50,bd=16,relief="raise")

fb2.pack(side=BOTTOM)


f1a = Frame(f1,width=900,height=330,bd=8,relief="raise")

f1a.pack(side=TOP)

f2a=Frame(f1,width=900,height=320,bd=6, relief="raise")

f2a.pack(side=BOTTOM)


topLeft1=Frame(f1a,width=300,height=200,bd=16, relief="raise")

topLeft1.pack(side=LEFT)

topLeft2=Frame(f1a,width=300,height=200,bd=16, relief="raise")

topLeft2.pack(side=RIGHT)

topLeft3=Frame(f1a,width=300,height=200,bd=16, relief="raise")

topLeft3.pack(side=RIGHT)



Tops.configure(background='red')

f1.configure(background="light blue")

f2.configure(background='yellow')




bottomLeft1=Frame(f2a,width=450,height=450,bd=14, relief="raise")

bottomLeft1.pack(side=LEFT)


bottomLeft2=Frame(f2a,width=450,height=450,bd=14, relief="raise")

bottomLeft2.pack(side=RIGHT)


lblTitle=Label(Tops,font=('Times Roman',60,'bold'),text="BUS TICKET RESERVATION", bd=10,anchor='w')

lblTitle.grid(row=0,column=0)





var1=StringVar()

var1.set("0")

var2=StringVar()

var2.set("0")

var3=StringVar()

var3.set('0')

var4=StringVar()

var4.set("0")

var5=StringVar()

var5.set("0")

var6=StringVar()

var6.set("0")

var7=StringVar()

var7.set("0")

var8=StringVar()

var8.set("0")



lblClass=Label(topLeft1,font=('Times Roman',20,'bold'),text="Class",bd=8)

lblClass.grid(row=0,column=0,sticky=W)


chkAC=Radiobutton(topLeft1, font=('arial',20,'bold'),text='AC', variable=var1, value='1')

chkAC.grid(row=1,column=0,sticky=W)



chkNAC=Radiobutton(topLeft1, font=('arial',20,'bold'),text='Non AC', variable=var1, value='2')

chkNAC.grid(row=2,column=0,sticky=W)





lblDestination=Label(topLeft3,font=('Times Roman',20,'bold'),text="Select a route",bd=8)

lblDestination.grid(row=1,column=0,sticky=W)


r1=Radiobutton(topLeft3, text="Bengaluru-Mysuru", variable=var5, value='1')

r1.grid(row=2, column=0, sticky=W)

r2=Radiobutton(topLeft3, text="Bengaluru-Mangaluru", variable=var5, value='2')

r2.grid(row=3, column=0, sticky=W)

r3=Radiobutton(topLeft3, text="Bengaluru-Ballary", variable=var5, value='3')

r3.grid(row=4, column=0, sticky=W)



noAdults=Label(bottomLeft1, font=('arial',20,'bold'),text='Adults')

noAdults.grid(row=0,column=0,sticky=W)

noa = Entry(bottomLeft1,textvariable=var7)

noa.grid(row=0, column=1)


noChildren=Label(bottomLeft1, font=('arial',20,'bold'),text='Children')

noChildren.grid(row=1,column=0,sticky=W)

noc = Entry(bottomLeft1, textvariable=var8)

noc.grid(row=1,column=1)


button1=Button(bottomLeft1, text='Proceed', command=costdisplay)

button1.grid(row=2, column=0)




lblTiming=Label(topLeft2,font=('Times Roman',20,'bold'),text="Select the timings",bd=8)

lblTiming.grid(row=1,column=0,sticky=W)


chkt1=Radiobutton(topLeft2, font=('arial',20,'bold'),text='10:30', variable=var6, value='1')

chkt1.grid(row=2,column=0,sticky=W)


chkt2=Radiobutton(topLeft2, font=('arial',20,'bold'),text='13:00', variable=var6, value='2')

chkt2.grid(row=3,column=0,sticky=W)


chkt3=Radiobutton(topLeft2, font=('arial',20,'bold'),text='15:00', variable=var6, value='3')

chkt3.grid(row=4,column=0,sticky=W)




root.mainloop()