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

    solution[0] = 100;
    solution[1] = 200;
    solution[2] = 300;

    return solution;
}

var alice=[17,28,30];
var bob=[99,16,8];
var solution=[];

var respuesta = compareTriplets_casi(alice, bob);
console.log(respuesta);
