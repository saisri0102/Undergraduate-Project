const specialChars = "!@abc #123$^ eftgth%*+=   $%^&Z*Z()_{}[]><?.,";
const desired= specialChars.replace(/[^\w\s]/ig, '');
console.log(desired); // abc 123 eftgth   ZZ_