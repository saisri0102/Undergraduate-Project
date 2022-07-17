class Person{

    //ES2018 feature (class properties suntax - setting up properties outside of methods)

    nationality = Person.getNationality();
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    static getNationality(){
        return 'Indian';
    }

    celebrateBirthday(){
        this.age++;
    }
    setNickName(nickname){
        this.nickname= nickname;
    }

    setAge= (newAge) => {
        this.age= newAge;
    }

}

const john = new Person('john',32);
john.celebrateBirthday();
john.setNickName('jonny');
Person.getNationality();