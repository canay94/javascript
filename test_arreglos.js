// https://es.javascript.info/array
// array with elements
// let fruits = ["Apple", "Orange", "Plum"];
let fruits = ['Apple', 'Orange', 'Plum'];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log("Size of the array", fruits.length);

for(let i = 0; i < fruits.length; i++)
    {
    console.log("El valor de i: ", i);
    console.log(fruits[i]);
    }

for(let x = 0; x <= 100; x = x + 10)
{
    console.log("Valor de x: ", x)
}

let acumulador = 0;
for(let r = 0; r <= 5; r = r + 1)
{
    // add 0,1,2,3,4,5 -- 0,1,3,6,10,15
    acumulador = acumulador + r;
    console.log("Valor de x : ", r);
    console.log("Valor del acumulador: ", acumulador);
}
