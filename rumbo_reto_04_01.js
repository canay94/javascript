// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

const arreglo1 = [1001,1002,1003,1004,1005];

function aVeryBigSum(ar) {
    // Write your code here
    let total = 0
    for(var i=0; i < ar.length; i++)
    {
        total = total + ar[i]
        console.log("Valor ",ar[i])
        console.log("Total ", total)
    }

}

aVeryBigSum(arreglo1)
