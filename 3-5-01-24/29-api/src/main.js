//Programación sincrónica

/* function two (){
    console.log("dos");
}

function one (){
    console.log("uno");
    two();
    console.log("tres");
}

one(); */

//programación asincrona
/**setTimeOut que recibe una función anónima y establece un tiempo de ejecución para cumplir con la condición de asincronismo. */

/* const twoAsync = () => {
    setTimeout( () => {
        console.log("dos Async");
    }, 5000);  
}

const oneAsync = () => {
    setTimeout(function(){
        console.log("uno async");
    }, 2000);
   
    twoAsync();
    console.log("tres async");
}

oneAsync(); */

/**trabajando con promesas mediante fetch API */

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)

//si se cumple la promesa, vamos a traer los datos de la API, convertirá en tipo json para poder mostrarlos en consola
//también podemos usar response en lugar de data.
.then(data => data.json())
.then(data => {
    console.log(data); //Mostrando en consola todos los usuarios de la API
    console.log(data[0].name); //mostrando en consola el usuario con el indice 0.
})
.catch(error => console.error("oops!, algo salió mal", error));
//Mensaje de error

/**Usando fetch para mostrar en navegador */
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//Variable para guardar la información que se va a traer desde la API, DEBE SER DE TIPO NULL.
let post = null;
//Consumiendo API con fetch (promesas)
  
botonInfo.addEventListener("click", () => {
    fetch("https:/jsonplaceholder.typicode.com/users/6")
    .then(response => response.json())
    .then(response => {
        post = response; //guardo los datos de response en la variable de tipo null, para que modificar el dato.
        //mandamos a llmar la variable desde la función (pero, esa la haremos después)
        mostrarDatos(post);
    })
    .catch(error => console.log("¡Problemas!", error))
});


//Función que me permita manipular la variable de tipo null
//Quiero traer name, username, email, phone del user de la API
const mostrarDatos = (post) => {
    //creando nodos
    const name = document.createElement("h3");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

name.innerHTML = post.name;
userName.innerHTML = post.username;
email.innerHTML = post.email;
phone.innerHTML = post.phone;

//Hacer que aparezcan en el navegador
info.appendChild(name);
info.appendChild(userName);
info.appendChild(email);
info.appendChild(phone);
}

// Usuario fetch para mostrar  (mostrar productos)
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response => {
        post =response;
        mostrarProductos(post);
        //Función por definir
    })
    .catch (error => console.error("cuidado, error"))
});

//Función para crear, agregar y mostrar elemetnos desde el DOM
const mostrarProductos = (productos) => {
    //mando a llamar las llaves de title, price, description, image desde la API
    productos.map((productos) => {
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //Enviar a HTML con innetHTML
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = productos.category;

//Mostrarlos en su nodo padre
tienda.appendChild(imagen);
tienda.appendChild(titulo);
tienda.appendChild(precio);
tienda.appendChild(descripcion);
tienda.appendChild(categoria);
tienda.appendChild(separador);
})
};

//método POST utilizamos fetch, me permite crear recursos en la API

fetch("https://jsonplaceholder.typicode.com/posts", {
    //indicar que es un método de tipo POST
    method: "POST",
    //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente (userId, title, body)
    body: JSON.stringify({
        useId: 1986,
        title: "Sueñan los androides con ovejas eléctricas?",
        body: "Author: Phillipe K. Dick"
    }),
    //definir headers
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}) //fin de mi fetch
//inicio de mis promesas
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })

/**Programación asíncrona (promise) */
//Función flecha de tipo async-await
//Indico que es una función asíncrona con la palabra reservada async de los parámetros
const getUser = async () => {
//Para que se cumpla la promesa, no utiliza then, sino que usamos try. Para errores, se sigue utilizando catch.
try {
    // retardo para que se ejecute de manera asíncrona. Tengo que crear una nueva promesa, que recibe un setTimeOut
    await new Promise(resolve => setTimeout(resolve, 3000));

    //Mi promesa que se ejecuta
const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
const data = await response.json();
console.log(data);
} catch(error) {
    console.error("Error inexplicable", error);
}
}
// Invocar función
getUser();
// -------> Local Storage
//nos permite crear, modificar, eliminar, guardar objetos de JS de manera local (en el equipo)
//Crear un objeto de JS con sus llaves y valores
const user = {
    id: 1,
    name: "Karen",
    apellido: "Morales",
    email: "dev.karenmorales@gmail.com",
    posicion: "estudiante",
    empresa: "Generation"
}

//convertir el objeto creado a notación JSON y almacenarlo en el localStorage

localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);

/* console.log(`${user.name} con posición ${user[0].posicion}, estudia en ${user[0].empresa}`); */