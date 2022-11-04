var alice=[17,28,30];
var bob=[99,16,8];
var solution=[];
// function read 2 arrays, and return the sum in other array solution
function compareTriplets_casi(a, b) {
    var count_a = 0;
    var count_b = 0;
    var count_c = 0;

    for(var i = 0; i < a.length; i++ )
    {
        if( a[i] > b[i] )
        { count_a++;  }

        if( a[i] < b[i] )
        { count_b++; }

        if( a[i] == b[i] )
        { count_c++;}
    }
    console.log("Puntos de Alice: ", count_a);
    console.log("Puntos de Bob: ", count_b);
    console.log("Puntos empate: ", count_c);
    solution[0] = 100;
    solution[1] = 200;
    solution[2] = 300;
    console.log(solution[0]);
    console.log(solution[1]);
    console.log(solution[2]);
    return solution;
}

var respuesta = compareTriplets_casi(alice, bob);
console.log(respuesta);
