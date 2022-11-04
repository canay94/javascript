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
    return 0;
}
console.log(compareTriplets_casi(alice, bob));
