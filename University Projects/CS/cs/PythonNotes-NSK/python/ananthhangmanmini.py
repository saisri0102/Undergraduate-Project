import os
import time
import random
w0={1:['karnataka','state of india with one of the oldest language','state bird is indian roller,state animal is asian elephant'],
    2:['kerala','one of its port is called as "queen of arabian sea"','called as gods own country'],
    37:['america','one of the countries to have no official language','this country has the maximum divorce rates in the world'],
    17:['vatican','it has a monument named after Michaelangelo','it is one of the city-states in the world'],
    18:['australia','formerly called as New Holland','Hugh Jackman is native of this country'],
    19:['snoaring','verb,done by people when they are tired without their knowledge, disturbs others','mostly common with men'],
    3:['pope','"francis" is the first to become the head of this communtiy from america','head of a religious community'],
    10:['obama','named Person of the year in 2008,2012 in times magazine','prominent ex-leader of the most powerful country,loves basketball'],
    4:['fasting','verb,done as mark of showing anger, also done as a part of health checkup','M.K.Gandhi,anna hazare are known for this act'],
    9:['microsoft','one of the founders - Paul Allen','a corporate company presently headed by an indian'],
    38:['bengal','fanta juice was originated here as result of World war 2 (indian state)','indian state with the longest international boundry'],
    39:['manipur','indian state with worlds only floating national park','this state was caled Jewel of india ny nehru'],
    20:['wellington','known as the coolest capital in the world','capital of the southernmost country on the globe(also it is below tropic of capricorn)'],
    48:['himalayas','the strongest security guard,protects lakhs of families','it is the youngest of its kind(just 70 million years old)'],
    5:['trek','verb,action done as refreshment or enjoyment','there is a motor vehicle with the same name'],
    8:['pentagon','film "top gun" was made in collaboration with this service provider','maths,shape,security service'],
    6:['oscar','original design of this award was by mgm creations','prestigious award,also won by indian'],
    7:['sahara','it shrinks and grows deppending on the climate','place of non survival,also ex-sponsor for a sporting team'],
    16:['mirage','is related to physics(optics)','something we see but doesnt exist'],
    15:['africa','it has the second largest freshwater lake(lake victoria)','has 54 countries'],
    35:['antarctica','has one and only one ATM','dakshin gangotri research  base is situated here'],
    40:['india','has a floating post office','worlds third largest economy'],
    24:['egypt','has the longest river','on an average only one inch of rain falls per year'],
    41:['scotland','unicorn is the official animal of this country','sean conery is a native of this country'],
    34:['china','air pollution in this country here increases due to snowfall in california','flag of this country has 4 small stars and one star'],
    21:['vivo','parent company is BBK electronics','founder of the comapny is shen wei'],
    32:['iphone','this name was first patented with cisco systems',"this product was earlier called as project purple"],
    27:['italy',"meaning of the country's name is calf land",'this country has won 4 football world cups'],
    28:['thailand','has 1430 islands,was called Siam(formerly)',"country's name means land of the free"],
    33:['brazil','country covers 3 time zones,this country is named after a tree','worlds largest exporter of coffee'],
    31:['madagascar','capital of the country is antananarivo','4th largest island in the world'],
    43:['france','has a pen company(one of the costliest) based on the mountain situated in this country','marie curie and jules verne are from this country'],
    29:['chile','has atacama desert(driest place on earth','famous poet pablo neruda is a native of this country'],
    26:['punjab','indian state with maximum cultivated land','name of the state means collection of 5 rivers'],
    30:['jamaica','only country with 120 rivers','capital of this country is kingston'],
    25:['germany','this country boundries 9 other countries','has the most number of zoos in the world,also christmas tree tradition originated from here'],
    12:['cuba',',largest exporter of sugar in the world','fidel castro is a native of this country'],
    42:['canada','has the maximum number of lakes in the world','justin bieber and dwayne johnson are from this country'],
    44:['perth','australian city once called as boorloo',"Australia's windiest city,also called city of lights"],
    23:['nokia','comapny named after a place in southern finland','leo mechelin is one of the founders of this company'],
    22:['britain','first country to use postage stamps','stephen hawking is from this country'],
    11:['vegas','criss angel and andre agassi are from this country','brightest man made place on earth seen from space'],
    13:['gujarat','indian state with maximum number of operating airports (17)','indian state with longest sea shore'],
    14:['greece','leading producer of sea sponges in the world','sunniest country in the europe'],
    45:['singapore','has the largest tropical orchid garden in the world','it is one of the city-country in the world'],
    46:['mexico','this was the country that introduced choloclate,chillies,corn to the world','chichen itza pyramid is situated here'],
    47:['norway','capital is oslo,national symbol is lion','has a research station in antarctica named TROLL'],
    36:['japan','largest automobile producer in the world','known as land of rising sun'],
    49:['niue',"country's coins feature mickey mouse and star wars",'island nation in the south pacific'],
    50:['ethiopia','this country follows a traditional calendar that is 7 years behind','its capital is addis ababa'],
    51:['nauru','this country has no capital','its currency is australian dollar'],
    52:['kiribati','only nation in the world that lies in all the 4 hemispheres','capital is tarawa,it is located between australia and hawaii'],
    53:['greenland','this country couldnt make it to the fifa because they cannot grow grass fields here','danish krone is the currency and nuuk is the capital'],
    54:['kyrgyzstan','inylchek glacier (one of the largest) is situated in this country,this country is in the central asia','bishek is the capital,this country is also known for the epic of manas']}
a1=("\t\t\t___\n\t\t\t|")
a2=("\t\t\t___\n\t\t\t|\n\t\t\tO")
a3=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t\t|")
a4=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t\t|\n\t\t\t|")
a5=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t\t|\n\t\t\t|\n\t\t\t|")
a6=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t\t|\ \n\t\t\t|\n\t\t\t|")
a7=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t       /|\ \n\t\t\t|\n\t\t\t|")
a8=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t       /|\ \n\t\t\t|\n\t\t\t|\ ")
a9=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t       /|\ \n\t\t\t|\n\t\t       /|\ ")
j2=""
s=0
k2=""
ans="Y"
print()
print()
print('\t\t\t\t -------------------\n\t\t\t\t|      HANGMAN\t    |\n\t\t\t\t -------------------') 
print()
print()
ans0=input("DO YOU WANT TO PLAY THE GAME (Y/N) : ")
ans3=ans0.upper()
if ans3!='Y' and ans3!='N':
	print()
	print("INVALID INPUT")
	time.sleep(1)
if ans3=='N':
 print()
 os.system('clear')
 print('\n\t\t\t--------------------------------\n\t\t       |       HAVE   A  GOOD  DAY      |\n\t\t       |\t\t\t        |\n\t\t       |\t     BYE\t\t|\n\t\t\t--------------------------------')
 time.sleep(1)
os.system('clear')
print()
print()
if ans3=='Y':
  print('-------------------------------')
  name1=input('ENTER YOUR NAME : ')
  name=name1.upper()
  print('-------------------------------')
time.sleep(1)
print()
os.system('clear')
while ans=='Y' and ans3=="Y":
	j=9
	w1=[]
	w2=[]
	r=set()
	r1=[]
	g1=[]
	print()
	print()
	print('-------------------------------')
	print('THE  LEVELS  OF  THE  GAME  :  ')
	print('--------- EASY -----------: E')	
	print('-------- MODERATE --------: M')
	print('--------- HARD -----------: H')
	print('-------------------------------')
	print()
	level=input(' ENTER  THE  LEVEL  OF  THE  GAME :  ')
	print('-------------------------------')
	if level=='E' or level=='e':
		s=random.randrange(1,19)
	elif level=='M' or level=='m':
		s=random.randrange(18,37)
	elif level=='H' or level=='h':
		s=random.randrange(36,55)
	else:
		print('INVALID  INPUT')
	time.sleep(1)	
	os.system('clear')
	print()
	w4=w0[s][0]
	w=w4.upper()
	os.system('clear')
	print()
	print('-------------------------------------')
	print()
	for l in range(len(w)):
		w2.append(w[l])
	for i in range(len(w)):
		w1.append('_')
	k2=" ".join(w1)
	os.system('clear')
	print()
	print()
	print(k2)
	while j<=9 and j>0 and (w1!=w2):
				print()
				print('-------------------------------------')
				p=w0[s][1]
				u=p.upper()
				p1=w0[s][2]
				u1=p1.upper()
				print('HINT 1 :: ',u)
				print()
				if len(r1)==4 or len(r1)>4:
					print('HINT 2 :: ',u1)
					print('-------------------------------------')
				else:
					u3=0
				print()
				g3=input('GUESS A LETTER  :  ')
				print()
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
							j2=" ".join(w1)
							print(j2)
							print()
							print('THE WRONG LETTERS GUESSED ARE : ',	r1)
						else:
							print()
							print('LETTER ALREADY GUESSED,TRY ANOTHER LETTER')
							print()
					else:
						print(j2)
						print("------------------------------------")
						if g not in r1:
							r.add(g)
							r1=list(r)
							print()
							print('THE WRONG LETTERS GUESSED ARE :  ',r1)
							print()
							print('*******WRONG GUESS*******')
							print("------------------------------------")
							j=j-1
							print()
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
								print()
								print('********* HANGED *********')
							else:
								Z=0	
						else:
							print()
							print('ALREADY  GUESSED , TRY ANOTHER LETTER  ')
							print('-------------------------------------')
					for v in range(1):
						if w1==w2:
							time.sleep(1)
							os.system('clear')
							print()
							print('\n\t\t\t-----------------------------------')
							print('\n\t\t        |\t\t\t\t   |\n\t\t        |\t   CONGRATULATIONS \t   |\n\t\t        |\t      YOU   WIN \t   |\n\t\t        |\t\t\t\t   |')
							print('\n\t\t\t-----------------------------------')
							print()
						else:
							n=0
					if j==0 and (w1!=w2):
						time.sleep(1)
						os.system('clear')
						print()
						print('\n\t\t\t-----------------------------------')
						print('\n\t\t        |\t\t\t\t   |\n\t\t        |\t WELL  TRIED, GOOD  JOB    |\n\t\t        |\t     \t\t           |\n\t\t        |\t      YOU LOSE \t\t   |')
						print('\n\t\t\t-----------------------------------')
						print()
						print('-------------------------------------')
						print('ACTUAL  WORD  :  ',w)
					else:
						b=0
				else:
					print()
					print('INVALID  INPUT')
	print()
	time.sleep(2)
	print('-------------------------------------')
	os.system('clear')
	print()
	print('**************************************************')
	print()
	rate=float(input('PLEASE  RATE  THE  GAME ON A SCALE OF 10 :  '))
	if rate>=0.0 and rate<=4.9:
		print()
		print('THANKS  FOR PLAYING ,WILL MAKE IT BETTER.')
	elif rate>=5 and rate<=8.9:
		print()
		print('THANKS FOR PLAYING , DO PLAY THE GAME AGAIN')
	elif rate>=9.0 and rate<=10.0:
		print()
		print('THANKS FOR PLAYING , HOPE YOU ENJOYED IT')
	else:
		print()
		print('INVALID INPUT')
	print()
	print('**************************************************')
	time.sleep(1)
	os.system('clear')
	print()
	print('-------------------------------------')
	ans1=input("DO YOU WANT TO PLAY AGAIN (Y/N) : ")
	ans=ans1.upper()
	print()
	os.system('clear')
	if ans=='N':
	 print('\n\t\t\t--------------------------------\n\t\t       |   NICE PLAYING,  SEE YOU AGAIN |\n\t\t       |\t\t\t        |\n\t\t       |\t     BYE\t\t|\n\t\t\t--------------------------------')
	 time.sleep(1)
	 os.system('clear')
	if ans!='N' and ans!='Y':
	 print('INVALID INPUT')
	 time.sleep(1)
	 os.system('clear')
	print()





