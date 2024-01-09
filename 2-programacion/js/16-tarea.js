    /*
    *Ejercicios

    // ------------------------------> Ejercicio 1 <----------------------------- //
    *Ejercicio de Arrays:
    Descripción:
    Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
    * Temperaturas diarias en grados Celsius para una semana
    const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
    *Instrucciones:

    Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
    Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
    Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
    */
    const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
    function celsiusToFahrenheit(temperaturasCelsius) {
    let temperaturasFahrenheit = [];
    for (let i = 0; i < temperaturasCelsius.length; i++) {
        let resultado = (temperaturasCelsius[i] * 9) / 5 + 32;
        temperaturasFahrenheit.push(resultado);
    }
    console.log(temperaturasFahrenheit);
    return temperaturasFahrenheit;
    }

    celsiusToFahrenheit(temperaturasCelsius);

    // ------------------------------> Ejercicio 2 <----------------------------- //
    /*
    *Ejercicios de Bucles:
    *Descripción:
    Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

    *Instrucciones:

    Utiliza un bucle (for o while) para sumar los números del 1 al 10.
    Imprime el resultado de la suma en la consola.
    Sugerencia:
    Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
    */

    // --------------------> Bucle For <------------------- //

    const numerosNaturales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function sumarNumerosNaturales() {
    let resultado = 0;
    for (let i = 0; i < numerosNaturales.length; i++) {
        resultado += numerosNaturales[i];
    }
    console.log(resultado);
    }

    sumarNumerosNaturales(numerosNaturales);

    // -------------------> Bucle while <------------------ //

    /* const numerosNaturales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function sumarNumerosNaturales(numerosNaturales) {
        let resultado = 0;
        let i = 0;

        while (i < numerosNaturales.length) {
            resultado += numerosNaturales[i];
            i++;
        }

        console.log(resultado);
    }

    sumarNumerosNaturales(numerosNaturales); */

    // ------------------------------> Ejercicio 3 <----------------------------- //
    /*
    *Ejercicio : Números Primos
    Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

    function isPrime(num) {
    for (let i = num; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        console.log(false);
        return false;
        }
    }
    console.log(true);
    return true;
    }
    isPrime(5);

    // ------------------------------> Ejercicio 4 <----------------------------- //
    /*
    *Ejercicio : Secuencia de Fibonacci
    Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

    Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/

    function generateFibonacci(n) {
    let fibonacciArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }
    return fibonacciArray;
    }
    const first10Terms = generateFibonacci(10);
    console.log(first10Terms);