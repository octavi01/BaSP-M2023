console.log("--Exercise 2: Strings");

/* a.Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
 (utilizar toUpperCase).*/

console.log("--Exercise 2.a:");
var firstString;
firstString = "technology";
console.log(firstString.toUpperCase());

/* b.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
 guardando el resultado en una nueva variable (utilizar substring).*/

console.log("--Exercise 2.b:");
var secondString, thirdString;
secondString = "membership";
thirdString = secondString.substring(0,5);
console.log(thirdString);

/* c.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log("--Exercise 2.c:");
var fourthString, fifthString;
fourthString = "translator";
fifthString = fourthString.substring(7,10);
console.log(fifthString)

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
 mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
 toLowerCase y el operador +).*/

console.log("--Exercise 2.d");
var sixthWord, seventhWord;
sixthWord = "headphones";
seventhWord = sixthWord.substring(0,1).toUpperCase() + sixthWord.substring(1,10).toLowerCase();
console.log(seventhWord);

/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
 primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log("--Exercise 2.e");
var newString, anotherString;
newString = "good morning"
anotherString = newString.indexOf(" ");
console.log(anotherString);

/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
 Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
 palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
 operador +).*/

 console.log("--Exercise 2.f");
 var exerciseF, whiteSpace, finalWord;
 exerciseF = "disruptive technology"
 whiteSpace = exerciseF.indexOf(" ");
 finalWord = exerciseF.substring(0,1).toUpperCase() + exerciseF.substring(1,whiteSpace).toLowerCase() + 
             exerciseF.substring(whiteSpace,12).toUpperCase() + exerciseF.substring(12,21).toLowerCase();
console.log(finalWord);












