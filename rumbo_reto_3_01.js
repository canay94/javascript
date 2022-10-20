// tener 2 arreglos
// comparar elemento por elemento
// contar cuando el elemento del arreglo 1 sea igual al elemento del arreglo 2
// contar las calificaciones iguales y las diferentes

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



