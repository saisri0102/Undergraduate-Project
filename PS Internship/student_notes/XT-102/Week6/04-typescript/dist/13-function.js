// SYNTAX 1
// function declaration suntax
function divide(dividend, divisor) {
    if (divisor !== 0) {
        return dividend / divisor;
    }
    else {
        //throw new Error(' divisor should be non -zero');
        return 'You cannot have 0 as divisor';
    }
}
// function expression syntax
var sum1 = function (x, y) {
    return x + y;
};
// arrow function syntax
var sum2 = function (x, y) { return x + y; };
var multiply1 = function (x, y) {
    return x * y;
};
var multiply2 = function (x, y) {
    return x * y;
};
var multiply3 = function (x, y) { return x + y; };
function sumAsync(x, y, cb) {
    setTimeout(function () { return cb(x + y); }, 3000);
}
sumAsync(12, 13, function (result) { return console.log(result); });
console.log(divide(10, 2));
export {};
