console.log("--Exercise 3: Arrays");

/* a.Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
 "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

 console.log("--Exercise 3.a:");
 var meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];
console.log(meses[4])
console.log(meses[10])

// b.Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("--Exercise 3.b:");
var mesesOriginal = meses.slice();
meses.sort();
console.log(meses);

// c.Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log("--Exercise 3.c:");
meses = mesesOriginal;
meses.unshift("año 2020");
meses.push("año 2021");
console.log(meses);

// d.Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log("--Exercise 3.d:");
var itemEliminadoPrincipio = meses.shift();
var itemEliminadoFinal = meses.pop();
console.log("el item eliminado al principio es: " + itemEliminadoPrincipio);
console.log("el item eliminado al final es: " + itemEliminadoFinal);
console.log("el array meses queda: " + meses);

// e. Invertir el orden del array (utilizar reverse).

console.log("--Exercise 3.e:");
meses.reverse();
console.log(meses);

// f.Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log("--Exercise 3.f:");
meses.reverse();
var mesesOneString = meses.join("-");
console.log(mesesOneString);

// g.Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log("--Exercise 3.g:");
var mesesExerciseG = meses.slice(4,11);
console.log(mesesExerciseG);









