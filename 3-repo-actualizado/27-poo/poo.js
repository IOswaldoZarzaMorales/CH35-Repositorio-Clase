/**Paradigmas de programación
 * 
 * Programación immperativa: se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada
 * 
 * programación basada en eventos: se basa en la gestión y respuesta de eventos.
 * 
 * programación declarativa: explicar lo que queremos obtener.
 * 
 * programación orientada a objetos: toma cierta información o estructura del mundo real (objetos) y sus características (propiedades o atributos) y sus comportamientos o acciones (métodos).
 * 
 */


//objetos
//El constructor es una función especial, cuya finalidad es la de construir o instanciar objetos para inicializar un objeto es necesario definir un constructor que tomará a los atributos.
//clases: plantillas para crear objetos. nos ayudan a definir un tipo de objeto y crear instancias.

/* class Persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer() {
        console.log("gran comida");
    }// método comer

    bailar() {
        console.log("bailando música divertida");
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log("Apellido:", this.apellido);
        console.log("Edad:", this.edad);
        console.log("Email:", this.email);
        console.log("Teléfono:", this.telefono);
    }
}

let usuario1 = new Persona("Fernanda", "Ramos", 31, "fer@gmail.com", 5544556677); */
/* let usuario2 = new Persona("Ana", "Morales", 29, "dev.karenmorales@gmail.com", 5541126723); */

/* console.log (usuario1); */ //imprimir objeto completo
/* console.log(usuario1.nombre); */ //imprimimos solo un atributo
/* console.log(usuario1.email, usuario2.email); */

/* usuario1.comer(); */ //Invocar el método
/* suario2.bailar();
usuario2.mostrarInfo();
console.log(usuario1.email, usuario2.apellido); */

//Pilares de la programación orientada a objetos

/**Herencia
 * polimorfismo
 * encapsulamiento
 * abstracción
 */

//Herencia nos permite heredar a clases inferiores para  poder optimizar el programa

/* class Arrendador extends Persona {//subclase
    capacidad = 0;
    direccion = "";
    codigoPostal = "";

    constructor(capacidad, costo, nombreLugar){
        super(nombre, apellido, edad, email, telefono); //palabra reservada, de la clase superior, tomarás ciertos atributos, que se hereden.
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }

    mostrarInfo() {
        console.log("Capacidad", this.capacidad);
        console.log("Costo", this.costo);
        console.log("Nombre del lugar", this.nombreLugar);
    }

}

let arrendador1 = new Arrendador( 100, 50000, "Ro Place");

console.log(arrendador1.nombre);
console.log(arrendador1.apellido);
console.log(arrendador1.edad);
console.log(arrendador1.email);
console.log(arrendador1.telefono);
console.log(arrendador1.costo);
arrendador1.mostrarInfo(); */

/* class ArrendadorGuadalajara extends Arrendador {

} */

class Persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer() {
        console.log("gran comida");
    }

    bailar() {
        console.log("bailando música divertida");
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log("Apellido:", this.apellido);
        console.log("Edad:", this.edad);
        console.log("Email:", this.email);
        console.log("Teléfono:", this.telefono);
    }
}

class Arrendador extends Persona {
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(capacidad, costo, nombreLugar, ...Args){
        super(...Args);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log("Capacidad:", this.capacidad);
        console.log("Costo:", this.costo);
        console.log("Nombre del lugar:", this.nombreLugar);
    }
}

let arrendador1 = new Arrendador(100, 50000, "Ro Place", "Fernanda", "Ramos", 31, "fer@gmail.com", 5544556677);

arrendador1.mostrarInfo();

/**
 * Polimorfismo: Tener objetos de diferentes tipos que pueden ser manipulado en comun
 */
class producto {
    
    marca = "";
    precio = 0;

    constructor(marca, precio){
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion(){
        console.log("Marca ");
        console.log("Precio ");
    }
}

let producto1 = new producto("cerave", 85);

//Encapsulamiento: Ocultar la implementacion de un objeto y solo mostrar los datos necesarios 


class Usuario{
    #contraseña;

    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    verificarContraseña(contraseña) {
        return this.#contraseña === contraseña;
    };
}

//Abstraccion: Traer objetos del mundo real y poder aplicarlos a la programacion mediante clases, metodos, constructores y objetos


//Los objetos de tipo Json es un formato de intercambio de datos ligero, accesible, estructurado, manipulable(DOM) y que nos brindan una mejor comunicacion entre el cliente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejcutan con fetch.
let objetoLiteral = {
    nombre : "Juanin",
    apellido : "Jaun Harry",
    edad : 31,
    email: "juanin@gmail.com",
    telefono: "1877838383",

}

console.log(objetoLiteral);

//Principios SOLID

//1 Principio de responsabilidad unica (single responsability principle SRP)
// Una clase de tener asignada una tarea o responsabilidad especifica y esta no deberia de cambiar.
//2 Principio abierto/cerrado (open/closed principle OCP)Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma.
//3 Principio de sustitución de Liskov (Liskov sustitution principle LSP). Una clase hijo puede sustituir objetos de una clase padre.
//4 Principio de segregación de interfaces (interface segregation principle ISP). Delimitar los métodos que necesito y dejar fuera los innecesarios.
//5 principio de inversion de dependencias (dependency inversion principle DIP).

/**
 * Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para incializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no.
 * Atributos:
 * nombre
 * calificacion
 * 
 * Metodos 
 * imprimirCalificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion
 */

class Alumno {
    nombre = "";
    calificacion = 0;

    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    imprimirCalificacion(){
       console.log(`Tu calificacion es ${this.calificacion}`);
    }
    
    evaluacion(){
        if(this.calificacion >= 6){
            console.log(`Aprobaste ${this.nombre}`);
        } else{
            console.log(`Reprobaste ${this.nombre}`);
        }
    }
}

let Alumno1 = new Alumno ("Rene", 9);
let Alumno2 = new Alumno ("Abi", 4);
let Alumno3 = new Alumno ("Karen", 10);
let Alumno4 = new Alumno ("Baruch", 10);
let Alumno5 = new Alumno ("Eunice", 2);
let Alumno6 = new Alumno ("Oswaldo", 20);
let Alumno7 = new Alumno ("Montse", 8);
let Alumno8 = new Alumno ("Emiliano", 7);
let Alumno9 = new Alumno ("David", 1);

console.log(Alumno1, Alumno2, Alumno3, Alumno4, Alumno5, Alumno6, Alumno7, Alumno8, Alumno9);
Alumno1.evaluacion();
Alumno1.imprimirCalificacion();
Alumno2.evaluacion();
Alumno2.imprimirCalificacion();
Alumno3.evaluacion();
Alumno3.imprimirCalificacion();
Alumno4.evaluacion();
Alumno4.imprimirCalificacion();
Alumno5.evaluacion();
Alumno5.imprimirCalificacion();
Alumno6.evaluacion();
Alumno6.imprimirCalificacion();
Alumno7.evaluacion();
Alumno7.imprimirCalificacion();
Alumno8.evaluacion();
Alumno8.imprimirCalificacion();
Alumno9.evaluacion();
Alumno9.imprimirCalificacion();