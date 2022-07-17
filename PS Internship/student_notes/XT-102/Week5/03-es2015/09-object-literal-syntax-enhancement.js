const name='John';
const spouseKey ='wife';

const john ={
    name,
    [spouseKey] :'Jane',
    age:32,
    celebrateBirthday(){
        this.age++;
    }
};
console.log(john);