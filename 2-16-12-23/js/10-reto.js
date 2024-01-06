// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edad = 19;

if (edad >= 18) {
    console.log ("Puedes votar")
} else {
    console.log ("No puedes votar")
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let numero = 56;

    if (numero % 7 == 0 && numero % 8 == 0) {
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

let numero2 = 27; 

    if (numero2 % 4 === 0 || numero2 % 9 === 0) {
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }


/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let genero = "accion";

switch (genero) {
    case 'accion':
        console.log('Recomendación de película de acción: "Duro de matar"');
        break;
    case 'drama':
        console.log('Recomendación de película de drama: "Bajo la misma estrella"');
        break;
    case 'comedia':
        console.log('Recomendación de película de comedia: "Nacho libre"');
        break;
    case 'romance':
        console.log('Recomendación de película romántica: "Titanic"');
        break;
    case 'suspenso':
        console.log('Recomendación de película de suspenso: "Midway"');
        break;
    case 'terror':
        console.log('Recomendación de película de terror: "El exorcista del papa"');
        break;
    default:
        console.log('Categoría no reconocida. Por favor, elige una categoría válida.');
}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

let opcion = 2; 

if (opcion === 1) {
    console.log("Realizando retiro de dinero...");
} else if (opcion === 2) {
    console.log("Realizando transferencia...");
} else if (opcion === 3) {
    console.log("Realizando depósito...");
} else if (opcion === 4) {
    console.log("Realizando pago de servicios...");
} else {
    console.log("Opción no válida. Por favor, elija una opción válida.");
}

/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */


let cantidad = 1000;
let eligeTuOpcion = 2; 
let resultado;

switch (eligeTuOpcion) {
    case 1:
        resultado = cantidad / 20.0;
        console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultado.toFixed(2)} dólares estadounidenses.`);
        break;
    case 2:
        resultado = cantidad / 23.5;
        console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultado.toFixed(2)} euros.`);
        break;
    case 3:
        resultado = cantidad / 0.18;
        console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultado.toFixed(2)} yenes japoneses.`);
        break;
    case 4:
        resultado = cantidad / 25.8;
        console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultado.toFixed(2)} libras esterlinas.`);
        break;
    case 5:
        resultado = cantidad / 21.9;
        console.log(`${cantidad} pesos mexicanos son aproximadamente ${resultado.toFixed(2)} francos suizos.`);
        break;
    default:
        console.log("Opción no válida. Por favor, elija una opción del 1 al 5.");
        break;
}

