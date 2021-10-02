'use strict';

const products = [
    {
        id   : 3,
        price: 200,
    },
    {
        id   : 4,
        price: 900,
    },
    {
        id   : 1,
        price: 1000,
    },
];
const discount = 15; // 15%

products.forEach(function (product) {
    product.price = Math.round(product.price * (100 - discount)) / 100;
});

console.log(products);