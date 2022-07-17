
// pincode validation
const pincodePat= /^[1-9]\d{5}$/;
console.log(pincodePat.test('100101'));
console.log(pincodePat.test('10010100'));
console.log(pincodePat.test('10010'));
console.log(pincodePat.test('001010'));
console.log(pincodePat.test('123a01'));