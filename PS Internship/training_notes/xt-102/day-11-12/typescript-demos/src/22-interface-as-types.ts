/**
 * Interface is used to define what "public" methods (API) a class should have
 */

type AnyKeyObj = { [ key : string ] : any };

interface LivingBeing {
    celebrateBirthday: () => void;
}

interface CanUseSenses {
    hear : ( message : string ) => void;
    speak: () => string;
}

const john : CanUseSenses & LivingBeing & AnyKeyObj = {
    name: 'John',
    inputs: [],
    age: 32,
    celebrateBirthday() {
        this.age++;
    },
    hear( message : string ) {
        this.inputs.push( message );
    },
    speak() {
        return this.inputs[this.inputs.length - 1];
    }
}

function hearAndSpeak( obj : CanUseSenses ) {
    obj.hear( 'Hello' );
    console.log( obj.speak() );
}

hearAndSpeak( john );

const jane = {
    inputs: [],
    hear( message : string ) {
        (this.inputs as string[]).push( message );
    },
    speak() {
        return this.inputs[this.inputs.length - 1];
    }
}

// we can pass jane object to hearAndSpeak where actually a CanUseSenses object is expected - TS is "Structurally Typed" (whereas Java etc. is "Nominally Typed")
// jane "looks like" a CanUseSenses object, therefore jane can be passed to hearAndSpeak()
hearAndSpeak( jane );

export {}