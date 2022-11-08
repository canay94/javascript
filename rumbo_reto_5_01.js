// https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript

let items = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];


let diagonal1 = items[0][0] + items[1][1] + items[2][2];
let diagonal2 = items[0][2] + items[1][1] + items[2][0];
let resultado = Math.abs(diagonal1 - diagonal2);

console.log("Diagonal 1: ", diagonal1);
console.log("diagonal 2: ", diagonal2);
console.log("Resultado;  ", resultado);


