//Temperaturas en Fahrenheit:
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];

const temperaturasFahrenheit = temperaturasCelsius.map(c => c * 9/5 + 32);

console.log("Celsius:", temperaturasCelsius);
console.log("Fahrenheit:", temperaturasFahrenheit);

// Suma de los primeros 10 números naturales:
const suma = Array.from({ length: 10 }, (_, i) => i + 1).reduce((acc, num) => acc + num, 0);

console.log("La suma de los primeros 10 números naturales es:", suma);

// Número Primo:

const numero = Number(prompt("Ingrese un número:"));

const esPrimo = num => num > 1 && Array.from({ length: Math.sqrt(num) }, (_, i) => i + 2).every(divisor => num % divisor !== 0);

console.log(esPrimo(numero) ? `${numero} es un número primo.` : `${numero} no es un número primo.`);

// Secuencia de Fibonacci:
const fibonacci = n => Array.from({ length: n }, (_, i, arr) => i < 2 ? i : arr[i - 1] + arr[i - 2]);

console.log("Primeros 10 términos de la secuencia de Fibonacci:", fibonacci(10));

