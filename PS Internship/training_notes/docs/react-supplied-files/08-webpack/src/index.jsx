import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

if( module.hot ) {
    module.hot.accept( './App.jsx', function() {
        console.log( 'within index.js hot update handler for App component' );
        ReactDOM.render( <App />, document.getElementById( 'root' ) );
    });
}

ReactDOM.render( <App />, document.getElementById( 'root' ) );