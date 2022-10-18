

function simpleArraySum(ar)
{
    let total = 0;
    for(let i = 0; i < ar.length; i++)
    {
    total += ar[i];
    console.log(total);
    }
    return(total);
}

ar = [10,20,30];

//const result = simpleArraySum(ar);
var t = simpleArraySum(ar);
console.log(t);


