// Que-
// first way
var ar = ["Naveen", "Chetna", "Poonam", "Tanu"];
console.log(ar);

var newArray = [];

for (let i of ar) {
    if("aeiou".includes(i[i.length - 1])){
        newArray.push(i);
    } 
}
console.log(newArray);

// second way
var usingFilter = ar.filter(i => "aeiou".includes(i[i.length - 1]));
console.log(usingFilter);


// Que-
var ar = [10, 20, 30, 40, 50];
for (let i of ar)
{
    console.log(i+5);
}

// Que-
var ar = ["j", "a", "v", "a"];
console.log(ar.join(""));

// Que
var marks = [25, 35, 81, 92, 47, 27, 58];
console.log(marks);

//  first way
var newArray = [];
for (let i of marks){
    if(i >= 35){
        newArray.push(i);
    }
}
console.log(newArray);

// second way

var newArray = marks.filter(checkCond);

function checkCond(i){
    return i >= 35;
}

console.log(newArray);

// third way

var newArray = marks.filter(i => i >= 35);

console.log(newArray);

// Que-
// first way
var ar = [10, 20, 30, 40, 50];
console.log(ar);

var newArray = [];

for(let i of ar){
    newArray.push(i + 5);
}
console.log(newArray);

// second way
console.log(ar.map(i => i + 5));


// Que
var ar = [10, 20, 25, 35, 40, 80];
console.log(ar);

console.log(ar.filter(val => val % 2 == 0));
console.log(ar.filter(val => val % 2 == 1));

// Que-

// first way
var ar = [10, 20, 30, 40, 50];
console.log(ar);

let sum = 0;
for(let i of ar){
    sum += i;
}
console.log(sum);

// second way
var ar = [10, 20, 30, 40, 50];
console.log(
    ar.reduce((sum, i) => {
        console.log("sum:", sum, "i:", i);
        return sum + i;
    }, 0)
);