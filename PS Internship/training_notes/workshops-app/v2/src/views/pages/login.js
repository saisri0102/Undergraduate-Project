import Login from '../../controllers/pages/login.js';
const loginForm = document.querySelector( 'form' );

// async function loginToApp() {
//     if( !validate() ) {
//         return;
//     }

//     await login( loginForm.email.value, loginForm.password.value );
    
//     window.location = '/workshops';
// }

// initial page setup
function init() {
    const loginCtrl = new Login({
        action: '/login'
    });

    loginCtrl.renderView();
}

init();