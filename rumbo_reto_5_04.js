// https://es.stackoverflow.com/questions/162389/invertir-orden-de-array-multidimensional
let items = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16 ]
];
var invertida = items.reverse();
console.log("Invertida ")
console.log(invertida);

let diagonal2 = 0;
// find first diagonal
for (var r = 0; r < invertida.length; r++)
{
    for(var c = 0; c < invertida.length; c++)
    {
    console.log("Elements array: ", "row: ",r, "column: ",c, "value : ",invertida[r][c]);
    if ( r == c)
    {
        console.log("Element of diagonal ", invertida[r][c]);
        diagonal2 = diagonal2 + invertida[r][c];
        console.log("Acum of diagonal 2: ", diagonal2);
    }
    }
}
var diagonal1 = 34
console.log(Math.abs(diagonal1 - diagonal2));
