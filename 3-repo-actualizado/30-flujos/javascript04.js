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

function isAdult(edad) {
    if(edad >= 18) {
        console.log("Eres mayor de edad")
        return "Eres mayor de edad, puedes votar"
    } else {
        console.log("No puedes votar")
        return "No puedes votar"
    }
}

isAdult(18);



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

function divisibleNumber(n) {
if(n % 7 === 0 && n % 8 === 0 ) {
    console.log(true);
} else {
    console.log(false);
}

}
divisibleNumber(56);

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

function divisibleNumber(n) {
    if(n % 4 === 0  || n % 9 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
    }
    divisibleNumber(81);




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
let categoria = "drama";
switch(categoria){
    case "accion":
    console.log("El justiciero");
    break;
    case "drama":
    console.log("Diario de una pasión");
    break;
    case "comedia":
    console.log("Son como niños");
    break;
    case "suspenso":
    console.log("Los otros");
    break;
    case "terror":
    console.log("El demonio");
    break;
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

let accion = "retirar"
if(accion == "retirar") {
    console.log("Retirando dinero de forma exitosa");
} else if(accion == "transferir") {
    console.log("Transferencia exitosa")
} else if(accion == "deposito") {
    console.log("Deposito exitoso")
} else if("pago") {
    console.log("Pago exitoso")
} else {
    console.log("Algo slió mal")
};

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

function convertirMoneda(cantidad, opcion) {
    let resultado;
    
    switch (opcion) {
      case 1:
        resultado = cantidad / 20; 
        break;
      case 2:
        resultado = cantidad / 23; 
        break;
      case 3:
        resultado = cantidad * 2; 
        break;
      case 4:
        resultado = cantidad / 27;
        break;
      case 5:
        resultado = cantidad / 22; 
        break;
      default:
        return "Opción no válida";
    }
  
    console.log(`La cantidad de ${cantidad} pesos mexicanos equivale a ${resultado} en la moneda seleccionada.`);
  }

  convertirMoneda(50, 3);

