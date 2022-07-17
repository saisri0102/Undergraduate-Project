const { sum } = require( './sum' );

// test sum function
// a test passes if every expectation within it passes
test( 'the sum function returns 3 when 1 and 2 are passed', function() {
    // toBe() is one of the matcher functions
    // toBe() is used to check for equality of primitive values
    expect( sum( 1, 2 ) ).toBe( 3 );
});

// Run tests with npm run test