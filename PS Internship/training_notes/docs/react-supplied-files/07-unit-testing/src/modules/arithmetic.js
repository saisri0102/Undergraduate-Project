export default {
    sum: function( x, y ) {
        return x + y;
    },
    sumAsync: function( x, y, cb ) {
        setTimeout(() => {
            cb( x + y );
        }, 2000);
    },
    product: function( x, y ) {
        return x * y
    }
};