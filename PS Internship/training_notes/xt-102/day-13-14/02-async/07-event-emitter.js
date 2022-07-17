const EventEmitter = require( 'events' );

// domain is a generic error handler mechanism
const domain = require( 'domain' );

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

const event = sumAsync( 12, 'hello' );
const event2 = sumAsync( 13, 'world' );

// the domain is a common error-handling mechanism for many events
const domainAsyncArithmetic = domain.create( 'domain_async_arithmetic' );
domainAsyncArithmetic.add( event );
domainAsyncArithmetic.add( event2 );

// domainAsyncArithmetic.on( 'error', function( error ) {
//     console.log( error.message );
// });

// you need not handle this
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

// we MUST handle error events
// event.on( 'error', function( error ) {
//     console.log( error.message );
// });

// foo(); // error -> such errors can be caught by process object

// this event is fired if an error is raised by anyone 
// Using uncaughtException is a bad practice
process.on( 'uncaughtException', function( error ) {
    console.log( error.message );
});