/*
 ## Ejercicio 1: FizzBuzz Sencillo
    Escribe un programa que imprima los números del 1 al 100. 
    Pero para los múltiplos de 3, imprime "Fizz" 
    en lugar del número, y para los múltiplos de 5, 
    imprime "Buzz". Para los números que son múltiplos 
    de 3 y de 5, imprime "FizzBuzz".
 */
// guardo fizz en lugar del resultado que toque
// es par si el resto es igual a cero

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FiizBuzz")
    } else if (i % 3 == 0){
        console.log("Fizz")
    } else if(i%5 == 0){
        console.log("Buzz")
    }
    console.log(i);
}
