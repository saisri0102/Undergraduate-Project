function fetchTpl( path ) {
    return fetch( path )
        .then(async function( response ) {
            if( !response.ok ) {
                throw new Error( `Something went wrong when fetching the template at ${path}` );
            }
            
            return response.text();
        });
}

export default fetchTpl;