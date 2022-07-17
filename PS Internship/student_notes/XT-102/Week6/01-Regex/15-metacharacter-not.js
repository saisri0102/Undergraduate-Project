//[^A-Za-z0-9] -> anything except mentioned characters is included in the set
const str= 'abc?*& abc&*()';
console.log(str.match(/[^A-Za-z0-9]+/));
console.log(str.match(/[^A-Za-z0-9]+/));