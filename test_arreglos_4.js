// https://www.freecodecamp.org/espanol/news/tutorial-de-javascript-arrayforeach-como-iterar-a-traves-de-elementos-en-un-arreglo/

let numeros = [10, 8, 9, 10];
let acum = 0 ;

numeros.forEach( function(numero)
    {
        acum = acum + numero;
        console.log("Value of acum: ", acum);
    }
    )

console.log("The average is: ", acum/numeros.length);


let calificaciones = [10, 8, 10, 9];
acum = 0 ;

calificaciones.forEach(function(calificacion)
    {
        acum = acum + calificacion;
        console.log("Value of acum: ", acum);
    }
    )

console.log("The average is: ", acum/calificaciones.length);

