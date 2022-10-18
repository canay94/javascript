// uso del if

// al programa anterior, agregar la siguiente condición
// Si los grados Fahrenheith son de 0 a 30, mostrar el mensaje "Temperatura agradable"
// Si los grados Fahrenheith son mayores a 30, mostrar el mensaje "Temperatura más agradable"

// If Fahrenheit is 0-30, display "Comfortable Temperature" message

// If Fahrenheith is greater than 30, display "Most comfortable temperature" message
// referencia https://www.freecodecamp.org/espanol/news/javascript-if-else-y-if-then-sentencias-condicionales-en-js/


function convertirCelsiusAFahrenheit(temperatura)
{
return (temperatura * 1.8) + 32;
}

//console.log(convertirCelsiusAFahrenheit(15));
//var grados_centigrados = convertirCelsiusAFahrenheit(15);

var respuesta = convertirCelsiusAFahrenheit(15);

if ((respuesta >= 0) && (respuesta <= 30))
{
    console.log("Confortable Temperature ", respuesta);
}
if(respuesta > 30)
{
    console.log("Most confortable temperature", respuesta);
}


// repaso del uso del if
var x = 10;

if (x<10)
{
     console.log("El valor es menor a 10", x)
}
else
{
     console.log("El valor es mayor o igual a 10", x)
}

var edad = 20;
if(edad <= 18)
{
    console.log("Menor de edad ", edad);
}
else
{
    console.log("Mayor de edad ", edad)
}



if ((respuesta >= 0) && (respuesta <= 30))
    {
    console.log("Confortable Temperature ", respuesta);
    }
if(respuesta > 30)
    {
    console.log("Most confortable temperature", respuesta);
    }


// optimize code
respuesta = convertirCelsiusAFahrenheit(-10);

if ((respuesta >= 0) && (respuesta <= 30))
    {
    console.log("Confortable Temperature..optimize ", respuesta);
    }
else if(respuesta > 30)
    {
    console.log("Most confortable temperature...optimize", respuesta);
    }


// optimize code ++
respuesta = convertirCelsiusAFahrenheit(-100);

if ((respuesta >= 0) && (respuesta <= 30))
    {
    console.log("Confortable Temperature..optimize++ ", respuesta);
    }
else if(respuesta > 30)
    {
    console.log("Most confortable temperature...optimize++", respuesta);
    }
else
    {
    console.log("valor no considerado....", respuesta);
    }
