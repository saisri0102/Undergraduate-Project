import { login } from '../../js/services/auth.js';
import User from '../../js/models/User.js';
import { hideError, showError } from '../../js/utils/form.js';

class LoginPage {
    // same as saying this.loginForm = ... within the constructor
    loginForm = document.querySelector( 'form' );

    user = new User( '', '' );

    onInputEmail = ( event : InputEvent ) => {
        const eventTarget = event.target as HTMLInputElement;
        const errors = this.user.setEmail( eventTarget.value );

        if( errors.length === 0 ) {
            hideError( eventTarget );
            return;
        }

        showError( eventTarget, errors.join( ', ' ) );
    }

    onInputPassword = ( event : InputEvent ) => {
        const eventTarget = event.target as HTMLInputElement;
        const errors = this.user.setPassword( eventTarget.value );

        if( errors.length === 0 ) {
            hideError( eventTarget );
            return;
        }

        showError( eventTarget, errors.join( ', ' ) );
    }

    async loginToApp() {
        if( !this.user.isValid() ) {
            return;
        }

        await login( this.user.email, this.user.password );

        window.location.href = '/src/workshops/workshops-list/workshops-list.html';
    }

    // a method which is defined using arrow function syntax will ALWAYS have its context ("this") set to the object
    onSubmitLoginForm = ( event : Event ) => {
        event.preventDefault();
        this.loginToApp();
    }

    addListeners() {
        const loginForm = this.loginForm as any;
        loginForm.email.addEventListener( 'input', this.onInputEmail );
        loginForm.password.addEventListener( 'input', this.onInputPassword );
        loginForm.addEventListener( 'submit', this.onSubmitLoginForm );
    }

    init() {
        this.addListeners();
    }
}

// setup page on load
const page = new LoginPage();
page.init();

export default LoginPage;
