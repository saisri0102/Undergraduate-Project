const alphabeticPat1= /[A-Za-z]+/

console.log(alphabeticPat1.test('1234abdcfa123'))// true;

const alphabeticPat2= /[A-Za-z]+$/
console.log(alphabeticPat2.test('1234abdcfa'))// true;

const alphabeticPat3= /^[A-Za-z]+/
console.log(alphabeticPat3.test('1234abdcfa'))// false;
console.log(alphabeticPat3.test('abdcfa1234'))// true;

const alphabeticPat3= /^[A-Za-z]+$/
console.log(alphabeticPat3.test('abdcfa1234'))// false;
console.log(alphabeticPat3.test('1234abdcfa'))// false;
console.log(alphabeticPat3.test('1234abdcfa123'))// false;
console.log(alphabeticPat3.test('abdcfa'))// true;