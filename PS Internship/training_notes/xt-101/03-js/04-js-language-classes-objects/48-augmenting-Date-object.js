// const today = new Date; can also be used since constructor takes no arguments
Date.prototype.toSapientString = function() {
    return this.toString().substr( 0, 15 );
};

const today = new Date();

console.log( today.toISOString() );
console.log( today.toSapientString() );