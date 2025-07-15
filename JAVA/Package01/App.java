/*
 ## Ejercicio 1: FizzBuzz Sencillo
    Escribe un programa que imprima los números del 1 al 100. 
    Pero para los múltiplos de 3, imprime "Fizz" 
    en lugar del número, y para los múltiplos de 5, 
    imprime "Buzz". Para los números que son múltiplos 
    de 3 y de 5, imprime "FizzBuzz".
 */
public class App{
    public static void main(String[] args) {
        for(int i = 1; i <= 100; i++){
            if(i % 3 == 0 && i % 5 == 0){
        System.out.println("FizzBuzz");
    } else if(i % 3 == 0){
        System.out.println("Fizz");
    } else if(i % 5 == 0){
        System.out.println("Buzz");
    } else {
        System.out.println(i);
    }
        }
    }
}

