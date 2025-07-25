/*
Crea una función que tome una cadena como entrada y devuelva la cadena al revés.
*/
//guardo una cadena en orden inverso
//desde la longitud de la cadena -1 hasta >= 0

let cadena = "hola";
let cadenaInvertida = "";

for(let i = cadena.length - 1; i >= 0; i-- ){
    cadenaInvertida += cadena.charAt(i);
}
console.log(cadenaInvertida);

if(cadena !== cadenaInvertida){
    console.log("No es un palindromo");
}else {
    console.log("Es un palindromo")
}
    