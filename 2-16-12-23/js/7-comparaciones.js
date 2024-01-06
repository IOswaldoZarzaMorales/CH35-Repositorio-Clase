//10. Comparaciones en JS
//Comparaciones de igualdad
//Igualdad muy debil
if (5 == 5) {
    console.log("5 es igual a 5")
}

//Igualdad muy fuerte
if ( 5 === 5){
    console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a );
let b = "5";
console.log(typeof b );


if (a == b) {
    console.log("a es igual a b Estas es una gualdad debil")
}//Dos iguales solo compara el valor

if (a === b) {
    console.log("a es igual a b Estas es una igualdad Fuerte");
}//Compara el valor y el tipo 

//Comparaciones de des-igualdad
let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d Debil");
    //diferentes en valor 
}

if (c !== d) {
    console.log("c es diferente a d Fuerte");
    //diferentes en valor o en tipo
}

// Mayores y menores

//Comparaciones menor que e igual que 
let max = 10;
let min = 5;

if (max > min){
    console.log("max es mayor que min")
}

if (max >= 10){
    console.log("max es mayor o igual que min")
}

if (min < max ){
    console.log("min es menor que max")
}

if (min <= max ){
    console.log("min es menor o igual que max")
}
