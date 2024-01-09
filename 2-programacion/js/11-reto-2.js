

let valor1 = prompt ('Ingresa un numero');
let valor2 = prompt ('Ingresa otro numero');

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

if (valor1 === valor2){
    console.log("Los dos numeros que ingresaste son iguales");
} else if (valor2 < valor1){
    console.log('valor2 es menor al valor1');
}else {
    console.log('el valor 1 es mayor al valor 2');
}