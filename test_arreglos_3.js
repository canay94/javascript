// https://es.javascript.info/array
const calificaciones = [10,8,10,9];
let sum = 0;

for (var calificacion of calificaciones){
    sum = sum + calificacion;
    console.log("Acumulate: ", sum);
}

average = sum / calificaciones.length;

console.log("Average ", average);

sum = 0;
for (var calificacion of calificaciones)
{
    sum += calificacion;
    console.log("Acumulate: ", sum);
}

average = sum / calificaciones.length;

console.log("Average ", average);
