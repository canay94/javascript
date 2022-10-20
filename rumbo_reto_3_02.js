// tener 2 arreglos
// comparar elemento por elemento
// contar cuando el elemento del arreglo 1 sea igual al elemento del arreglo 2
// contar las calificaciones iguales y las diferentes
// obtener el promedio del primer arreglo y del segundo

let arreglo1 = [10,9,8,7,6];
let arreglo2 = [10,8,8,9,6];

var iguales = 0;
var diferentes = 0;

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
console.log("Diferentes", diferentes);

// obtener el promedio del primer arreglo
var acum1 = 0;
for(var x = 0; x < arreglo1.length; x++ )
{
    acum1 = acum1 + arreglo1[x];
}
console.log("El promedio del primer arreglo: ", acum1/arreglo1.length);

// obtener el promedio del segundo arreglo
var acum2 = 0;
for(var x = 0; x < arreglo2.length; x++ )
{
    acum2 = acum2 + arreglo2[x];
}
console.log("El promedio del segundo arreglo: ", acum2/arreglo2.length);

