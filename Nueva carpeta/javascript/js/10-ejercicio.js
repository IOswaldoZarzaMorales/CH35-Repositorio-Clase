
let idiomaRequerido = prompt ('Que idioma conoces');
let lenguajeRequerido = prompt ('Que lenguaje de programacion conoces');

if ((idiomaRequerido == 'ingles') || (idiomaRequerido == 'frances') && (lenguajeRequerido == 'javascript') || (lenguajeRequerido == "java") ){
    alert('Puedes participar en el proceso de admision')
} else{
    alert('No cumples con los requisitos del proceso')
}