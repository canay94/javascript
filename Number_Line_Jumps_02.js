// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */
function kangaroo(x1, v1, x2, v2)
 {
    // Write your code here
    // 0 3 4 2
    // k1 = 3,6,9,12
    // k2 = 6,8,10,12
    let dist1 = 0;
    let dist2 = 0;
    let n = 0;
    for(i=0; i<10; i+=1)
    {
        n++;
        console.log("Brinco(s): ", n);

        // kangaroos 1
        dist1 = x1 + v1;
        x1 = dist1
        console.log("Distancia Kangaroo 1: ", dist1);

        // kangaroos 2
        dist2 = x2 + v2;
        console.log("Distancia Kangaroo 2: ", dist2);
        x2 = dist2;

        if(dist1 == dist2)
        {
            console.log("YES")
        }
        // falta cuando es un NO
    }

}
kangaroo(0,3,4,2)
