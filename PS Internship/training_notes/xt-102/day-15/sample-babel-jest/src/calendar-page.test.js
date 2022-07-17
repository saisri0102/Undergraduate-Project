import { displayFormattedDate, receivedDate } from './calendar-page';

// import the dependency of ./calendar-page module
import { formatDate } from './date';
// create mocks for everything that is exported from ./date module
jest.mock( './date' );

describe( 'displayFormattedDate', () => {
    it( 'should read the date from the input and display the date from in right format', () => {
        // arrange
        const date = '2021-03-12T08:22:13.934Z';
        const formatDateReturn = '2020-01-01';

        document.body.innerHTML = `
            <div>
                <input type="text" id="date" value="${date}" />
                <div id="selected-date"></div>
            </div>
        `;

        formatDate.mockReturnValueOnce( formatDateReturn );

        // act
        displayFormattedDate();

        // assert
        
        // arguments passed to the function formatDate, the first time it was called
        expect( formatDate.mock.calls[0][0] ).toBe( date );

        // did formatDate do the right thing with the value received form formatDate
        const formattedDate = document.querySelector( '#selected-date' ).innerHTML;
        expect( formattedDate ).toBe( formatDateReturn );
    });
});