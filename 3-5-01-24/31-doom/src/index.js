/**
 * Manipulación del DOM,
 * -Leer y traer nodos del árbol del DOM.
 * document.getElementById (trae elementos por ID)
 * document.getElementByClassName(trae elementos por clase)
 * document.getElementByTagName(trae elementos por)
 */

//getElementById
const titulo = document.getElementById('title1');
console.log(titulo);
console.log(titulo.innerText); //traer un string (texto que vive en mi id)

//getElementByClassName
const titulos = document.getElementsByClassName('title');
console.log(titulos);
console.log(titulos.length); //devuelve el número de longitud de elementos de la clase
console.log(typeof titulos); //muestra que es un object porque es una colección de arrays

//getElementByTagName
const tituloH3= document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/**Métodos para llamar elementos mediante selectores de CSS.
 * Se usa para procesos más específicos y la sintaxis querySelector
 * -document.querySelector("selector"); //#, ., <>
 * -document.querySelectorAll(). Selecciona los elementos que se especifiquen.
 * Siempre van a traer el primer elemento con el selector indicado.
 */

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass);

const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign= "center";
titulo.style.color = "#6BD7";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de manipulación del DOM. CH35";
titulo2.style.color = "#F356";

/**Métodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "Crear el nodo y agregar el nodo".
 * -Crear nodos
 * *document.createElement("element") --> Crea elementos a partir de etiquetas.
 * document.createTextNode("text") --> Crea texto dentro de las etiquetas.
 */

const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/**-Agregar nodos, mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado
 * parentElement.appendChild(const);
 * parentElement.append(const);
 * parentElement.insertBefore(const);
 * parentElement.insertAdjacentElement(const);
 * Utilizaremos mayormente appendChild
 * 
 */
//Obtengo el elemento padre por tag, class o id
const parentElement = document.getElementById("dif");
//Crear el texto que vivirá en el 
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//Inserto el texto en el nodo1
nodo1.appendChild(textNodo1);
//Insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#8E59";


/**Agregando imagen
 * Inserto el imgNodo en el elemento padre para definirlo posteriormente
 */
parentElement.appendChild(imgNodo);
//Acceso a las propiedades de la imagen
imgNodo.src = "../../JS-06-DOM/src/assets/github-image.jpg";

imgNodo.alt = "Octocat-gitHub";
imgNodo.width = "300";

/*Otra forma de leer y modificar nodos
document.outerHTML (leer)
node.innerHTML(escribir sobre el nodo) */

const elementoOuter = titulo2.outerHTML;
console.log(elementoOuter);
titulo2.innerHTML = "Manipulación del DOM - CH35";



