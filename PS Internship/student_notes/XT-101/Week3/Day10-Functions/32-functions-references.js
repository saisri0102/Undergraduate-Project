// Functions are objects - function reference work just like object references
function sum1(x,y){
    return x+y;
}

// both sum2 and sum1 refer to the same function in memory
const sum2=sum1 ;

console.log(sum2(12,13));


function celebrateBirthday(){
    this.age++;
}
const john={
    name: 'John',
    age:32,
    celebrateBirthday : celebrateBirthday
}
const jane={
    name: 'jane',
    age:28,
    celebrateBirthday: celebrateBirthday
}

 john.celebrateBirthday();
 jane.celebrateBirthday();

console.log(john);
console.log(jane);