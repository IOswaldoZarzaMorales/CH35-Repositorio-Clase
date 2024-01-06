// Tipos primitivos

//Number
4

//string
"Hola mundo";
'Hola mundo';


//booleanos 
true;
false;

// nulo y undefined

null;
undefined;

//null, undefined, false , 0 = todas son falsy es la unica similitud
if (null) {
    console.log("cumple")
} else {
    console.log("no cumple")
}

//scope es el alcance de nuestras variables

let nombre = 'Daniel';
let invitadxsExtras =2;
let esMayorEdad = true;
let edad= 24;
let invitadxExpecial = null;
let horaDeSalida = undefined;

console.log(nombre);

//con escasillamiento

let numeroEncasillado = Number = 15;
let textoEncasillado = String = "hola"

var numero1 = "4";
var numero2 = "5";

console.log("Tipo de variable numero1: "+typeof(numero1));
/*
typeof solo devuelve el tipo de variable que estas utilizando
*/
console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));
/*
Number: tranforma tu variable a una variable numerica
parseInt: tranforma tu variable a un tipo de variable entera
en el ejmplo lo utilizamod para sumas dos variables tipo string
*/
console.log(numero1+numero2);
console.log(parseInt(numero1)+parseInt(numero2));
console.log(Number(numero1)+Number(numero2));
