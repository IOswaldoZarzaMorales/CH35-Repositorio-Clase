// comentarios de una sola línea

/* comentarios 
multilínea */

//alert ("Hola mundo");

//console.log("Este es un mensaje para mi consola")

//mensajes en pantalla
/* var nombre = prompt("Ingresa tu nombre");
alert("Hola, "+ nombre + " Bienvenido a la ch35"); */

/* var numero1 = parseInt (prompt("Ingresa el primer numero:"));
var numero2 = parseInt (prompt("Ingresa el segundo numero:"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicación:" + (numero1 * numero2));
console.log("división:" + (numero1 / numero2));
*/

var edad = parseInt (prompt("Ingresa tu edad:"));
 
if (edad < 18) {
    alert("Eres menor de edad.");
}
else if (edad >= 18) {
    alert("Eres mayor de edad!");
}
else {
    alert("Ingresa un numero válido");
}

