const EventEmitter = require( 'events' );

function sumAsync( x, y ) {
    const event = new EventEmitter();

    setTimeout(function() {
        event.emit( 'update', 'Just 1 more second!' )
    }, 2000);

    setTimeout(function() {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            event.emit( 'error', new Error( 'both arguments must be numbers' ) );
            return;
        }

        event.emit( 'done', x + y );
    }, 3000);

    return event;
};

const event = sumAsync( 12, 13 );

event.on( 'update', function( result ) {
    console.log( 'something is cooking. let us wait...' );
});

event.on( 'done', function( result ) {
    console.log( 'the result is ', result );
});

event.on( 'done', function( result ) {
    const event2 = sumAsync( result, 14 )

    // event2.on( 'done'... (the story repeats)
});

event.on( 'error', function( error ) {
    console.log( error.message );
});