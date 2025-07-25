/*
Crea una función llamada sumarArray
que tome un array de números como entrada 
y devuelva la suma de todos sus elementos.
*/
//acumulo los números del array en una 
//variables, se suman automáticamente

//el parametro recoge el array
function sumarArray(cajaNum){
    //acumulador
    let acumulador = 0;
    for(let i = 0; i < cajaNum.length; i++){
        //acumulo la suma
        acumulador += cajaNum[i];
    }
    //importante returns!!
    return acumulador;
}
//introducir array dentro del método()
console.log(sumarArray([1,3,4,5,3]))
