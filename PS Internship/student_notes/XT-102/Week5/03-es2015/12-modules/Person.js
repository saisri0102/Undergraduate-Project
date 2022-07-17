
//Person is named export
export class Person{

    //ES2018 feature (class properties suntax - setting up properties outside of methods)

    nationality = Person.getNationality();
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    static getNationality(){ // static is associated with class
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