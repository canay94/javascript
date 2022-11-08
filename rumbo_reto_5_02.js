// https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript

let items = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];
console.log("Length of array: ", items.length);

for(var r = 0; r < items.length; r++)
{
console.log("Value of column 0: ", items[r][0]);
}

for(var r = 0; r < items.length; r++)
{
    for(var c = 0; c < items.length; c++)
    {
        console.log("Elements array: ", items[r][c]);
    }
}


for(var r = 0; r < items.length; r++)
{
    for(var c = 0; c < items.length; c++)
    {
    console.log("Elements array: ", "row: ",r, "column: ",c, "value : ",items[r][c]);
    }
}


