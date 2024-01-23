/*
 * Resolución de ejercicio Secuencia de Fibonacci
*Con el paso a paso:
 */
 
/*
*La Secuencia de Fibonacci
*La secuencia de Fibonacci es una serie de números en la que cada número (a partir del tercero) es la suma de los dos números anteriores. Comienza con 0 y 1, y la secuencia continúa indefinidamente. En este caso, hemos generado y mostrado los primeros 10 términos.

*Por ejemplo, los primeros términos generados en este programa serán: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]. Cada número es la suma de los dos números anteriores en la secuencia.
*/


//*Paso 1: Definir una Función fibonacci
function fibonacci(n) {
    const secuencia = [0, 1]; //paso 2
  
    for (let i = 2; i < n; i++) { //paso 3
      const siguienteTermino = secuencia[i - 1] + secuencia[i - 2];
      secuencia.push(siguienteTermino);
    }
  
    return secuencia; //paso 4 
  }
  /*
  *En este paso, se define una función llamada fibonacci que toma un parámetro n, que representa cuántos términos de la secuencia de Fibonacci queremos generar. La función utiliza un array llamado secuencia para almacenar los términos.
  */

  //*Paso 2: Inicializar la Secuencia: La secuencia de Fibonacci comienza con los términos 0 y 1. Estos dos términos se añaden inicialmente al array secuencia.
  

  //*Paso 3: Bucle for para Generar la Secuencia
  
  /*
  *Este bucle for comienza en i = 2 porque ya hemos agregado los dos primeros términos manualmente. Continúa hasta i < n, generando los términos adicionales de la secuencia.

*En cada iteración, se calcula el siguiente término (siguienteTermino) sumando los dos términos anteriores (secuencia[i - 1] y secuencia[i - 2]). Este término se agrega al final del array secuencia con secuencia.push(siguienteTermino).
  */

//*Paso 4: Devolver la Secuencia Generada
//*La función devuelve el array secuencia que contiene los términos generados de la secuencia de Fibonacci.


//*Paso 5: Llamada a la Función con n = 10
const primeros10Terminos = fibonacci(10);
 /*
 *Se llama a la función fibonacci con n = 10 para generar los primeros 10 términos de la secuencia de Fibonacci. El resultado se almacena en la variable primeros10Terminos.
 */

 //*Paso 6: Mostrar el Resultado
 console.log("Primeros 10 términos de la secuencia de Fibonacci:");
console.log(primeros10Terminos);    