    /* Operador
    Es un signo que especifica que debe efectuar una determinada operación.

    Operador aritmético (+,-,*,/, %, ++, --)
    Operador de asiganción (=)
    Operadores lógicos (&&, ||, !)
    Operadores de comparación (==,===,!=,!==,<,>, <=, >=)
    Operadores de cadena (tolowerCase, toUpperCase, trim, toString, concat, +) */

    let numero1 = 10;
    let numero2 = 8;
    
    suma = numero1 + numero2;
    resta = numero1 - numero2;
    multiplicacion = numero1 * numero2;
    division = numero1 / numero2;
    residuo = numero1 % numero2;
    incremento = numero1;
    incremento++;
    decremento = numero2;
    decremento--;
    
    console.log(suma);
    console.log(resta);
    console.log(multiplicacion);
    console.log(division);
    console.log(residuo);
    console.log(incremento);
    console.log(decremento);
    
    let precioReal = 1000;
    let porcentajeDescuento = 20;
    
    let cantidadDescuento = (precioReal * porcentajeDescuento) / 100;
    let precioConDescuento = precioReal - cantidadDescuento;
    console.log(`Precio real: $${precioReal}`);
    console.log(`Porcentaje de descuento: %${porcentajeDescuento}`);
    console.log(`Cantidad de descuento: $${cantidadDescuento}`);
    console.log(`Precio con descuento: $${precioConDescuento}`);
    
    /* Operadores de asignación
    (=): este operador no compara, lo que hace es asignar */
    
    //let frutas = manzana;
    /* Operadores de comparación
    (==): Igualdad compara si nuestros valores son iguales */
    
    let numero3 = 10;
    let texto = "10";
    console.log(numero3 == texto); //true
    
    /* (===): Igualdad estricta, compara valor y tipo de dato. */
    
    let numero4 = 10;
    let texto2 = "10";
    console.log(numero4 == texto2); //false
    
    /* (!=): Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversion. */
    
    let precioCaja = 1499;
    let precioMaximo = 1500;
    if (precioCaja != precioMaximo) {
    console.log("El precio del producto no es igual al precio máximo");
    } else {
    console.log("el precio del producto es igual al precio máximo permitido");
    }
    
    let numero5 = 10;
    let numero6 = "15";
    
    if (numero5 != numero6) {
    console.log("Son diferentes");
    } else {
    console.log("los valores son iguales");
    }
    
    /* (!==) desigualdad estricta, este operador verifica si dos valores no son iguales, pero a diferencia de != en este caso ambos valores deben tener el mismo tipo y valor. */
    
    let numero7 = 41;
    let numero8 = "50";
    
    if (numero7 !== numero8) {
    console.log("valores diferentes");
    } else {
    console.log("valores iguales");
    }
    
    let edad = 40;
    let edadNecesaria = 18;
    console.log(edad >= edadNecesaria);
    
    // (<=) Menor o igual que y nos indica si un valor es menor o igual a otro.
    
    let = temperatura = 14;
    let temperaturaMaxima = 21;
    console.log(temperatura <= temperaturaMaxima);
    
    //Operadores lógicos
    
    let mayoriaEdad = 18;
    let tieneIdentificacion = true;
    if (mayoriaEdad >= 18 && tieneIdentificacion) {
    console.log("puedes rentar el salón");
    } else {
    console.log("No lo puedes rentar");
    }
    
    // (||) or se utiliza cuando se debe cumplir una condición u otra.
    
    let esPrime = false;
    let descuento = true;
    if (esPrime || descuento) {
    console.log("Califica para descuento");
    } else {
    console.log("No califica para descuento");
    }
    
    // (!) NOT, niega el valor de una condición.
    
    let esDiaLibre = false;
    if (!esDiaLibre) {
    console.log("Se trabaja");
    } else {
    console.log("Descansito");
    }
    
    // Operaradores de cadena
    //tolowerCase hace el cambio de nuestro string a minusculas
    
    let mensaje = "Bienvenido a la tierra";
    let cambioMinusculas = mensaje.toLowerCase();
    console.log(cambioMinusculas);
    
    //to uppperCase hace el camcio a mayusculas
    
    let saludo = "casi viernes, casi navidad";
    let cambioMayuscula = saludo.toUpperCase();
    
    console.log(cambioMayuscula);
    
    //trim quita espacios en blanco al inicio y final
    
    let aviso = "       CH35 RIFA    ";
    let sinEspacio = aviso.trim();
    console.log(sinEspacio);
    
    //toString convierte un tipo de dato number en string
    
    let numero10 = 31;
    let cadenas = numero10.toString();
    
    console.log(cadenas);
    
    //concat
    
    let nombre = "Fernanda";
    let apellido = "Ramos";
    let nombreCompleto = nombre.concat(" ", apellido);
    
    console.log(nombreCompleto);
    
    /* Expresiones
    expresión aritmética
    let operacion = 14 + 25 + 12; combina la suma con la multiplicación.
    expresión de cadena
    let notificacion = "casi", "es", "viernes"; expresion concatenando.
    
    expresion logica
    let esMayorDeEdad = (23 > 18) && (21 < 65); tiene operadores lógicos y de comparación.
    
    expresión de asignación
    let frasco = chocolates; asigna el valor a la variable; 
    */
    
    // -----------------------> Ejercicio 1 <------------------ //
    /* Un programa de receta de hotcakes, usando operadores lógicos para revisar los ingredientes y si es la cantidad necesaria. También usar operadores de comparación , y que nos arroje  de resultado si podemos hacer la receta. */
    
    const harina = 500;
    const leche = 350;
    const huevo = 2;
    const mantequilla = 2;
    
    const harinaDisponible = 1000;
    const lecheDisponible = 1000;
    const huevosDisponibles = 3;
    const mantequillaDisponible = 3;
    
    if (
    harinaDisponible >= harina &&
    lecheDisponible >= leche &&
    huevosDisponibles >= huevo &&
    mantequillaDisponible >= mantequilla
    ) {
    console.log("¡Tienes suficientes ingredientes para hacer hotcakes!");
    } else {
    console.log(
        "No tienes suficientes ingredientes para hacer hotcakes. Compra lo que te falta."
    );
    }
    
    // ------------------------------> Ejercicio 2 <----------------------------- //
    
    /*
    * ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
    */
    
    let valor1 = prompt ("Ingrese un número");
    let valor2 = prompt ("Ingrese otro número");
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    
    if(valor1 === valor2) {
    console.log("los valores son iguales")
    } else if(valor1 < valor2) {
    console.log(`${valor1} es menor que ${valor2}`)
    } else {
    console.log(`${valor1} es mayor que ${valor2}`)
    }
    
    // ------------------------------> Ejercicio 3 <----------------------------- //
    /*
    * ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
    */
    
    let palabra1 = prompt("Ingrese una palabra");
    let palabra2 = prompt("Ingresa otra palabra");
    
    if(palabra1 === palabra2) {
    console.log("Las palabras son iguales");
    } else {
    console.log("Las palabras son diferentes");
    }