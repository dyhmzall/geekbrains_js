'use strict';

/**
 * 1.1
 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
 видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
 и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
 make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
 make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
 объект-прототип (как объект transport в уроке).
 */

// es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = Math.round(this.price * 75) / 100;
};

let book = new Product('Книга', 199);
let table = new Product('Стол', 15000);

book.make25PercentDiscount();
table.make25PercentDiscount();

console.log(book);
console.log(table);

// es6
class NewProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = Math.round(this.price * 75) / 100;
    }
}

let cup = new NewProduct('Чашка', 220);
cup.make25PercentDiscount();
console.log(cup);