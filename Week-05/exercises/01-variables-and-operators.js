console.log("--Exercise 1: variables and operators.");

/* a.Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una
 3er variable.*/

 console.log("-Exercise 1.a:")
 var numberOne, numberTwo, numberThree;
 numberOne = 17;
 numberTwo = 25;
 numberThree = numberOne + numberTwo;
 console.log(numberOne);
 console.log(numberTwo);
 console.log("The result of the sum is: " + numberThree);

 // b.Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

 console.log("-Exercise 1.b:");
 var firstName, surname, fullName;
 firstName = "Octavio";
 surname = "Ferreyra"
 fullName = "his full name is " + firstName + " " + surname;
 console.log("his first name is: " + firstName);
 console.log("his surname name is: " + surname);
 console.log(fullName) 

 /* c. Crear dos variables del tipo String y sumar el largo de cada variable (cantidad de letras del String) guardando
 el resultado de la suma en una 3er variable (utilizar lenght)*/

 console.log("-Exercise 1.c:");
 var firstWord, secondWord, thirdWord;
 firstWord = "Radium";
 secondWord = "Rocket";
 thirdWord = (firstWord.length + secondWord.length);
 console.log("the lenght of the sum of the words is " + thirdWord);

 
