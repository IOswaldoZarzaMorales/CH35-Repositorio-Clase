
/*
let tiempo;

switch(tiempo){
    case 'lluvioso':
        //Tareas a realiza
        break;
    case 'soleado':
        //Tareas a realiza
        break;
    case 'ventoso':
        //Tareas a realiza
        break;
    case 'nevado':
        //Tareas a realiza
        break;
    default:
    //tareas a relizar
    break;
}

*/

let tiempo = prompt('Cual es el clima en tu ciudad? lluvioso, soleado, ventoso, nevado')

switch(tiempo){
    case 'lluvioso':
        alert ('lleva paraguas');
        break;
    case 'soleado':
        alert ('Ponte protector solar');
        break;
    case 'ventoso':
        alert ('Mete tu ropa');
        break;
    case 'nevado':
        alert ('Abrigate bien');
        break;
    default:
        alert ('Introduce un tipo de dato valido');
    break;
}