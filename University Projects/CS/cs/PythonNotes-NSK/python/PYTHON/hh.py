import random
  2. HANGMANPICS = ['''

  3.

  4.   +---+

  5.   |   |

  6.       |

  7.       |

  8.       |

  9.       |

 10. =========''', '''

 11.

 12.   +---+

 13.   |   |

 14.   O   |

 15.       |

 16.       |

 17.       |

 18. =========''', '''

 19.

 20.   +---+

 21.   |   |

 22.   O   |

 23.   |   |

 24.       |

 25.       |

 26. =========''', '''

 27.

 28.   +---+

 29.   |   |

 30.   O   |

 31.  /|   |

 32.       |

 33.       |

 34. =========''', '''

 35.

 36.   +---+

 37.   |   |

 38.   O   |

 39.  /|\  |

 40.       |

 41.       |

 42. =========''', '''

 43.

 44.   +---+

 45.   |   |

 46.   O   |

 47.  /|\  |

 48.  /    |

 49.       |

 50. =========''', '''

 51.

 52.   +---+

 53.   |   |

 54.   O   |

 55.  /|\  |

 56.  / \  |

 57.       |

 58. =========''']

 59. words = 'ant baboon badger bat bear beaver camel cat clam cobra cougar coyote crow deer dog donkey duck eagle ferret fox frog goat goose hawk lion lizard llama mole monkey moose mouse mule newt otter owl panda parrot pigeon python rabbit ram rat raven rhino salmon seal shark sheep skunk sloth snake spider stork swan tiger toad trout turkey turtle weasel whale wolf wombat zebra'.split()

 60.

 61. def getRandomWord(wordList):

 62.     # This function returns a random string from the passed list of strings.

 63.     wordIndex = random.randint(0, len(wordList) - 1)

 64.     return wordList[wordIndex]

 65.

 66. def displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord):

 67.     print(HANGMANPICS[len(missedLetters)])

 68.     print()

 69.

 70.     print('Missed letters:', end=' ')

 71.     for letter in missedLetters:

 72.         print(letter, end=' ')

 73.     print()

 74.

 75.     blanks = '_' * len(secretWord)

 76.

 77.     for i in range(len(secretWord)): # replace blanks with correctly guessed letters

 78.         if secretWord[i] in correctLetters:

 79.             blanks = blanks[:i] + secretWord[i] + blanks[i+1:]

 80.

 81.     for letter in blanks: # show the secret word with spaces in between each letter

 82.         print(letter, end=' ')

 83.     print()

 84.

 85. def getGuess(alreadyGuessed):

 86.     # Returns the letter the player entered. This function makes sure the player entered a single letter, and not something else.

 87.     while True:

 88.         print('Guess a letter.')

 89.         guess = input()

 90.         guess = guess.lower()

 91.         if len(guess) != 1:

 92.             print('Please enter a single letter.')

 93.         elif guess in alreadyGuessed:

 94.             print('You have already guessed that letter. Choose again.')

 95.         elif guess not in 'abcdefghijklmnopqrstuvwxyz':

 96.             print('Please enter a LETTER.')

 97.         else:

 98.             return guess

 99.

100. def playAgain():

101.     # This function returns True if the player wants to play again, otherwise it returns False.

102.     print('Do you want to play again? (yes or no)')

103.     return input().lower().startswith('y')

104.

105.

106. print('H A N G M A N')

107. missedLetters = ''

108. correctLetters = ''

109. secretWord = getRandomWord(words)

110. gameIsDone = False

111.

112. while True:

113.     displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord)

114.

115.     # Let the player type in a letter.

116.     guess = getGuess(missedLetters + correctLetters)

117.

118.     if guess in secretWord:

119.         correctLetters = correctLetters + guess

120.

121.         # Check if the player has won

122.         foundAllLetters = True

123.         for i in range(len(secretWord)):

124.             if secretWord[i] not in correctLetters:

125.                 foundAllLetters = False

126.                 break

127.         if foundAllLetters:

128.             print('Yes! The secret word is "' + secretWord + '"! You have won!')

129.             gameIsDone = True

130.     else:

131.         missedLetters = missedLetters + guess

132.

133.         # Check if player has guessed too many times and lost

134.         if len(missedLetters) == len(HANGMANPICS) - 1:

135.             displayBoard(HANGMANPICS, missedLetters, correctLetters, secretWord)

136.             print('You have run out of guesses!\nAfter ' + str(len(missedLetters)) + ' missed guesses and ' + str(len(correctLetters)) + ' correct guesses, the word was "' + secretWord + '"')

137.             gameIsDone = True

138.

139.     # Ask the player if they want to play again (but only if the game is done).

140.     if gameIsDone:

141.         if playAgain():

142.             missedLetters = ''

143.             correctLetters = ''

144.             gameIsDone = False

145.             secretWord = getRandomWord(words)

146.         else:

147.             break

