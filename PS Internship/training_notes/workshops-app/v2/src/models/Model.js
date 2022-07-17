import EventEmitter from '../utils/EventEmitter.js';

class Model extends EventEmitter {
    errors = {}

    validate() {
        throw new Error( `validate not defined() for ${this.constructor}` );
    }

    hasErrors() {
        for( let key in this.errors ) {
            if( this.errors[key].length ) {
                return key;
            }
        }

        return false;
    }
}

export default Model;