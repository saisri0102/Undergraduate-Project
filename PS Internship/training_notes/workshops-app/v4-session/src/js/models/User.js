class User {
    constructor( email, password ) {
        this.email = email;
        this.password = password;
    }

    validateEmail() {
        const emailPat = /\w+@example.com/;
        const errors = [];

        if( this.email.trim() === '' ) {
            errors.push( 'Email is empty or has only spaces' );
        }

        if( !emailPat.test( this.email ) ) {
            errors.push( 'Email format is not valid' );
        }

        return errors;
    }

    validatePassword() {
        const errors = [];

        if( this.password === '' ) {
            errors.push( 'Password is empty' );
        }

        return errors;
    }

    validate() {
        const errors = {}; // { email: [ 'Email format is not valid' ], password: [ 'Password is empty' ] }

        errors.email = this.validateEmail();
        errors.password = this.validatePassword();

        return errors;
    }

    isValid() {
        const errors = this.validate();
        return errors.email.length === 0 && errors.password.length === 0;
    }

    setEmail( email ) {
        this.email = email;
        return this.validateEmail();
    }

    setPassword( password ) {
        this.password = password;
        return this.validatePassword();
    }
}

export default User;
