// https://www.geeksforgeeks.org/javascript-math-sign-function/
// proportion of positive, negative, zeros values
arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    for(var i = 0; i < arr.length; i+=1)
    {
        console.log("Number: ", arr[i])
        if( Math.sign(arr[i] ) == 1){
            positive+=1
            console.log("Positive: ", positive)
        }
        if( Math.sign(arr[i] ) == -1){
            negative+=1
            console.log("Negative: ", negative)
        }
    }
}
plusMinus(arr)
