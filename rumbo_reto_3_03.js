
function array_average(arreglo)
{
    var acum = 0;
    for(var x = 0; x < arreglo.length; x++ )
    {
        acum = acum + arreglo[x];
    }
    console.log("El promedio es: ", acum /arreglo.length);
}

function iguales_y_no_iguales(arreglo1, arreglo2)
{
    var iguales = 0;
    var diferentes = 0

for(var i = 0; i < arreglo1.length; i++)
{
    if( arreglo1[i] == arreglo2[i] )
    {
        iguales = iguales + 1;
    }
    else
    {
        diferentes++;
    }
}
    console.log("Iguales: ", iguales);
    console.log("Diferentes ", diferentes);
}

let arreglo1 = [10,9,8,7,6];
let arreglo2 = [10,8,8,9,6];

array_average(arreglo1);
array_average(arreglo2);

iguales_y_no_iguales(arreglo1, arreglo2);

