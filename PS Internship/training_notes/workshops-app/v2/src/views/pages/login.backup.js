(function() {
    const user = new User();
    const loginForm = document.querySelector( 'form' );

    function validate() {
        // if invalid, display error messages and return false
        // return false;
        
        return true;
    }
    
    async function loginToApp() {
        if( !validate() ) {
            return;
        }

        await login( loginForm.email.value, loginForm.password.value );
        
        window.location = '/workshops';
    }

    function addListeners() {
        loginForm.addEventListener( 'submit', function( event ) {
            event.preventDefault();
            loginToApp();
        });
    }
    
    // initial page setup
    function init() {
        addListeners();
    }

    // setup page on load
    init();
}());