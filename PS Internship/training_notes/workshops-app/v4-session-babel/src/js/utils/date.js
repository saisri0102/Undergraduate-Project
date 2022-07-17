const formatDate = ( isoDateStr = '', format = 'standard' ) => {
    switch( format ) {
    case 'display':
        return new Date( isoDateStr ).toDateString().substr( 0, 18 );
    case 'standard':
    default:
        return isoDateStr.substr( 0, 10 );
    }
};

export {
    formatDate
};