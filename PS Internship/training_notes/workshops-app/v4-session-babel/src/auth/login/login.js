// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import { login } from '../../js/services/auth';
import User from '../../js/models/User';
import { hideError, showError } from '../../js/utils/form';

import '../../common/utils.scss';
import '../../common/app.scss';
import '../../common/nav.scss';

class LoginPage {
    // same as saying this.loginForm = ... within the constructor
    loginForm = document.querySelector( 'form' );

    user = new User( '', '' );

    onInputEmail = ( event ) => {
        const errors = this.user.setEmail( event.target.value );

        if( errors.length === 0 ) {
            hideError( event.target );
            return;
        }

        showError( event.target, errors.join( ', ' ) );
    }

    onInputPassword = ( event ) => {
        const errors = this.user.setPassword( event.target.value );

        if( errors.length === 0 ) {
            hideError( event.target );
            return;
        }

        showError( event.target, errors.join( ', ' ) );
    }

    async loginToApp() {
        if( !this.user.isValid() ) {
            return;
        }

        await login( this.user.email, this.user.password );

        window.location = '/src/workshops/workshops-list/workshops-list.html';
    }

    /**
     * a method which is defined using
     * arrow function syntax will ALWAYS have its context ("this") set to the object
     */
    onSubmitLoginForm = ( event ) => {
        event.preventDefault();
        this.loginToApp();
    }

    addListeners() {
        this.loginForm.email.addEventListener( 'input', this.onInputEmail );
        this.loginForm.password.addEventListener( 'input', this.onInputPassword );
        this.loginForm.addEventListener( 'submit', this.onSubmitLoginForm );
    }

    init() {
        this.addListeners();
    }
}

// setup page on load
const page = new LoginPage();
page.init();

export default LoginPage;
