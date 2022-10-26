var alice=[17,28,30];
var bob=[99,16,8];
//var solution=[17+99, 28+16, 30+8]
var solution=[];

// function read 2 arrays, and return the sum in other array solution

function array_total(a, b)
{
    for(var i = 0; i < a.length; i++)
    {
        console.log(a[i]);
        console.log(b[i]);
    }

}

array_total(alice, bob);

function array_total_0(a, b)
{
    for(var i = 0; i < a.length; i++)
    {
        console.log("Elemento de Alice ", a[i]);
        console.log("Elemento de Bob ", b[i]);
    }

}
array_total_0(alice, bob);


function array_total_1(a, b){
    for(var i = 0; i < a.length; i++)
    {
        solution[i] = a[i] + b[i];
    }

}


console.log(solution);
array_total_1(alice, bob);
console.log(solution);

for(var i = 0; i < solution.length; i++)
    {
        console.log("The value of position ", i, "is ", solution[i]);
    }
