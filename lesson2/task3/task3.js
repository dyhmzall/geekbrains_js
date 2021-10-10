'use strict';

let a = 10;
let b = 4;
let result;

if (a >= 0 && b >= 0) {
    result = a - b;
} else if (a < 0 && b < 0) {
    result = a * b;
} else {
    result = a + b;
}

console.log(result);