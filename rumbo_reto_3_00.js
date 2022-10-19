// tener 2 arreglos
// comparar elemento por elemento
// contar cuando el elemento del arreglo 1 sea igual al elemento del arreglo 2


let arreglo1 = [10,9,8,7,6];
let arreglo2 = [10,8,8,9,6];

var iguales = 0;

for(var i = 0; i < arreglo1.length; i++)
{
    if( arreglo1[i] == arreglo2[i] )
    {
        iguales = iguales + 1;
        //iguales++;
        //console.log("Iguales: ", iguales);
        console.log("Iguales: ", iguales);
    }
    else
    {
        console.log("Diferente");
    }
}



