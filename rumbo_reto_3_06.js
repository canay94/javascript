var alice=[17,28,30];
var bob=[99,3,30];
var solution=[];

// function read 2 arrays, and return the sum in other array solution
function compareTriplets_casi(a, b) {

    for(var i=0; i < a.length; i++ )
    {
    console.log(a[i]);
    console.log(b[i]);
    // If a[i] > b[i], then Alice is awarded 1 point.
    if( a[i] > b[i]) { console.log("Punto para Alice "); }
    // If a[i] < b[i], then Bob is awarded 1 point.
    if( a[i] < b[i]) { console.log("Punto para Bob "); }
    // If a[i] = b[i], then neither person receives a point.
    if( a[i] == b[i]) { console.log("No damos punto a nadie "); }
    }

    return 0;
}
console.log(compareTriplets_casi(alice, bob));
