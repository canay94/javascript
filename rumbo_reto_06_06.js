// Plus Minus
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

    let p_positive = positive / size;
    let p_negative = negative / size;
    let p_zeros = zeros / size;

    console.log(p_positive.toFixed(6));
    console.log(p_negative.toFixed(6));
    console.log(p_zeros.toFixed(6));
}
plusMinus(arr)

