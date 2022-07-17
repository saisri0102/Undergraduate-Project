import Component from '../Component.js';
import User from '../../models/User.js';
import AppConfig from '../../config.js';
import { login } from '../../services/auth.js';

class LoginForm extends Component {
    state = {
        user: new User()
    };

    setEmail = ( event ) => this.state.user.setEmail( event.target.value );
    setPassword = ( event ) => this.state.user.setPassword( event.target.value );

    showError( node, message ) {
        node.innerText = message;
        node.classList.remove( 'hide' );
    }
    
    hideError( node ) {
        node.classList.add( 'hide' );
    }

    onValidationFailure = ( errors ) => {
        const loginForm = document.querySelector( '#login-form' );
        const emailEl = loginForm.email;
        const passwordEl = loginForm.password;

        if( errors.email ) {
            this.showError( emailEl, errors.join( ', ' ) );
        } else {
            this.showError( emailEl );
        }

        if( errors.password ) {
            this.showError( passwordEl, errors.join( ', ' ) );
        } else {
            this.showError( passwordEl );
        }
    }
    
    login = ( event ) => {
        event.preventDefault();

        const { user } = this.state;
        
        if( user.validate() ) {
            login( user.email, user.password );
        }
    };

    addListeners() {
        const loginForm = document.querySelector( '#login-form' );
        
        loginForm.email.addEventListener( 'input', this.setEmail );
        loginForm.password.addEventListener( 'input', this.setPassword );

        this.state.user.subscribe( User.Events.VALIDATION_FAILED, this.onValidationFailure );
        
        loginForm.addEventListener( 'submit', this.login );
    }

    renderView() {
        const tplLoginView = Handlebars.compile( document.querySelector( '#tpl-login-page' ).innerHTML );
        document.querySelector( '#root' ).innerHTML = tplLoginView({
            action: '/login',
            AppConfig
        });
        this.addListeners();
    }
}

export default LoginForm;