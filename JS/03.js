/*
    Crea una función llamada contarVocales que tome una 
    cadena como entrada y devuelva el número de vocales 
    que contiene (a, e, i, o, u).

    La función debe ser insensible a mayúsculas y minúsculas.
*/

//verificaciones y transformaciones antes de procesar
//RegExp (practicar)

//vocalesEncontradas es igual a la cadena filtrada

//si vocalesEncontradas es TRUE devuelve la longitud
//de la misma variable, en caso contrario devuelve 0.


let cadena = "cadena";
cadena = cadena.toLowerCase();

function contarVocales(cadena){
    //OJO al match()
    //
    const vocalesEncontradas = cadena.match(/[aeiou]/g);
    return vocalesEncontradas ? vocalesEncontradas.length:0;
}

console.log(contarVocales(cadena));