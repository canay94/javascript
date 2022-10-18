// Function to compute the product of p1 and p2
function myFunction(p1, p2)
{
  return p1 * p2;
}

// Call the function
let resultado = myFunction(2,3);
console.log(resultado);
var res = myFunction(10,20);
console.log(res);
const res1 = myFunction(5,4);
console.log(res1);


// ejercicio. Implementar una función que se llame sumar3
// solicite 3 números y nos regrese la suma de los 3
function sumar3(a,b,c)
{
    return a+b+c;
}

const suma0 = sumar3(10,20,30);
console.log(suma0);


// hacer una función que convierta de grados centigrados a farenheit
function convertirCelsiusAFahrenheit(temperatura)
{
return (temperatura * 1.8) + 32;
}


// convert 15 celsius to fahrenheith (59)
// convertir 15 grados celsius a Fahrenheith son 59
var grados_centigrados = convertirCelsiusAFahrenheit(15);
console.log(grados_centigrados);
console.log("grados Fahrenheit: ", grados_centigrados);



// uso del if

// al programa anterior, agregar la siguiente condición
// Si los grados Fahrenheith son de 0 a 30, mostrar el mensaje "Temperatura agradable"
// Si los grados Fahrenheith son mayores a 30, mostrar el mensaje "Temperatura más agradable"

// If Fahrenheit is 0-30, display "Comfortable Temperature" message

// If Fahrenheith is greater than 30, display "Most comfortable temperature" message
// referencia https://www.freecodecamp.org/espanol/news/javascript-if-else-y-if-then-sentencias-condicionales-en-js/

var grados_centigrados = convertirCelsiusAFahrenheit(15);

if ( (grados_centigrados >= 0) && (grados_centigrados <= 30))
{
  console.log("Temperatura agradable");
}

if (grados_centigrados > 30)
{
  console.log("Temperatura más agradable");
}


// -10 = 14
var grados_centigrados = convertirCelsiusAFahrenheit(-10);

if ( (grados_centigrados >= 0) && (grados_centigrados <= 30))
{
  console.log("Temperatura agradable");
}

if (grados_centigrados > 30)
{
  console.log("Temperatura más agradable");
}

// ToDo
// Optimizar el programa con el uso del else
// -10 = 14
var grados_centigrados = convertirCelsiusAFahrenheit(15);

if ( (grados_centigrados >= 0) && (grados_centigrados <= 30))
{
  console.log("Temperatura agradable");
}

else if (grados_centigrados > 30)
{
  console.log("Temperatura más agradable");
}

