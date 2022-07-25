# import os is for using it to clear the screen when ever required
import os

# import time is for giving delayed output or keeps the output on the screen for a while
import time

# import random is for selecting the words randomly
import random

# dictionary of words with keys as numbers and values as words and hints
w0={1:['karnataka','state of india with one of the oldest language','state bird is indian roller,state animal is asian elephant'],
    2:['kerala','one of its port is called as "queen of arabian sea"','called as gods own country'],
    37:['america','one of the countries to have no official language','this country has the maximum divorce rates in the world'],
    17:['vatican','it has a monument named after Michaelangelo','smallest city of the world,it is one of the city-states in the world'],
    18:['australia','formerly called as New Holland','Hugh Jackman is native of this country'],
    19:['snoaring','verb,done by people when they are tired without their knowledge, disturbs others','mostly common with men'],
    3:['pope','francis is the first to become the head of this communtiy from america','head of a religious community'],
    10:['obama','named Person of the year in 2008,2012 in times magazine','prominent ex-leader of the most powerful country,loves basketball'],
    4:['fasting','verb,done as mark of showing anger, also done as a part of health checkup','M.K.Gandhi,anna hazare are known for this act'],
    9:['microsoft','one of the founders is Paul Allen','a corporate company headed by an indian'],
    38:['bengal','fanta juice was originated here as result of WW2 (indian state)','indian state with the longest international boundry'],
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
    41:['scotland','unicorn is the official animal','sean conery is a native of this country'],
    34:['china','air pollution in this country here increases due to snowfall in california','flag of this country has 4 small stars and one star'],
    21:['vivo','parent company is BBK electronics','founder of the comapny is shen wei'],
    32:['iphone','this name was first patented with cisco systems',"this product was earlier called as project purple"],
    27:['italy',"meaning of the country's name is calf land",'this country has won 4 football world cups'],
    28:['thailand','has 1430 islands,was called Siam(formerly)',"country's name means land of the free"],
    33:['brazil','country covers 3 time zones,this country is named after a tree','worlds largest exporter of coffee'],
    31:['madagascar','capital of the country is antananarivo','4th largest island in the world'],
    43:['france','has a pen company(one of the costliest) based on the mountain situated here','david guetta(musician) is from this country'],
    29:['chile','has atacama desert(driest place on earth','famous poet pablo neruda is a native of this country'],
    26:['punjab','indian state with maximum cultivated land','name of the state means collection of 5 rivers'],
    30:['jamaica','only country with 120 rivers','capital of this country is kingston'],
    25:['germany','this country boundries 9 other countries','has the most number of zoos in the world,also christmas tree tradition originated from here'],
    12:['cuba',',largest exporter of sugar in the world','fidel castro is a native of this country'],
    42:['canada','has the maximum number of lakes in the world','justin bieber is from this country'],
    44:['perth','australian city once called as boorloo',"Australia's windiest city,also called city of lights"],
    23:['nokia','comapny named after a place in southern finland','leo mechelin is one of the founders of this company'],
    22:['britain','first country to use postage stamps','stephen hawking is from this country'],
    11:['vegas','criss angel and andre agassi are from this country','brightest man made place on earth seen from space'],
    13:['gujarat','indian state with maximum number of operating airports (17)','indian state with longest sea shore'],
    14:['greece','leading producer of sea sponges in the world','sunniest country in the europe'],
    45:['singapore','has the largest tropical orchid garden in the world','it is one of the city-country in the world'],
    46:['mexico','this was the country that introduced choloclate,chillies,corn to the world','chichen itza pyramid is situated here'],
    47:['norway','noun,capital is oslo,national symbol is lion','has a research station in antarctica named TROLL'],
    36:['japan','largest automobile producer in the world','known as land of rising sun'],
    49:['niue',"country's coins feature mickey mouse and star wars",'island nation in the south pacific'],
    50:['ethiopia','this country follows a traditional calendar that is 7 years behind','its capital is addis ababa'],
    51:['nauru','this country has no capital','its currency is australian dollar'],
    52:['kiribati','only nation in the world that lies in all the 4 hemispheres','capital is tarawa,it is located between australia and hawaii'],
    53:['greenland','this country couldnt make it to the fifa because they cannot grow grass fields here','danish krone is the currency and nuuk is the capital'],
    54:['kyrgyzstan','inylchek glacier (one of the largest) is situated in this country,this country is in the central asia','bishek is the capital,this country is also known for the epic of manas']}
    
# these 9 lines is for printing the hangman figure    
a1=("\t\t\t___\n\t\t\t|")
a2=("\t\t\t___\n\t\t\t|\n\t\t\tO")
a3=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t\t|")
a4=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t\t|\n\t\t\t|")
a5=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t\t|\n\t\t\t|\n\t\t\t|")
a6=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t\t|\ \n\t\t\t|\n\t\t\t|")
a7=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t       /|\ \n\t\t\t|\n\t\t\t|")
a8=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t       /|\ \n\t\t\t|\n\t\t\t|\ ")
a9=("\t\t\t___\n\t\t\t|\n\t\t\tO\n\t\t       /|\ \n\t\t\t|\n\t\t       /|\ ")

# 's' used to store the number corresponding to word which the user needs to guess 
s=0
j1=0

# j2 and k2 are empty strings
j2=""
k2=""

# default ans='Y' for the first loop to be executed
ans="Y"

print()
print()

# title of the game 
print('\t\t\t\t -------------------\n\t\t\t\t|      HANGMAN\t    |\n\t\t\t\t -------------------') 
print()
print()

# asking the user if he wants to play or not
ans0=input("DO YOU WANT TO PLAY THE GAME (Y/N) : ")

# making the user answer into uppercase
ans3=ans0.upper()

# printing invalid input when his input is not Y or N
if ans3!='Y' and ans3!='N':
	print()
	print("INVALID INPUT")
	time.sleep(1)
	
# output for the user's answers N
if ans3=='N':
 print()
 os.system('clear')
 print('\n\t\t\t--------------------------------\n\t\t       |       HAVE   A  GOOD  DAY      |\n\t\t       |\t\t\t        |\n\t\t       |\t     BYE\t\t|\n\t\t\t--------------------------------')
 time.sleep(1)
os.system('clear')
print()
print()

# output only when the user inputs Y
if ans3=='Y':

# asking the user for his details
  name1=input('ENTER YOUR NAME : ')
  name=name1.upper()
time.sleep(1)
print()
os.system('clear')

# making sure that the entire code runs only when both his inputs are Y
while ans=='Y' and ans3=="Y":

# maximum chances that the user gets
	j=9
	w1=[]
# empty list to which the letters of the word are aappended
	w2=[]
	
# r is a set to which wrong guesses are added , to make sure that the letters are not repeated
	r=set()
	
# converting the set of wrong letters into a list and printing it so that the user knows the wrong guesses
	r1=[]

# lsit to which the all the guesses are appende
	g1=[]
	print()
	print()
	
# making the user k now the  different levels of the game
	print('-------------------------------')
	print('THE  LEVELS  OF  THE  GAME  :  ')
	print('--------- EASY -----------: E')	
	print('-------- MODERATE --------: M')
	print('--------- HARD -----------: H')
	print('-------------------------------')
	print()
	
# asking the user to enter the level he wants to play
	level=input(' ENTER  THE  LEVEL  OF  THE  GAME :  ')
	print('-------------------------------')
	time.sleep(1)
	os.system('clear')
	
# choosing the word randomly from the level entered by the user
	if level=='E' or level=='e':
		s=random.randrange(1,19)
	elif level=='M' or level=='m':
		s=random.randrange(18,37)
	elif level=='H' or level=='h':
		s=random.randrange(36,55)
	else:
		print('INVALID  INPUT')
	print('-------------------------------')	
	os.system('clear')
	print()
	
# assigning 'w' a word from the dictionary w0 based on the level chosen but randomly within that level
	w4=w0[s][0]
	
# converting the lowercase into uppercase
	w=w4.upper()
	os.system('clear')
	print()
	print('-------------------------------------')
	print()
	
# making the '_' as a string with spaces in between
	for l in range(len(w)):
		w2.append(w[l])
	for i in range(len(w)):
		w1.append('_')
	k2=" ".join(w1)
	os.system('clear')
	print()
	print()
	print(k2)

# while condition making sure that code works until the words are not equal and chances are less than or equal to 9 and greater than 0
	while j<=9 and j>0 and (w1!=w2):
				print()
				print('-------------------------------------')
				
# p is the hint1 given to user
				p=w0[s][1]
				u=p.upper()
				
# p1 is the hint2 given to user
				p1=w0[s][2]
				u1=p1.upper()
				print('HINT 1 :: ',u)
				print()
				
# hint2 is given only when the user has guessed 4 or more wrong guesses
				if len(r1)==4 or len(r1)>4:
					print('HINT 2 :: ',u1)
					print('-------------------------------------')
				else:
					u3=0
				print()
				
# asking the user for guessing letters
				g3=input('GUESS A LETTER  :  ')
				print()
				g=g3.upper()
				
# condition to check if the letter guessed is an alphabet
				if g.isalpha():
				
# checking if the guessed letter is in the word
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
								
# to delete the '_' in the respective places
									del w1[k]
									
# to add the right letter in the in those deleted '_'
									w1.insert(k,g)
									
# printing it as a string
							j2=" ".join(w1)
							print(j2)
							print()
							
# printing the wrong letters
							print('THE WRONG LETTERS GUESSED ARE : ',	r1)
						else:
							print()
							
# if the letter is guessed more than once
							print('LETTER ALREADY GUESSED,TRY ANOTHER LETTER')
							print()	
					else:
						print(j2)
						print("------------------------------------")
						
# condition to make sure that the wrong letters are not guessed again and again
						if g not in r1:

# adding the wrong guesses into a set 'r'
							r.add(g)
							r1=list(r)
							print()
							print('THE WRONG LETTERS GUESSED ARE :  ',r1)
							print()
							print('*******WRONG GUESS*******')
							print("------------------------------------")
							
# reducing the chances as and when a wrong letter is guessed
							j=j-1
							print()
							
# printing the hangman figure for respective wrong guesses 
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
							
# letting the user know that the wrong letter is already guessed
							print('ALREADY  GUESSED , TRY ANOTHER LETTER  ')
							print('-------------------------------------')
					for v in range(1):
					
# condition to print the output when the actual word is equal to the guessed word
						if w1==w2:
							time.sleep(1)
							os.system('clear')
							print()
							print('\n\t\t\t-----------------------------------')
							print('\n\t\t        |\t\t\t\t   |\n\t\t        |\t   CONGRATULATIONS \t   |\n\t\t        |\t      YOU   WIN \t   |\n\t\t        |\t\t\t\t   |')
							print('\n\t\t\t-----------------------------------')
							print()
							
# condition when chances are zero and the word guessed is incorrect or incomplete
					if j==0 and (w1!=w2):
						time.sleep(1)
						print()
						print('\n\t\t\t-----------------------------------')
						print('\n\t\t        |\t\t\t\t   |\n\t\t        |\t WELL  TRIED, GOOD  JOB    |\n\t\t        |\t     \t\t           |\n\t\t        |\t      YOU LOSE \t\t   |')
						print('\n\t\t\t-----------------------------------')
						print()
						print('-------------------------------------')
# printing the actual word so that the user knows the actual word
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
	
# asking the user to rate the game  from 1-10 (float values)
	print('**************************************************')
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
	print('**************************************************')
	time.sleep(1)
	os.system('clear')
	print()
	
# condition for the same user to replay the game 
	print('-------------------------------------')
	ans1=input("DO YOU WANT TO PLAY AGAIN (Y/N) : ")
	ans=ans1.upper()
	print()
	os.system('clear')
	
# program exits if the input is N
	if ans=='N':
	 print('\n\t\t\t--------------------------------\n\t\t       |   NICE PLAYING,  SEE YOU AGAIN |\n\t\t       |\t\t\t        |\n\t\t       |\t     BYE\t\t|\n\t\t\t--------------------------------')
	 time.sleep(1)
	 os.system('clear')
	 
# program is not executed further when the input is neither Y nor N
	if ans!='N' and ans!='Y':
	 print('INVALID INPUT')
	 time.sleep(1)
	 os.system('clear')
	print()





