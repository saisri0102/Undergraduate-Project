// Person is a named export
export class Person {
    nationality = Person.getNationality();

    constructor( name, age ) {
        this.name = name;
        this.age = age;
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