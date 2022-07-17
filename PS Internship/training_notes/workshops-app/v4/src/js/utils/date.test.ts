/// <reference path="../../../node_modules/@types/jest/index.d.ts" />

import { formatDate } from './date';

test( 'formatDate should format in standard format when default format is used', () => {
    const date = '2019-01-01T04:00:00.000Z';

    expect( formatDate( date ) ).toBe( '2019-01-01' );
});