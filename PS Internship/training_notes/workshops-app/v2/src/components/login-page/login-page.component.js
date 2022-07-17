import Component from '../Component.js';

class LoginPage extends Component {
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