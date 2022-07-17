/**
 * Authorization for the app
 */
const LS_KEYS = {
    EMAIL: 'email',
    NAME: 'name',
    TOKEN: 'token'
};

function storeUserInfo( responseJson ) {
    localStorage.setItem( LS_KEYS.EMAIL, responseJson.email );
    localStorage.setItem( LS_KEYS.NAME, responseJson.name );
    localStorage.setItem( LS_KEYS.TOKEN, responseJson.token );
}

function getToken() {
    return localStorage.getItem( LS_KEYS.TOKEN ); // returns null if a key called "token" does not exist
}

function login() {
    const myHeaders = new Headers();
    myHeaders.append( 'Content-Type', 'application/json' );

    const body = JSON.stringify({
        email: loginForm.email.value,
        password: loginForm.password.value
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    };

    return fetch( 'https://mymeetingsapp.herokuapp.com/api/auth/login', requestOptions ) // success for (2xx, 4xx)
        .then(function( response ) {
           //console.log(response.ok);
            if( !response.ok ) {
                console.log(response.status);
                alert(response.status);
                throw new Error( 'bad credentials' );
            }
            
            return response.json();
        })
        .then( storeUserInfo );
}