let items = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16 ]
];

let diagonal1 = 0;

// find first diagonal
for (var r = 0; r < items.length; r++)
{
    for(var c = 0; c < items.length; c++)
    {
    console.log("Elements array: ", "row: ",r, "column: ",c, "value : ",items[r][c]);
    if ( r == c)
    {
        console.log("Element of diagonal ", items[r][c]);
        diagonal1 = diagonal1 + items[r][c];
        console.log("Acum of diagonal 1: ", diagonal1);
    }
    }
}
