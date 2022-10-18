// https://es.javascript.info/array

let arr = ["Apple", "Orange", "Pear"];

for(var i = 0; i < arr.length; i++)
{
    console.log("The values of i: ", i);
    console.log("Elements of array ", arr[i]);
}

let calificaciones = [10,8,10,9];
console.log("Number of califications: " ,calificaciones.length);

for(var x = 0; x < calificaciones.length; x++)
{
    console.log("Calification: ", calificaciones[x]);
}



// 1.- add all califications
var acum = 0;
for(var x = 0; x < calificaciones.length; x++)
{
    console.log("Calification: ", calificaciones[x]);
    acum = acum + calificaciones[x];
    console.log("Total: ", acum);
}

// 2.- calculate the average
var average = acum / calificaciones.length;
console.log("The average is: ", average);




