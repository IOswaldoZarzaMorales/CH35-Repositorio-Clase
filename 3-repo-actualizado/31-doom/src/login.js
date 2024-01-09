const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
// REGEX, nos van a determinar patrones que se deben cumplir
let emailREGEX =/^[\w.+\-]+@gmail\.com$/;

//deshabilitar botón
submitButton.disabled = true;

/**Evento para input, el cual evaluará la exp reg y en caso de cumplir con el patrón, habilitará el botón y podremos ser redirigidos a la página index.html.
 * Se obtiene el valor actual del campo email (input) usando e.target.value y se almacena en una variable (text).
 * - Se evalúa la REGEX
 */

emailInput.addEventListener("input", (e) => {
    const text = e.target.value;
    if(emailREGEX.test(text) == true) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

