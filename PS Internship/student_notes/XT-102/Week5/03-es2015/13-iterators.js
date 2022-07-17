// for -in for key value pairs (objects)
// for -of is for iterables 
//Iterables - Arrays, sets, strings, maps 

for(let c of "Hello World"){
    console.log(c); // H e l l o  W o r l d
}
// if I use in for iterables then it will index
// NOTE: in is only for key value pairs not for iterables 
for(let c in "Hello world"){
    console.log(c); // 0 1 2 3 4 5 6 7 8 9 10
}