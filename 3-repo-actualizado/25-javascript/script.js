// comentario de una sola línea
/* comentario multilinea */
/* alert("hola mundo"); */

/* var nombre = prompt("Ingresa tu nombre");
alert("Hola, " + nombre + " bienvenido a la CH35"); */

/* var numero1 = parseInt (prompt("Ingresa el primer número: "));
var numero2 = parseInt (prompt("Ingresa el segundo número: "));
console.log("la suma de ambos numeros es: " + (numero1 + numero2));
console.log("la resta de ambos numeros es: " + (numero1 - numero2));
console.log("la multiplicación de ambos numeros es: "+ (numero1 * numero2));
console.log("la división de ambos numeros es: " + (numero1 / numero2)); */

/* var edad = prompt("Ingresa tu edad:");
if(edad >= 18) {
    alert("Eres mayor de edad")
} else if( edad < 18) {
    alert("Eres menor de edad")
}; */

// Tipos de datos y variables
// var, let y const la diferencia es el alcance var tiene un alcance global, let tienen alcance local y const se mantiene sin ningun cambio 
/* String; cadena de texto (lleva comillas)
number: numero
booleana: true/false
null:nulo
undefined:no esta asigando o definido*/

let nombre = "Daniel";
let invitadosExtras = 2; 
let esMayorEdad = true;
let edad = 24;
let invitadoEspecial = null;
let horaDesalida= undefined;

document.write(nombre);

//Encasillamiento o tipado
//nos es útil para el mantenimiento del código, reducimos errores, ya que lo hace más legible y fácil de entender. Prevención de errores para reducir la probabilidad de los mismos. Mejorará el rendimiento de nuestro programa.

/* let numero = 15;
let texto = "hola"; */

//con encasillamiento

/* let numeroEncasillado= Number = 15;
let textoEncasillado= String = "hola"; */

//typeof palabra reservada para saber que tipo de dato tenemos

/* console.log(typeof(nombre)); */

//convertir de string a number

/* let funcionNumber = console.log(typeof Number(nombre));
metodoParseInt = console.log(typeof parseInt (nombre));
metodoParseFloat = console.log(typeof parseFloat(nombre));
 */
//parseint y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio.

//conversión de number a string

/* console.log(typeof String(edad))
console.log(typeof edad.toString()); */

/* let numero = Number(esMayorEdad); */
/* console.log(numero); */ //1
/* console.log(typeof(numero)); */ //number

//cualquier dato a string
/* let texto = String(esMayorEdad);
console.log(typeof(texto));
console.log(typeof esMayorEdad.toString()); */

/* let negacion = !esMayorEdad;
console.log(negacion); */

//concatenar es unir strings

/* let saludo = "Hola humano ";
let frase = "el futuro es hoy";

texto = saludo + frase;
document.write(texto); */

//variable huevo es igual a 1, dato tipo number
/* let huevo = 1;
console.log(huevo);
console.log(typeof(huevo)); */
//variable huevoToString es igual a 1, dato tipo string(tipo texto)
/* let huevoToString = huevo.toString();
console.log(huevoToString);
console.log(typeof(huevoToString)); */

/*--------------------RECETA DE COCINA-------------------*/

let harina = parseInt ("150");
let huevo = toString(1);
let mantequilla = parseInt("5");
let leche = parseInt("500");

let nutella = 50;
let nutellatoString = nutella.toString();
console.log(typeof(nutellatoString));
console.log(nutella);
//console.log(typeof (toString(nutella)));

/*console.log(typeof(harina));
console.log(typeof(huevo)); */

let pasoUno = "Paso 1: Vierte todos los ingredientes en la licuadora y mezcla hasta lograr una consistencia homogenea. ";
let pasoDos = "<br> Paso 2: Despues, caliente un sarten con un poco de mantequilla. ";
let pasoTres = "<br> Paso 3: Posteriormente, sirve la mezcla de masa para jokeis al centro del sarten dejandola caer suavemente. ";
let pasoCuatro = "<br> Paso 4: Manten a flama baja y voltea una vez que aparezcan burbujas de aire. ";
let pasoCinco = "<br> Paso 5: Ahora, repite agregando mantequilla al sarten cada vez que sea necesario.";
let pasoSeis = "<br> Paso 6: Finalmente, sirve y disfruta.";

let texto = pasoUno + pasoDos + pasoTres + pasoCuatro + pasoCinco + pasoSeis
document.write(texto);

textoDos = "Esto es " + nutella;
document.write(textoDos);


/*---------------- Sesión con Daniel Maldonado------------ */

/* Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
Los arrays se pueden manipular mediante métodos específicos.
Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.*/

let arreglo1 = []; //Array vacío
console.log(arreglo1);
//los elementos de un array se separan mediante comas
let cars = ["volkswagen", "bmw", "mazda", "kia"]; //Array de string
console.log(cars);
//longitud e índice son diferentes. La longitud (length) es el número de elementos y el índice corresponde a cada elemento a partir del 0.
console.log(typeof(cars));

let salaries = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salaries.length); //output: 12
console.log(salaries);

/* Objetos. Los objetos son tipos de datos en JSON, con una estructura que nos permite almacenar información mediante llaves (clave) y valores. Su sintaxis es la siguiente:
const object {
      const object {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/ 

const employee = {
    firstName: "Rey David",
    lastName: "Martínez",
    age: 29,
    country: "México"
}

console.log(employee);
//Mostrando mi array como table
console.table(cars);
//Mostrando mi objeto como table
console.table(employee);

