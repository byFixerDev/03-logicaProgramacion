/*
Crea una función que tome una cadena como entrada y devuelva la cadena al revés.
*/

//inicializar cadenas = "";
//bucle inverso hasta >=0
//almacenar caracteres += 
//sacar caracteres .charAt(i);

let cadena = "hola";
let cadenaInvertida = "";
for(let i = cadena.length -1; i>=0; i--){
    
    cadenaInvertida += cadena.charAt(i);
}
console.log(cadenaInvertida);