import { Form } from '../utils/form';

class User {
    form = new Form();

    constructor( user ) {
        Object.assign( this, user );
    }

    validateEmail() {
        const emailPat = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        const errors = [];

        errors.push( ...this.form.requiredValidation( 'Email', this.email ) );

        if ( !emailPat.test( this.email.trim() ) ) {
            errors.push( 'Enter valid Email ID' );
        }
        return errors;
    }

    validatePassword( password ) {
        const passwordPat = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/;
        const errors = [];

        errors.push( ...this.form.requiredValidation( 'Password', password ) );

        if ( !passwordPat.test( password.trim() ) ) {
            errors.push(
                'Password must contain 1 uppercase,1 lowercase,1 digit ,1 special char & minimum 8 characters'
            );
        }
        return errors;
    }

    validateConfirmPassword( confirmPassword, password ) {
        const errors = [];

        errors.push( ...this.form.requiredValidation( 'Confirm Password', confirmPassword ) );

        if ( confirmPassword.trim() !== password.trim() ) {
            errors.push( 'Password and Confirm password should be same' );
        }
        return errors;
    }

    setName( name ) {
        this.name = name;
        return this.requiredValidate( 'Username', this.name );
    }

    setEmail( email ) {
        this.email = email;
        return this.validateEmail();
    }
}

export default User;
