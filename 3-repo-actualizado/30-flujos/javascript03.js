console.log("Hola CH35");

/*Control de flujo y estructuras de control
Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar código, podemos mencionar los siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista.
 * 
 * 
 * Declaración de sentencias if-else
 * *Palabra reservada if para comenzar la declaración, se coloca un paréntesis () donde se debe colocar una expresión lógica (true/false), se abre y cirran llaves() para indicar que sentencia va a ejecutar si la condición se cumple (true). 
 * 
 * Después de la llave {} declarada para el bloque de ejecución if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar más expresiones de un (), simplemente colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false).*/

let n = 15;
if(n > 10) {
    console.log(true);
} else {
    console.log(false);
}
/*
if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso*/

//if anidado
let edad = 28;
if(edad < 18) {
    console.log("eres menor de edad, retírate");
} else if(edad >= 18 && edad < 65)  {
    console.log("eres un adulto joven");
} else {
    console.log("eres un adulto mayor");
}

/** Sentencia swith 
 * La sentencia switch es otro tipo de estructura de control de flujo que, nuevamente se encuentra en diversos lenguajes de programación.
 * Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcación(partición de caminos), sino que se secciona en múltiples casos (case) que, dependiendo de la expresión que cumpla con un caso específico, será la secuencia que se va a ejecutar, dentro de la declaración.
 * 
 * Declaracion:
* se empieza por colocalr la palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.
*Falta indicar el bloque de codigo que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro de el parentesis ().
*Cada uno de estos casos se separa de la siguiente manera:
* case valor : instrucción a ejecutar si el valor empata con este caso.
*Despues, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion 
*break. 
*Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
* Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
* default : mensaje no disponible. 
*/

let dia = "viernes";
switch(dia){
    case "lunes":
    console.log("Todos odiamos los lunes");
    break;
    case "Martes":
    console.log("Todos odiamos los martes");
    break;
    case "miércoles":
    console.log("Todos odiamos los ombligos de semana");
    break;
    case "jueves":
    console.log("Todos odiamos los jueves");
    break;
    case "viernes":
    console.log("Todos amamos los jueves");
    break;
} //termina switch

/**Operador ternario
 * Expresion condicional if-else más simple y legible
 * principalmente se usa para simplificar condiciones de una sola expresión.
 * También puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el código se puede volver confusp y poco legible.
 * Su declaración es la siguiente:
 * palabra reservada var, let o const:
 * se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguida de este operador, hay que colocar una expresión lógica, esta va dentro de un paréntesis (), después hay que colocar un carácter ? que indica el camino a seguir, dependiendo de sí, se cumple (o no) la expresión.
 * Para separar el resultado true de false debemos agregar un carácter de :, del lado izquierdo se coloca la sentencia a ejecutar.
 * Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar .
 */

let verificacion = n > 10 ? "si es mayor" : "no es mayor";
console.log(verificacion);

/*cuando usar if-else o cuando switch
if-else: cuando necesitamos tomar decisiones bajo condiciones más fléxibles.
switch: cuando tengamos un conjunto fijo de valores para comparar una expresión./