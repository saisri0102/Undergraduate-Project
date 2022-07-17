/*26. Given the following string, solve the questions that follow.
```
var quote = 'With great power comes great responsibility';
```
* Create a string from the given string (quote) by replacing 'responsibility' with 'electricity bill'
* Print the index of the first occurence o

*/
var quote = 'With great power comes great responsibility';

var quote2= quote.replace('responsibility', 'electricity bill');
console.log(quote2);

console.log(quote.indexOf('great'));
console.log(quote.substr(0,10));