import { formatDate } from './date';

// SAMPLE MOCK IMPLEMENTATION
// // tracking argument passed to mock formatDate()
// let receivedDate = '';

// // mock formatDate
// const formatDate = function( date ) {
//     receivedDate = date;
//     return "2020-01-01";
// }

function displayFormattedDate() {
    const value = document.querySelector( '#date' ).value;

    document.querySelector( '#selected-date' ).innerHTML = formatDate( value );
}

export {
    displayFormattedDate,
    // receivedDate
}