import { ObjectWithStringValues } from './types.js';

// DISCLAIMER: This is a sample implementation and can have bugs / not handle all cases. It is not meant for use in production.
const getQueryParams = ( queryString : string ) => {
    let queryStringActual = queryString;

    // remove the leading '?' if present
    // Example: "?a=1&b=2" -> "a=1&b=2"
    if( queryString[0] === '?' ) {
        queryStringActual = queryString.substr( 1 );
    }

    // split into query params
    // "a=1&b=2" -> [ "a=1", "b=2" ]
    const queryParams = queryStringActual.split( '&' );

    // generate a query params object
    // [ "a=1", "b=2" ] -> { a: "1", b: "2" }
    const queryParamsObj : ObjectWithStringValues = {};
    queryParams.forEach( ( queryParam ) => {
        const [key, value] = queryParam.split( '=' );
        queryParamsObj[key] = value;
    }, {} );

    return queryParamsObj;
};

export {
    // eslint-disable-next-line import/prefer-default-export
    getQueryParams
};
