const prompt = require("prompt-sync")();

celsius = Number(prompt("Ingrese la temperatura en grados Celsius: "))

function kelvin(celsius){
    let kelvin = celsius+273.15;
    console.log (`${celsius}°C equivalen a ${kelvin}°K`)
}

function farenheit(celsius){
    let farenheit = celsius*1.8+32;
    console.log (`${celsius}°C equivalen a ${farenheit}°F`)
}

kelvin(celsius);
farenheit(celsius);