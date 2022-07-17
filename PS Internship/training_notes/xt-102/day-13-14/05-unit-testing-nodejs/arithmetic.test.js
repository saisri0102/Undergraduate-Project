const { subtract } = require( './arithmetic' );

describe( 'subtract function', () => {
    it( 'should return -1 when 1 and 2 are subtract', () => {
        // arrange
        const x = 1, y = 2;
        let result;

        // act
        result = subtract( x, y );

        // assert
        expect( result ).toBe( -1 );
    });
});