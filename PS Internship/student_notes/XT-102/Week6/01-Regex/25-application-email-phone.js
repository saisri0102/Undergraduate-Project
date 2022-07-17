// Left as exercise

const emailReg = new RegExp('^[a-zA-Z0-9\.!#$%& *+/=\?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');


/**
 * American Express :- Starting with 34 or 37, length 15 digits.
Visa :- Starting with 4, length 13 or 16 digits.
MasterCard :- Starting with 51 through 55, length 16 digits.
Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
 */

 const americaCard = new RegExp('^3[47]\\d{13}$');

 const visaCard = new RegExp('^[4]\\d{12,15}');

 const masterCard = new RegExp('/^(?:5[1-5][0-9]{14})$/');

 var visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
var amex = new RegExp("^3[47][0-9]{13}$");
var mastercard = new RegExp("^5[1-5][0-9]{14}$");

// - [How to validate an email address in JavaScript](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)
// - [JavaScript: HTML Form - email validation](https://www.w3resource.com/javascript/form/email-validation.php)
// - [Validate Credit Card Numbers](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s20.html)
// - [Use RegEx To Analyze Credit Card Numbers In JavaScript](https://www.thepolyglotdeveloper.com/2015/06/use-regex-to-analyze-credit-card-numbers-in-javascript/)
// - [Credit card input validation using regular expression in JavaScript](https://stackoverflow.com/questions/40775674/credit-card-input-validation-using-regular-expression-in-javascript)