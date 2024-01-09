/*
let entrada = prompt('Ingresa un nombre')
let nombre = 'bart';

if (entrada==nombre){
    alert('fui yo');
}else{
    alert('yo no fui')
}
*/
/*
let numeroPersonaje = prompt('Ingresa un numero')

if(numeroPersonaje == '1'){
    alert('Elegiste a homero')
}else if (numeroPersonaje == '2'){
    alert('Elegiste a marge')
}else if (numeroPersonaje == 3){
    alert('Elegiste a bart')
}else if (numeroPersonaje == 4){
    alert('Elegiste a lisa')
}else{
    alert('error')
}
*/
//El ejemplo anterior pero con switch

/*
let numeroPersonaje = prompt('Ingresa un numero');

switch (numeroPersonaje) {
    case '1':
        alert('Elegiste a homero');
        break;
    case '2':
        alert('Elegiste a marge');
        break;
    case 3 :
        alert('Elegiste a bart');
        break;
    case 4 :
        alert('Elegiste a lisas');
        break;
    default:
        alert('error')
        break;
}
*/

//Ejemplo con ciclos

let cantidad = parseInt(prompt('Ingrese cantidad de repeticiones'));
let texto = prompt ('Ingresa un texto a repetir');

for(let i=0; i<cantidad; i++){console.log(texto);}

console.log('Espero haberlos iluminado. Gracias, vuelvan pronto!')
