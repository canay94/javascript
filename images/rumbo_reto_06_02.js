// https://www.geeksforgeeks.org/javascript-math-sign-function/
// proportion of positive, negative, zeros values
arr = [-4, 3, -9, 0, 4, 1]
let positive = 0;
let negative = 0;
let zeros = 0;

function plusMinus(arr) {
    for(var i = 0; i < arr.length; i+=1)
    {
        if( Math.sign(arr[i] ) == 1){
            positive+=1

        }
        if( Math.sign(arr[i] ) == -1){
            negative+=1

        }
        if( Math.sign(arr[i] ) == 0){
            zeros+=1

        }
    }
}
plusMinus(arr)
console.log("Positive: ", positive)
console.log("Negative: ", negative)
console.log("Zeros: ", zeros)
