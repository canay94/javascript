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
    solution[0] = count_a;
    solution[1] = count_b;
    solution[2] = count_c;

    return solution;
}
var alice=[17,28,30];
var bob=[99,16,8];
var solution=[];

var respuesta = compareTriplets_casi(alice, bob);
console.log(respuesta);
