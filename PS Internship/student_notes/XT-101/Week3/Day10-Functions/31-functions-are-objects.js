// Functions are objects

function sum1(x,y){
    return x+y;
}

sum1.age=50;

sum1.celebrateBirthday= function(){
    this.age++;
};

sum1.celebrateBirthday();

console.log(sum1.age);