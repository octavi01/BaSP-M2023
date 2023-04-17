console.log("--Exercise 6: Functions");

/*a.Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
 resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

 console.log("--Exercise 6.a:");
 function sumExerciseA(a, b){
    return a + b;
 }
 var resultSum = sumExerciseA(5, 7);
 console.log(resultSum);

 /* b.Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
  número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor
  NaN como resultado.*/

  console.log("--Exercise 6.b:");
  function sumExerciseB(a, b){
    if (typeof a !== "number" || b !== "number"){
        alert("ERROR, one of the parameters is not a number");
        return NaN;
    }else {
        return a + b;
    }
  }
  var aLittleTest = sumExerciseB("plane", 27);
  console.log(aLittleTest);

/* c.Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
   entero*/

   console.log("--Exercise 6.c:");
   function validateInteger (a) {
    if (Number.isInteger(a)) {
        return true;
    }else {
        return false;
    }
   }
   // examples
   // console.log(validateInteger(5));
   // console.log(validateInteger(5.2));

/* d.Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y
   que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el 
   número convertido a entero (redondeado).*/

    console.log("--Exercise 6.d:");
    function sumExerciseD(a, b){
    if (typeof a !== "number" || typeof b !== "number"){
        alert("ERROR, one of the parameters is not a number");
        return NaN;
    } else {
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            alert("one of the parameters is not an integer number");
            return Math.round(a) + Math.round(b);
        } else {
            return a + b;
        }
    }
}
// acá solamente la estoy probando, sé que no lo pide el ejercicio/no es necesario.
   var resultSumExerciseD = sumExerciseD(2.5,2);
   console.log(resultSumExerciseD);

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando 
que todo siga funcionando igual que en el apartado anterior.*/

console.log("--Exercise 6.e:");
function lastFunction(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert("one of the parameters is not an integer number");
        return Math.round(a) + Math.round(b);
    } else {
        return a + b;
    }
}
var lastFunctionExample = lastFunction(2.2, 5);
console.log(lastFunctionExample);

