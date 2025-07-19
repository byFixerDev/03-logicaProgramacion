/*
 ## Ejercicio 1: FizzBuzz Sencillo
    Escribe un programa que imprima los números del 1 al 100. 
    Pero para los múltiplos de 3, imprime "Fizz" 
    en lugar del número, y para los múltiplos de 5, 
    imprime "Buzz". Para los números que son múltiplos 
    de 3 y de 5, imprime "FizzBuzz".
 */
// escribir 1-100
//Multiplos: n1 % n2 == 0
// 1<=100 


for(let i = 1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if(i % 3 == 0){
        console.log("Fizz");
    } else if(i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i)
    }
    
}
