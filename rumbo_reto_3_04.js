// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

function array_average(arreglo)
{
    var acum = 0;
    for(var x = 0; x < arreglo.length; x++ )
    {
        acum = acum + arreglo[x];
    }
    console.log("El promedio es: ", acum / arreglo.length);
}

var alice = [10, 9, 8]
var average_a = array_average(alice)

var bob = [9, 10, 7]
var average_b = array_average(bob)


// good practice function
function array_average_with_return(arreglo)
{
    var acum = 0;
    for(var x = 0; x < arreglo.length; x++ )
    {
        acum = acum + arreglo[x];
    }
    return (acum / arreglo.length)
}


var average_a = array_average_with_return(alice)
console.log("El promedio del arreglo de Alice es: ", average_a)

var average_b = array_average_with_return(bob)
console.log("El promedio del arreglo de Bob es: ", average_b)


// function return an array
// function compareTriplets(a, b) {}


function return_array(array_example)
{
    return array_example
}


var alice = [17,28,30]
var ra = return_array(alice)
console.log("Return array: ", ra)


