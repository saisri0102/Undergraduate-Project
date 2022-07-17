# importing random function to chose a word randomly
import random

# making a dictionary of words
w0={0:['linguist','noun,refers a person who can survive in many countries'],1:['joey','noun,animals,found only in southernmost island'],
	2:['zebra','noun,animals,hybrid of many animals'],
	3:['yalk','noun,animals,sounds similar to a yellow edible item'],4:['frown','noun,expression when you dont like something'],
	5:['cripple','verb,disability,'],
	6:['drip','noun,object that is needed for survival'],7:['rampage','verb,related with action of group of people'],
	8:['wrath','noun,feeling'],
	9:['queer','adjective,different(synonym)'],10:['unique','adjective'],11:['pope','noun,religion,head of a community'],
	12:['missile','noun,science,ex-president of india(known as)'],13:['nibble','noun,computer,electronics'],
	14:['gamble','verb,game,only rich people are involved'],15:['asylum','noun,health'],
	16:['success','noun,outcome,everyone wishes for it'],
	17:['erratic','adjective,unpredictive'],18:['trek','noun,activity'],
	20:['vicious','adjective,behaviour'],21:['brother','noun,relation'],
	22:['horrified','verb,feeling,conjuring'],23:['informer','noun,person of help'],
	23:['killer','noun,person related to cop'],24:['organic','noun,science,food'],
	25:['xenon','noun,science(element),fluroscent'],26:['obnoxious','adjective,unpleasant'],
	27:['misbehave','verb,unpleasant act,teachers hate this act of students'],28:['anthropology','noun,study of culture'],
	29:['jurassic','adjective,mesozoic era,hollywood'],30:['dynamic','adjective,constant progress,computer language'],
	31:['scorpion','noun,animal,'],32:['troubleshoot','verb,analysis,computers'],
	33:['prosper','verb,act of growing'],34:['narcotic','noun/verb,related to olden latin america']}
	
# creating a set to add wrong guesses and converting that to a list
r=set()
r1=[]

# randomly chosing a number from in the range of keys of the dictionary
s=random.randrange(35)

# setting randomly a word from the dictionary to a variable 'w' for guessing
w=w0[s][0]

# creating an empty list to append the letters from the string to list
w2=[]

# creating an empty list to make sure the letters are not repeated
g1=[]

# creating the set so that redundancy of letters is maintained
f=set()

# initializing the n and b to zero , (constants)
n=0
b=0

# creating an empty list to add the letters that the user guesses
w1=[]

# for loop to append the letters from the string to empty list
for l in range(len(w)):
	w2.append(w[l])
	
# for loop to print the '_'(dashes)
for i in range(len(w)):
	w1.append('_')
print(w1)

# for loop to add to the empty set , to decide the number of chances
for x in range(len(w)):
	f.add(w[x])

# maximum chances a user gets
j=(len(f)+7)

# while loop to decide the termination of the loop
while j<=(len(f)+7) and j>=0 and (w1!=w2):
	print()
	print('-----------------------------------------')
	print()
# giving hint to the user so that guessing becomes simpler
	p=w0[s][1]
	u=p.upper()
	print(' HINT  :  ',u)
	print()
# asking the user to input the letter 
	g=input('GUESS A LETTER  :  ')
	if g.isalpha():
# to check if the letter entered is in the initial word
		if g in w:
			print()
			print('******** RIGHT GUESS ********')
			print('REMAINING  CHANCES  :  ',j)
			print()
# to make sure that the same letter is not entered again and again
			if g not in g1:
				g1.append(g)
# finding the position of the entered letter with the initial word
				for k in range(len(w)):
# replacing the '_'(dashes) with the entered letter
					if w[k]==g:
# removing the '_'(dash) from 'k' position so that the letter guessed can be inserted
						del w1[k]
						w1.insert(k,g)
				print(w1)
# letting the user know that he has already entered that letter , so try again
			else:
				print()
				print('LETTER ALREADY GUESSED,TRY ANOTHER LETTER')
				print()
# to inform the user that his input is wrong	
		else:
			r.add(g)
			r1=list(r)
			print(w1)
			print()
			print('THE WRONG LETTERS GUESSED ARE :  ',r1)
			print()
			print('*******WRONG GUESS*******')
			print(' REMAINING CHANCES  :  ',j)
			print()
# to check if the initial word is same as that the guesses word
		for v in range(1):
			if w1==w2:
				print()
				print('-------------------------------------')
				print()
				print('******** CONGRATULATIONS , YOU WON ********')
				print('*************** GAME  OVER ****************')
				print()
				print('------------------------------------')
				print('THE  GUESSED  WORD  IS  :  ',w)
				print('-------------------------------------')
			else:
				n=0
# to stop the user from entering the letters , as max chances are over and the guessed word not same as given word
		if j==0 and (w1!=w2):
			print()
			print('-------------------------------------')
			print('********** WELL TRIED , YOU HAVE LOST **********')
			print('***************** GAME  OVER *******************')
			print('-------------------------------------')
			print()
			print('ACTUAL  WORD  :  ',w)
		else:
			b=0
	else:
		print('INVALID  INPUT')
	j=j-1
print()
print()

# asking the user/player to rate the game
print('*******************************************')
rate=float(input('PLEASE  RATE  THE  GAME  :  '))
print()

# output for the rating entered by the user
if rate>=0.0 and rate<=4.9:
	print('THANKS  FOR PLAYING , WE SURELY WILL SATISFY YOU THE NEXT TIME')
elif rate>=5 and rate<=8.9:
	print('THANKS FOR PLAYING , DO PLAY THE GAME ONCE AGAIN')
elif rate>=9.0 and rate<=10.0:
	print('THANKS FOR PLAYING , DO NOT FORGET US')
else:
	print('INVALID INPUT')
print()
print('*******************************************')
print()