'use strict';

/**
 *
 * @param value {number}
 * @param form1 {string}
 * @param form2 {string}
 * @param form3 {string}
 * @returns {string}
 */
function plural(value, form1, form2, form3) {

    let last_digit = value % 10;

    if (last_digit === 1 && value !== 11) {
        return form1;
    }

    if (last_digit === 2 || last_digit === 3 || last_digit === 4) {
        return form2;
    }

    return form3;
}

let temperatureCelsius = prompt('Введите значение температуры в градуса по Цельсию:');
temperatureCelsius = parseInt(temperatureCelsius);

let temperatureFahrenheit = Math.round((9 / 5) * temperatureCelsius + 32);

alert(temperatureCelsius + ' ' + plural(temperatureCelsius, 'градус', 'градуса', 'градусов') + ' по Цельсию это '
    + temperatureFahrenheit + ' ' + plural(temperatureFahrenheit, 'градус', 'градуса', 'градусов') + ' по Фаренгейту');