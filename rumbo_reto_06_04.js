// Plus Minus
// https://www.geeksforgeeks.org/javascript-math-sign-function/
// proportion of positive, negative, zeros values
arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    let size = arr.length;

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
    console.log("Positive: ", positive)
    console.log("Negative: ", negative)
    console.log("Zeros: ", zeros)
    console.log("Size: ", size)
    let p_positive = positive / size;
    let p_negative = negative / size;
    let p_zeros = zeros / size;
    console.log("P positive: ", p_positive)
    console.log("P negative ", p_negative)
    console.log("P zeros ", p_zeros)
}
plusMinus(arr)

