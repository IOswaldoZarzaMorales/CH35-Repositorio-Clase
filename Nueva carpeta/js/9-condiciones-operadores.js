
/*
if (true){
    //Entonces
    console.log("Vas a ver este mensaje")
}

if (llueve){
    //Llevar paraguas
    console.log("Vas a ver este mensaje")
}
*/


let tiempo = 'soleado';

/*
if (tiempo == 'lluvioso'){
    console.warn('llevar paraguas');
}

if (tiempo == 'soleado'){
    console.warn('ir con manga larga');
} 
*/

/*
if(tiempo == 'lluvioso'){
    console.warn('llevar paraguas');
}else{
    console.log('Ir con manga larga')
}
*/

let edadMinima = 18;

/*
if (edadMinima >= 18){
    console.log('Puede entrar a la disco')
}else{
    console.warn('No puedes entrar eres menor de edad')
}
*/

/*
if(edadMinima < 18){
    console.warn('Vuelve a tu casa')
}else{
    console.log('Puedes entrar a la disco')
}
*/

/*
if (edadMinima < 18){
    console.warn('Vuelve a tu casa')
} else if (edadMinima >= 18){
    console.log('Puede entrar a la disco')
}else {

}
*/

let lenguajeRequerido = 'javascript';
let idiomaRequerido = 'ingles';

//si queremos que cumpla ambos requisitos

/*
if ((lenguajeRequerido == 'javascript')&&(idiomaRequerido == 'frances')){
    console.log('usted cumple con los requisitos de contratancion')
}else {
    console.warn('Debes de cimplir con todos los requisitos')
}
*/

//si no queremos que cumpla ambos requisitos

/*
if ((lenguajeRequerido == 'javascript')||(idiomaRequerido == 'frances')){
    console.log('usted cumple con los requisitos de contratancion')
}else {
    console.warn('Debes de cimplir con todos los requisitos')
}
*/

//si queremos que cumpla algun requisito extra

if ((lenguajeRequerido == 'javascript')&&(idiomaRequerido == 'ingles')||(idiomaRequerido == 'frances')){
    console.log('usted cumple con los requisitos de contratancion')
}else {
    console.warn('Debes de cimplir con todos los requisitos')
}

