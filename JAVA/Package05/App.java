/*
    
## Ejercicio 5: Comprobación de Par o Impar
Enunciado: Dado un número entero, determina si es par 
o impar y muestra el resultado (por ejemplo: "El número 
es par" o "El número es impar") por consola.

Piensa en el operador matemático que te puede ayudar 
a saber si un número es divisible exactamente por 2. 
*/

public class App {
    public static void main(String[] args) {
        int n = 3;
        System.out.println((n % 2)== 0 ? "Par" : "Impar");
    }
}
