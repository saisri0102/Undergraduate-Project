import { Authentication } from '../../js/services/auth.js';
import { Form } from '../../js/utils/form.js';
import { Alert } from '../../js/utils/alert.js';
import User from '../../js/models/user.js';

import '../../styles/scss/utils.scss';
import '../../styles/scss/form.scss';
import '../../styles/scss/notification.scss';
import '../user.scss';

class Register {
    authentication = new Authentication();

    form = new Form();

    alert = new Alert();

    user = new User();

    signupFormEl = document.querySelector( '#signup-form' );

    uName = this.signupFormEl.uname;

    uEmail = this.signupFormEl.uemail;

    uPwd = this.signupFormEl['signup-pwd'];

    confPwd = this.signupFormEl['confirm-pwd'];

    cancelSignup = document.querySelector( '.cancel-btn' );

    pwdHelp = document.querySelector( '#pwd-help' );

    nameCheck = () => {
        const errors = this.user.setName( this.uName.value );
        return this.form.checkAndDisplayError( this.uName, errors );
    }

    emailCheck = () => {
        const errors = this.user.setEmail( this.uEmail.value );
        return this.form.checkAndDisplayError( this.uEmail, errors );
    }

    passwordCheck = () => {
        const errors = this.user.validatePassword( this.uPwd.value );
        const result = this.form.checkAndDisplayError( this.uPwd, errors );
        if ( !result ) {
            this.pwdHelp.style.display = 'none';
            return false;
        }
        return true;
    }

    confPwdCheck = () => {
        const errors = this.user.validateConfirmPassword( this.confPwd.value, this.uPwd.value );
        return this.form.checkAndDisplayError( this.confPwd, errors );
    }

    signUpValidate = () => {
        if ( this.nameCheck()
             && this.emailCheck()
             && this.passwordCheck()
             && this.confPwdCheck()
        ) {
            return true;
        }

        return false;
    }

    signUpToApp = async () => {
        if ( !this.signUpValidate() ) {
            return;
        }

        try {
            // eslint-disable-next-line max-len
            await this.authentication.signup( this.uName.value, this.uEmail.value, this.uPwd.value );
            this.alert.showSuccessMessage( 'Account created Successfully', 10 );
            setTimeout( () => {
                window.location.href = '../login/login.html';
            }, 2000 );
        } catch ( error ) {
            this.alert.showErrorMessage( error.message, 10 );
        }
    }

    addListeners() {
        this.uName.addEventListener( 'change', this.nameCheck );
        this.uEmail.addEventListener( 'change', this.emailCheck );
        this.uPwd.addEventListener( 'change', this.passwordCheck );
        this.confPwd.addEventListener( 'change', this.confPwdCheck );

        this.signupFormEl.addEventListener( 'submit', ( event ) => {
            event.preventDefault();
            this.signUpToApp();
        } );

        this.cancelSignup.addEventListener( 'click', () => {
            window.location.href = '../login/login.html';
        } );
    }

    init() {
        this.addListeners();
    }
}

const page = new Register();
page.init();
