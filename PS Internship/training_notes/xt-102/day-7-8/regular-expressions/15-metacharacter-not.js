// [^A-Za-z0-9] -> anything except mentioned characters is included in the set
const str = 'abc?*& abc&*()';
console.log( str.match( /[^A-Za-z0-9]+/ )[0] );
console.log( str.match( /[^A-Za-z0-9]+/ )[0].length ); // 4 -> since it includes the space