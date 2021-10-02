'use strict';

for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}

// второй вариант
for (let i = 0; i < 20; i++) {
    let x = 'x';
    for (let j = 0; j < i; j++) {
        x += 'x';
    }
    console.log(x);
}