import { formatDate } from './date';

xdescribe( 'formatDate function', () => {
    it( 'should format in standard format when default format is used', () => {
        // arrange
        const date = '2019-01-01T04:00:00.000Z';

        // act
        const result = formatDate( date );

        // assert
        expect( result ).toBe( '2019-01-01' );
    });
});