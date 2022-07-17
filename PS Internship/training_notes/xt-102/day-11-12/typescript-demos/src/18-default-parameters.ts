// Function argument defaults is an ES2015 feature (not a TypeScript-specfic feature)
enum DateFormat {
    Standard,
    Display
}

// all optional arguments MUST be the final arguments in the function
// For example, we cannot make date optional, while making format mandatory
function formatDate( date : Date = new Date(), format : DateFormat = DateFormat.Standard ) {
    if( format ) {
        // .. return formatted date as per required format
    } else {
        // return date in a default format
    }
}

formatDate();
formatDate( new Date() );
formatDate( new Date(), DateFormat.Display );

export {}