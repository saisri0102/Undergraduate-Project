// EXERCISE: Q9 from ES2015 lab guide
class Person {
    // ES2018 feature (class properties syntax - setting up properties outside of methods)
    nationality = Person.getNationality();

    constructor( name, age ) {
        this.name = name;
        this.age = age;
        // if set, it overwrites the value set using class properties syntax
        // this.nationality = 'American';
        
        // return this;
    }

    static getNationality() {
        return 'Indian';
    }

    celebrateBirthday() {
        this.age++;
    }

    setNickname( nickname ) {
        this.nickname = nickname;
    }

    // try not to use this syntx
    setAge = function( newAge ) {
        this.age = newAge;
    }
}

const john = new Person( 'John', 32 ); // this -> {} and constructor is called
john.celebrateBirthday();
john.setNickname( 'Johnny' );
john.setAge( 40 );
console.log( john );

console.log( Person.getNationality() );