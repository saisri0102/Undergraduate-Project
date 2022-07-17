"use strict";
function sum(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x + ' ' + y;
    }
}
sum('hello', 'world');
// ERROR
// sum(1, 'world');
