package org.generation.dataType;

public class TiposDatos {
	public static void main(String[] args) {
		System.out.println("Hola mundo");
		
		/*Comentarios
		 * multilinea*/
		
		//comentarios de una sola linea 
		
		byte edad = 15;//Sirve para representar un numero entero 8bits (-128 al 127)
		
		System.out.println("Edad del participante"+edad);
		
		short usuariosNuevos = 200;//Sirve para representar un numero entero 16 bits (-23768 al 32767)
		
		System.out.println("Usuarixs nuevos" +usuariosNuevos);
		
		int usuariosTotales = 8752;// sirve para representar un numero entero 32 bits (-2147483648 al 2147483647)
		
		System.out.println("Usuarios Totales "+ usuariosTotales);
		
		long usuariosPremium = 9512; //Sirve para representar un número entero con valores mucho mayores
		
		System.out.println("Usuarios prmium" + usuariosPremium);
		
		//Tipos de datos con número decimales
		
		float altura = 1.61f; //Sirve para representar un valor numérico con números decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
		
		System.out.println("Altura del usuarix "+altura);
		
		double peso = 68.800;//Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
		
		//String nombreUsuario = "Fernanda";
		String costoBoleto = "500";
		String zonaBoleto = "52";
		
		System.out.println("Usuario: " + costoBoleto);
		
		char section = 'f';
		
		System.out.println("sección:" + section);
		System.out.println("Zona a la que pertenece" +zonaBoleto);
		boolean clienteFrecuente = true;
		
		System.out.println("Es un cliente frecuente: " + clienteFrecuente);
		
		//Conversio´n de tipos
		//Casteo a entero
		
		int pesoCambio = (int) peso;
		
		//casteo entero
		long pesoCambio1 = (long) peso;
		
		System.out.println("double " + peso);
		System.out.println("int " + pesoCambio);
		System.out.println("long " + pesoCambio1);
		
		int nombreCambio = Integer.parseInt(costoBoleto);
		double zonaCambio = Double.parseDouble(zonaBoleto);
		
		System.out.println(costoBoleto);
		System.out.println("Zona del usuario según su boleto " + (nombreCambio * zonaCambio));
		
/*Operadores aritméticos
 * Suma, resta multiplicación y división
 
  -Operadores de comparación
  ==  Compara si un operando es igual a otro
  != compara si es diferente
  <, <= menor que, igual que
  >, >= mayor. mayor que
  
   
 * */
		//Progra para un cine
		
		int salas = 10;
		int asientosPorSala = 50;
		float precioBoleto = 75.50f;
		double precioPalomitas = 89.7;
		double precioBebida = 35.50;
		int capacidadTotal = 500;
		
		int personasDentro = 342;
		
		if (personasDentro > capacidadTotal) {
			System.out.print("lo lamento ya no hay lugar");
		}
		
		double totalEntrada = personasDentro * precioBoleto;
		double totalPalomitas = personasDentro * precioPalomitas;
		double totalBebidas = personasDentro * precioBebida;
		
		System.out.print("Total de personas" + personasDentro);
		System.out.print("precioEntrada");
		System.out.print("precioPalomitas");
		System.out.print("precioBebidas");
		//System.out.print("");
	}
}

