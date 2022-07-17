const loginForm = document.querySelector( '#login-form' );

function validate() {
    return true; // assume form input is valid
}

loginForm.addEventListener( 'submit', async function( event ) {
    event.preventDefault();
    
    if( validate() ) {
        try {
            await login();
        } catch( error ) {
            alert( 'Unable to login' );
        }
    }
});