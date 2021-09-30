'use strict';

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case '+':
            return customAdd(arg1, arg2);
        case '-':
            return customSub(arg1, arg2);
        case '*':
            return customMulti(arg1, arg2);
        case '/':
            return customDiv(arg1, arg2);
        default:
            throw 'Operation not found!'
    }
}

console.log(mathOperation(10, 4, '+'));
console.log(mathOperation(10, 4, '-'));
console.log(mathOperation(10, 4, '*'));
console.log(mathOperation(10, 4, '/'));
mathOperation(10, 4, '**');