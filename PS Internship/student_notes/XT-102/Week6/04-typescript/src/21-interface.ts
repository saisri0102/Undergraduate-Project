/**
 * Interface is used to define what "public" methods (API) a class should have
 */

interface LivingBeing {
    celebrateBirthday: () => void;
}

interface CanUseSenses {
    hear : ( message : string ) => void;
    speak: () => string;
}

class Person implements LivingBeing, CanUseSenses {
    inputs : string[] = [];

    celebrateBirthday() {

    }

    hear( message : string ) {
        this.inputs.push( message );
    }

    speak() {
        return 'Hello';
    }
}

class Dog implements LivingBeing {
    celebrateBirthday() {

    }
}

export {}