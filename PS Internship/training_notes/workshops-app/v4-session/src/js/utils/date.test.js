const formatDate = ( isoDateStr = '', format = 'standard' ) => {
    const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

    switch( format ) {
        case 'display':
            return new Date( isoDateStr ).toDateString().substr( 0, 18 );
        case 'day':
            return days[new Date( isoDateStr ).getDay()];
        case 'standard':
        default:
            return isoDateStr.substr( 0, 10 );
    }
};

describe( 'formatDate function', () => {
    it( 'should format in standard format when default format is used', () => {
        // arrange
        const date = '2019-01-01T04:00:00.000Z';

        // act
        const result = formatDate( date );

        // assert
        expect( result ).toBe( '2019-01-01' );
    });

    it( 'should return the correct day when an format `day` is passed', () => {
        // arrange
        const date = '2021-03-10T12:00:00.000Z';

        // act
        const result = formatDate( date, 'day' );

        // assert
        expect( result ).toBe( 'Wed' );
    });
});