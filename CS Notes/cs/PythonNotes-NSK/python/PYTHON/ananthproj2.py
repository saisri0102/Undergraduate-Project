import random
w0={1:['karnataka','noun,state of india with one of the oldest language'],
    2:['kerarla','noun,gods own country'],
    37:['america','noun,one of the countries to have no official language'],
    17:['vatican','noun,smallest city of the world,it is one of the city-states in the world'],
    18:['australia','noun,it is continent and also a country,formerly called as New Holland'],
    19:['snoaring','verb,done by people when they are tired without their knowledge, disturbs others'],
    3:['pope','noun,head of a religious community'],
    10:['obama','noun,leader of one of the most powerful countries,plays basketball'],
    4:['fasting','verb,done as mark of showing anger, also done as a part of health checkup'],
    9:['microsoft','noun, one of the largest coorperate office,headed by an indian'],
    38:['bengal','noun,indian state with longest international boundry'],
    39:['manipur','noun,indian state with worlds only floating national park'],
    20:['wellington','noun, capital of the southernmost country on the globe(also it is below tropic of capricorn)'],
    48:['himalayas','noun,the strongest security guard,protects lakhs of families'],
    5:['trek','verb,action done as refreshment or enjoyment'],
    8:['pentagon','noun,maths,shape,security service'],
    6:['oscar','noun,prestigious award,also won by an indian'],
    7:['sahara','noun,ex-sponsorer for a team,place of non survival'],
    16:['mirage','noun,something we see but doesnt exist'],
    15:['africa','noun,has 54 countries'],
    35:['antarctica','noun,has one and only one ATM'],
    40:['india','noun,has a floating post office'],
    14:['egypt','noun,has the longest river'],
    41:['scotland','noun,unicorn is the official animal'],
    34:['china','noun,air pollution in this country here increases due to snowfall in california'],
    21:['vivo','noun,parent company is BBK electronics'],
    32:['iphone','noun,company was once called purple'],
    27:['italy','noun,this country has won 4 football world cups'],
    28:['thailand','noun,has 1430 islands,was called Siam(formerly)'],
    33:['brazil','noun,country covers 3 time zones,this country is named after a tree'],
    31:['madagascar','noun,4th largest island in the world'],
    43:['france','noun,has a pen company(one of the costliest) based on the mountain situated here'],
    29:['chile','noun,has atacama desert(driest place on earth'],
    26:['punjab','noun,indian state with maximum cultivated land'],
    30:['jamaica','noun,only country with 120 rivers'],
    25:['germany','noun,this country boundries 9 other countries'],
    12:['cuba','noun,largest exporter of sugar in the world'],
    42:['canada','noun,has the maximum number of lakes in the world'],
    24:['perth',"noun,Australia's windiest city"],
    23:['nokia','comapny named after a place in southern finland'],
    22:['britain','noun,first country to use postage stamps'],
    11:['vegas','noun,brightest man made place on earth seen from space'],
    13:['gujarat','noun,indian state with longest sea shore'],
    44:['greece','noun,leading producer of sea sponges in the world'],
    45:['singapore','noun,it is one of the city-states,has the largest tropical orchid garden in the world'],
    46:['mexico','noun,this was the country that introduced choloclate,chillies,corn to the world,chichen itza pyramid is situated here'],
    47:['69','noun,capital is oslo,national symbol is lion,has a research station in antarctica named TROLL'],
    36:['japan','noun,called as land of the rising sun,largest automobile producer in the world']}
r=set()
r1=[]
s=0
print()
name1=input('ENTER YOU NAME  : ')
name=name1.upper()
age=int(input('ENTER YOUR AGE : '))
print('-------------------------------')
print('THE  LEVELS  OF  THE  GAME  :  ')
print('--------- EASY -----------: E')
print('-------- MODERATE --------: M')
print('--------- HARD -----------: H')
level=input(' ENTER  THE  LEVEL  OF  THE  GAME :  ')
print('-------------------------------------')
if level=='E' or level=='e':
	s=random.randrange(1,17)
elif level=='M' or level=='m':
	s=random.randrange(16,33)
elif level=='H' or level=='h':
	s=random.randrange(32,49)
else:
	print('INVALID  INPUT')
w4=w0[s][0]
w=w4.upper()
w2=[]
g1=[]
n=0
b=0
j2=""
k1=""
w1=[]
print('-------------------------------------')
for l in range(len(w)):
	w2.append(w[l])
for i in range(len(w)):
	w1.append('_')
	k1=" ".join(w1)
print(k1)
f=set()
for x in range(len(w)):
	f.add(w[x])
j=9
a1=("\t___\n\t|")
a2=("\t___\n\t|\n\tO")
a3=("\t___\n\t|\n\tO\n\t|")
a4=("\t___\n\t|\n\tO\n\t|\n\t|")
a5=("\t___\n\t|\n\tO\n\t|\n\t|\n\t|")
a6=("\t___\n\t|\n\tO\n\t|\ \n\t|\n\t|")
a7=("\t___\n\t|\n\tO\n       /|\ \n\t|\n\t|")
a8=("\t___\n\t|\n\tO\n       /|\ \n\t|\n\t|\ ")
a9=("\t___\n\t|\n\tO\n       /|\ \n\t|\n       /|\ ")
while j<=9 and j>0 and (w1!=w2):
	print('-------------------------------------')
	p=w0[s][1]
	u=p.upper()
	print('HINT:: ',u)
	print()
	g3=input('GUESS A LETTER :  ')
 g=g3.upper()
	if g.isalpha():
	 if g in w:
			print()
			print('******** RIGHT GUESS ********')
			print('REMAINING  CHANCES  :  ',j)
			print('-------------------------------------')
			print()
			if g not in g1:
				g1.append(g)
				for k in range(len(w)):
					if w[k]==g:
						del w1[k]
						w1.insert(k,g)
				j1=" ".join(w1)
				print(j1)
				print("WRONG LETTERS GUESSES ARE : ", r1)
			else:
				print()
				print('LETTER ALREADY GUESSED,TRY ANOTHER LETTER')
				print()	
	 else:
			r.add(g)
			r1=list(r)
			print(j1)
			print()
			print('THE WRONG LETTERS GUESSED ARE :  ',r1)
			print()
			print('*******WRONG GUESS*******')
			j=j-1
			print("------------------------------------")
			if j==8:
				print(a1)
				print()
				print("REMAINING  CHANCES : ",j)
			elif j==7:
				print(a2)
				print()
				print("REMAINING  CHANCES : ",j)
			elif j==6:
				print(a3)
				print()
				print("REMAINING  CHANCES : ",j)
			elif j==5:
				print(a4)
				print()
				print("REMAINING  CHANCES : ",j)
			elif j==4:
				print(a5)
				print()
				print("REMAINING  CHANCES : ",j)
			elif j==3:
				print(a6)
				print()
				print("REMAINING  CHANCES : ",j)
			elif j==2:
				print(a7)
				print()
				print("REMAINING  CHANCES : ",j)
			elif j==1:
				print(a8)
				print()
				print("REMAINING  CHANCES : ",j)
			elif j==0:
				print(a9)
				print()
				print("REMAINING  CHANCES : ",j)
				print('********* HANGED *********')
			else:
				Z=0
			print('-------------------------------------')
		for v in range(1):
			if w1==w2:
				print()
				print('------------------------------------')
				print('*******************************************')
				print('******CONGRATULATIONS!!!,',name,',YOU HAVE WON******')
				print('*************** GAME  OVER ****************')
				print('*******************************************')
				print('------------------------------------')
				print('THE  GUESSED  WORD  IS  : ',w)
				print('------------------------------------')
			else:
				n=0
		if j==0 and (w1!=w2):
			print()
			print('********************************************************')
			print('********** WELL TRIED ,',name,',YOU HAVE LOST **********')
			print('***************** GAME  OVER ***************************')
			print('********************************************************')
			print()
			print('ACTUAL  WORD  :  ',w)
		else:
			b=0
	else:
		print('INVALID  INPUT')
print()
print('******************************************************')
rate=float(input('PLEASE  RATE  THE  GAME  :  '))
if rate>=0.0 and rate<=4.9:
	print('THANKS  FOR PLAYING , WE SURELY WILL SATISFY YOU THE NEXT TIME')
elif rate>=5 and rate<=8.9:
	print('THANKS FOR PLAYING , DO PLAY THE GAME ONCE AGAIN')
elif rate>=9.0 and rate<=10.0:
	print('THANKS FOR PLAYING , DO NOT FORGET US')
else:
	print('INVALID INPUT')
print('******************************************************')
print()





