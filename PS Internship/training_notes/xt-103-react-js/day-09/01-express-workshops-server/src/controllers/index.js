// const path = require( 'path' );

function getHome( req, res ) {
    // res.send( 'Hello, Express' );
    // process.cwd() -> folder where Node proceds was started (project root folder)
    // res.sendFile( path.join( process.cwd(), 'src/views/index.html' ) );
    res.render( 'index', {
        title: 'Home | Workshops App',
        appName: 'Workshops App',
        features: [
            'You can search for workshops',
            'You can view sessions for workshops',
            'You can request for sessions in a workshop',
            'You can vote on sessions'
        ]
    });
}

// EXERCISE: Do the same for about (create and serve about.html)
function getAbout( req, res ) {
    // res.sendFile( path.join( process.cwd(), 'src/views/about.html' ) );
    res.render( 'about', {
        title: 'About | Workshops App'
    });
}

module.exports = {
    getHome,
    getAbout
};