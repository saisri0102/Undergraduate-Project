enum DateFormat {
    Standard,
    Display
}

// all optional arguments MUST be the final arguments in the function
// For example, we cannot make date optional, while making format mandatory
function formatDate( date : Date, format? : DateFormat ) {
    if( format ) {
        // .. return formatted date as per required format
    } else {
        // return date in a default format
    }
}

formatDate( new Date() ); // the second argument which is optional need not be passed
formatDate( new Date(), DateFormat.Standard );

export {}