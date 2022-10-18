const numbers = [1, 2, 3]
const sum = numbers.reduce((prev, curr) => prev + curr, 0) // 6
console.log(sum);


let total=0, numeros = [1, 2, 3, 4, 5];
for(let i = 0; i < numeros.length; i++)
    total += numeros[i];

    console.log(total);

function simpleArraySum(ar)
{
    for(let i = 0; i < ar.length; i++)
    total += numeros[i];
    return(total);
}
ar = [10,20,30];

var t = simpleArraySum(ar);
console.log(t);


