## Regex
- Regular expression matching is only for strings
- ^ -> check from start
- $ -> check till end 

### Flags
- Flags are given as second argument to the regex constructor 
- /i -> ignore case
- /g -> global (find all occurances of the pattern)
- test -> returns boolean
- match -> returns array (1. returns what it matched, 2. where it matched(index))
- test, exect are the only two methods of regex
- /n to ignore next line 

## String methods

### match()
- match() - returns array (1. returns what it matched, 2. where it matched(index))

### search()
- search() -> Finds the first substring match in the regex (just like match but not powerful)
- search() gives only the index and it is bit faster than match()
-  If no match found then it returns -1

### replace()
- Replace regex 
- First argument can be regex or plain string too
- Does not change the initial string 

### split()
- Split string into substrings based on some delimiter pattern/delimiter string

## Meta characters 
- . -> represents any 1 one character
- ? -> 0 or 1 occurance
- * -> 0 or more occurance
- + -> 1 or more occurance
- {n,m} -> between n and m occurances

## character class

