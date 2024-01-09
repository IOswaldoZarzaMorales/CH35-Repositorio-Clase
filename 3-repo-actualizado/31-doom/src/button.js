// https://developer.mozilla.org/es/docs/Web/CSS/visibility
// https://es.javascript.info/mouse-events-basics
// https://platzi.com/tutoriales/1099-fundamentos-javascript-2017/2562-eventos-del-mouse-en-javascript/
// https://naviscode.com/blog/eventos-de-teclado-en-javascript

const container = document.getElementById("container-div");
const button = document.getElementById("card-btn");
// agregando estilos al container para visibilidad
container.style.visibility = "visible";

//manejando eventos para ocultar el container desde el botón
button.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden" : "visible";
});

//condición if - else if - else en más de dos opciones.

