import { Authentication } from '../../js/services/auth';
import { Form } from '../../js/utils/form';
import { Alert } from '../../js/utils/alert';
import User from '../../js/models/user';

import '../../styles/scss/utils.scss';
import '../../styles/scss/form.scss';
import '../../styles/scss/notification.scss';
import '../user.scss';

class Login {
    loginFormEl = document.querySelector( '#login-form' );

    uEmail = this.loginFormEl.uemail;

    uPwd = this.loginFormEl['login-pwd'];

    authentication = new Authentication();

    form = new Form();

    alert = new Alert();

    user = new User();

    emailCheck = () => {
        const errors = this.user.setEmail( this.uEmail.value );
        return this.form.checkAndDisplayError( this.uEmail, errors );
    }

    passwordCheck = () => {
        const errors = this.user.requiredValidate( 'Password', this.uPwd.value );
        return this.form.checkAndDisplayError( this.uPwd, errors );
    }

    loginValidate() {
        if ( this.emailCheck() && this.passwordCheck() ) {
            return true;
        }

        return false;
    }

    loginToApp = async () => {
        if ( !this.loginValidate() ) {
            return;
        }
        try {
            await this.authentication.login( this.uEmail.value, this.uPwd.value );
            this.alert.showSuccessMessage( 'Successfully logged in', 3 );

            setTimeout( () => {
                window.location.href = '../../calendar/calendar.html';
            }, 2000 );
        } catch ( error ) {
            this.alert.showErrorMessage( error.message, 10 );
        }
    }

    addListeners() {
        this.uEmail.addEventListener( 'change', this.emailCheck );
        this.uPwd.addEventListener( 'change', this.passwordCheck );

        this.loginFormEl.addEventListener( 'submit', ( event ) => {
            event.preventDefault();
            this.loginToApp();
        } );
    }

    init() {
        this.addListeners();
    }
}

const page = new Login();
page.init();
