/* Funciones, son bloques de código con instrucciones que se pueden reutilizar las veces que sean necesarias.FuncionesAlgunas funciones reciben parámtros y otras no reciben parámetros. */

//función que permite saludar
function saludar() {
    console.log("Hola desde una función");
}
//Ejecutar la función con el nombre de la función y los parámetros.
saludar();

/* Hoisting, característica de una funcion que nos permite invocarla desde antes de su inicializacion, es decir, se puede invocar antes del bloque de código o después. */
//Se invoca en la línea 11 y en la 10.
function saludar() {
    console.log("Hola invocando la función con hoisting");
}
saludar();

//Funciones que retornan algo. Para que una función retorne algo (un string, una operación, una variable, etc) necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return.

function greeting() {
    return "Hola desde una función que retorna"
}
console.log(greeting());

//function que retorna y recibe parametros
function sumar(x,y) {
    return x + y;
}
let resultado = sumar(255,245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//calcular el cuadrado de un número 
function calcularCuadrado(numero) {
return numero * numero
}
let resultadoCuadrado = calcularCuadrado(5);
console.log(resultadoCuadrado);

//funciones flecha (arrow function). es una manera de declarar uan función por declaración, sintetizando código y haciendolo más legile.

//función flecha para calcular el cubo de un número
const calcCubo = (number) => {
    return number * number * number;
}
let resultadoCubo = calcCubo(3);
console.log(resultadoCubo);

//funciones anónimas, son un tipo de funciones que se declaran sin nombre de funcion y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que la utilizamos.
//Las funciones anónimas no permiten el hoisting, no se pueden invocar antes de inicialiarlas. la mandamos a llamar a travez del nombre de la variable 

const mensaje = function() {
    return "este es un mensaje desde una función anónima";
}
console.log(mensaje());

//callbacks es pasar una función B por parametro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.

//function B
const functionB = function () {
    console.log("Ejecutando funcion B");
}
//funcion A que mandará a llamar a la función B
const functionA = function (callback) {
    callback();
}
functionA(functionB);