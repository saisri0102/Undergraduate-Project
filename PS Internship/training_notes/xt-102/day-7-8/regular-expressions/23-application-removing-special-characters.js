// Reference: https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
const hasSpecialChars = "!@abcd 123#$^     23 &%*fgh()+=-[]ijk\/{}|:<>?,.";
const desired = hasSpecialChars.replace( /[^\w\s]/gi, '' );
console.log( desired );