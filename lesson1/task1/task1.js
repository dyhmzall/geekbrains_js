function plural(value, form1, form2, form3) {

    let last_digit = value % 10;

    if (last_digit === 1 && value !== 11) {
        return form1;
    } else if (last_digit === 2 || last_digit === 3 || last_digit === 4) {
        return form2;
    } else {
        return form3;
    }
}

let temperature_celsius = prompt('Введите значение температуры в градуса по Цельсию:');
temperature_celsius = parseInt(temperature_celsius);

let temperature_fahrenheit = Math.round((9 / 5) * temperature_celsius + 32);

alert(temperature_celsius + ' ' + plural(temperature_celsius, 'градус', 'градуса', 'градусов') + ' по Цельсию это '
    + temperature_fahrenheit + ' ' + plural(temperature_fahrenheit, 'градус', 'градуса', 'градусов') + ' по Фаренгейту');