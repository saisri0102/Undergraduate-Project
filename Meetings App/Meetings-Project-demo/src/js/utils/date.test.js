/* eslint-disable no-undef */

import { FormatDate } from './date';

describe( 'time Format function', () => {
    it( 'time format', () => {
        const formatDate = new FormatDate();
        // arrange
        const time = '9';

        // act
        const result = formatDate.timeFormat( time );

        // assert
        expect( result ).toBe( '09' );
    } );

    it( 'date format', () => {
        const formatDate = new FormatDate();
        const date = '2019-01-01T04:00:00.000Z';

        const result2 = formatDate.dateFormat( date );
        expect( result2 ).toBe( '01 January 2019' );
    } );

    it( 'Day format', () => {
        const formatDate = new FormatDate();
        // arrange
        // act
        const result = formatDate.setDayName( 5 );

        // assert
        expect( result ).toBe( 'Friday' );
    } );
} );
