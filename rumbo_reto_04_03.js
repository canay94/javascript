// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

const arreglo1 = [1000000001,1000000002,1000000003,1000000004,1000000005];

function aVeryBigSum(ar) {
    // Write your code here
    let total = 0

    for(var i=0; i < ar.length; i++)
    {
        total = total + ar[i]
    }
    return total
}

const result = aVeryBigSum(arreglo1);
console.log(result + '\n');
