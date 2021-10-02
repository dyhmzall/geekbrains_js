'use strict';

for (let i = 0; i <= 10; i++) {

    let message = ' – четное число';
    if (i === 0) {
        message = ' – это ноль';
    } else if (i % 2) {
        message = ' – нечетное число';
    }

    console.log(i + message);
}