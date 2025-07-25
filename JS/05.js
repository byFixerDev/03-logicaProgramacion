/*
Aquí tienes otro reto de programación:
Crea una función llamada encontrarMaximo que tome un array 
de números como entrada y devuelva el número más grande.
Si el array está vacío, la función debe devolver null.
*/


//iniciar variables con los valores por defecto
//actualizar en caso de que el siguiente valor sea superior al que ya tiene maximo
//iniciar contador en 1 para un contéo más cómodo o restarle 1 al final del conteo


function encontrarMaximo(numeros) {
    //verificar entrada
  if (numeros.length === 0) {
    return null;
  }

  //inicio el array con 0
  let maximo = numeros[0];

  //recorro el resto del array
  for (let i = 1; i < numeros.length; i++) {
    //actualizar variable en caso de que el valor sea superio al que ya tengo
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }  
  return maximo;
}

console.log(encontrarMaximo([84,20,20,3,23,4,422,43]));


