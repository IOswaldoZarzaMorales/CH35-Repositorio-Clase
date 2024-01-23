package controlFlujo;
import java.util.Scanner;


public class FlujoControl {

	public static void main(String[] args) {
		//Para que se ejecute, siempre debe de ir en el método principal
		
		//Se define una vaible del tipo String donde se alamcena un dato
		
		/*
		String viaje = null; // Luego se agrega la fecha
		//Variable declarada e inicializada, en null a propósito, para tener un espacio de memoria ya asignado, y solo reemplazarlo con un nuevo dato.
		//Para validar si podemos viajar en cierta fecha
		if (viaje != null) {//viariable vacía
			System.out.println("Ya no tenemos fechas disponibles, una disculpa.");
		} else {
			System.out.print("Puede reservar su viaje");
		}
		*/
		
		///////////////////////////
		//Validacion de contraseña
			//	Scanner scanner = new Scanner(System.in);

		        // Solicitar la primera contraseña
				/*
		        System.out.print("Ingrese la contraseña: ");
		        String contraseña1 = scanner.nextLine();

		        // Solicitar la segunda contraseña
		        System.out.print("Ingrese la contraseña nuevamente: ");
		        String contraseña2 = scanner.nextLine();

		        // Verificar si las contraseñas coinciden
		        if (contraseña1.equals(contraseña2)) {
		            System.out.println("Las contraseñas coinciden. Acceso permitido.");
		        } else {
		            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
		        }

		        // Cerrar el scanner
		        scanner.close();  */
		
///////////////////////////// SWITCH /////////////////////
		        //Switch para seleccionar comida de la dulcería del cine
		        //Slección de opciones, variable que almacena dicha opción
		        //int menu = 1;
		     /*   int menu = scanner.nextInt();
		        
		        //Crear un menú
		        System.out.println("Bienvenido a la dulcería, que desea ordenar?: ");
		        System.out.println("1. Palomitas");
		        System.out.println("2. Refresco");
		        System.out.println("3. Nachos");
		        System.out.println("4. Hotdog");
		        System.out.println("5. Pagar");
		        System.out.println("No contamos con eso en nuestro menu, por favor seleccione una opción válida");
		        
		        switch (menu) {
		        case 1:
		        	System.out.println("Usted ha agregado palomitas"); //Agregamos una opción y mensaje.
		        	break;
		        case 2:
		        		System.out.println("Usted ha agregado Refresco a su combo");
		        	break;
		        case 3:
	        		System.out.println("Usted ha agregado Nachos a su combo");
	        		break;
		        case 4:
	        		System.out.println("Usted ha agregado Refresco a su combo");
	        		break;
		        case 5:
	        		System.out.println("Usted ha agregado Hotdog a su combo");
	        		break;
		        default:
	        		System.out.println("Por el momento no contamos con esa opción");
	        		break;
		        	
		        } */
		        
		        
		        
		        Scanner scanner = new Scanner(System.in);
				
				System.out.println("Bienvenido a la dulceria, ¿qué desea ordenar?");
		        System.out.println("1. Palomitas");
		        System.out.println("2. Refresco");
		        System.out.println("3. Nachos");
		        System.out.println("4. Hot-dog");
		        System.out.println("5. Pagar");

		        int total = 0;
		        String orderList = "";

		        while (true) {
		            int menu = scanner.nextInt();

		            if (menu >= 1 && menu <= 5) {
		                switch (menu) {
		                    case 1:
		                        orderList += "Palomitas, ";
		                        total += 10; // Adjust the price accordingly
		                        break;
		                    case 2:
		                        orderList += "Refresco, ";
		                        total += 5; // Adjust the price accordingly
		                        break;
		                    case 3:
		                        orderList += "Nachos, ";
		                        total += 8; // Adjust the price accordingly
		                        break;
		                    case 4:
		                        orderList += "Hot-dog, ";
		                        total += 12; // Adjust the price accordingly
		                        break;
		                    case 5:
		                        System.out.println("Usted ha seleccionado pagar su combo");
		                        break;
		                }

		                if (menu == 5) {
		                    break; // Exit the loop when the user chooses to pay
		                }
		            } else {
		                System.out.println("Por favor, seleccione una opción válida (1-5).");
		            }
		        }

		        System.out.println("Usted ha ordenado: " + orderList.substring(0, orderList.length() - 2)); // Remove the trailing comma
		        System.out.println("El total a pagar es: $" + total);

		        // Close the Scanner to avoid resource leak
		        scanner.close();
		        
	}

}
