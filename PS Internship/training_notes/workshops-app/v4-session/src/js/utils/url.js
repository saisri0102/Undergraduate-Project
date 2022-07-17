// DISCLAIMER: This is a sample implementation and can have bugs / not handle all cases. It is not meant for use in production.
const getQueryParams = ( queryString ) => {
    // remove the leading '?' if present
    // Example: "?a=1&b=2" -> "a=1&b=2"
    if( queryString[0] === '?' ) {
        queryString = queryString.substr( 1 );
    }

    // split into query params
    // "a=1&b=2" -> [ "a=1", "b=2" ]
    const queryParams = queryString.split( '&' );

    // generate a query params object
    // [ "a=1", "b=2" ] -> { a: "1", b: "2" }
    const queryParamsObj = {};
    queryParams.forEach( ( queryParam ) => {
        const keyValuePair = queryParam.split( '=' );
        queryParamsObj[keyValuePair[0]] = keyValuePair[1];
    }, {} );

    return queryParamsObj;
};

export {
    getQueryParams
};
