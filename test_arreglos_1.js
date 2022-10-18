// https://www.programiz.com/javascript/array

// create array
const array1 = ["eat", "sleep"];
console.log(array1);

const array2 = new Array("eat", "sleep");
console.log(array2);


let dailyActivities = ['eat', 'sleep'];
console.log("This is the first array ", dailyActivities);
console.log("Size of array ", dailyActivities.length);
// add an element at the end
dailyActivities.push('exercise');

console.log("Add element exercise");
console.log("The array with new element ", dailyActivities);
console.log("Size of array ", dailyActivities.length);
//  ['eat', 'sleep', 'exercise']

// add element at first position
dailyActivities.unshift("read");
console.log("Add element at first position ", dailyActivities);
console.log("Size of array ", dailyActivities.length);

dailyActivities.unshift("rest");
console.log("Add element at first position ", dailyActivities);
console.log("Size of array ", dailyActivities.length);

// delete the last element
dailyActivities.pop();
console.log("Remove the last element", dailyActivities);
console.log("Size of array ", dailyActivities.length);

// delete the first element
dailyActivities.shift();
console.log("Remove the first element ", dailyActivities);
console.log("Size of array ", dailyActivities.length);


dailyActivities.sort();
console.log("Array order ", dailyActivities);

for(var i = 0; i < dailyActivities.length; i++)
{
    console.log("Elements of array ", dailyActivities[i]);
}


