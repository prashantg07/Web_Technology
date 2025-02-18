// var ar = ["Prashant", "Roshan", "Developer", "Abhishek", "Sweta"];

// console.log(ar);
// console.log(ar.sort());

// var ar = [10, 200, 50, 2, 88, 9];
// console.log(ar);
// console.log(ar.sort());
// console.log(ar.sort(userSortNumber));

// function userSortNumber(a, b) {
//     return b - a;
// }

// console.log(ar.sort((a,b) => a - b));
// console.log(ar.sort((a,b) => b - a));

// ! First Task

var ar = ["Naveen", "Chetna", "Poonam", "Tannu"];

console.log(ar);

var newArray = [];

for (let i of ar) {

    if ("aeiou".includes(i[i.length - 1])) {

        newArray.push(i);

    }

}

console.log(newArray);

var usingFilter = ar.filter(i => "aeiou".includes(i[i.length - 1]));

console.log(usingFilter);


// ! Task 2

var marks = [25, 35, 81, 92, 27, 47, 58];
// console.log(marks);


//? first way

// var newArray = [];

// for (let i of marks) {

//     if (i >= 35) {

//         newArray.push(i);

//     }

// }
// console.log(newArray);


// ? second way

// var newArray = marks.filter(checkCond);

// function checkCond(i) {

//     return i >= 35;
// }

// console.log(newArray)


//? third way

// console.log(marks);

// var newArray = marks.filter(

//     (elements, ind) => console.log(elements,

//         ind)

// );

// console.log(newArray);


// ! Third Task

// var ar = [10, 20, 25, 35, 48, 80];

// console.log(ar);

// console.log(ar.filter(val => val % 2 == 0));

// console.log(ar.filter(val => val % 2 == 1));

// ! Fourth task

// var ar = [10, 20, 30, 40, 50];

// console.log(ar);

//? first way

// var newArray = [];

// for (let i of ar) {

//     newArray.push(i + 5);

// }

// console.log(newArray);

//? second way

// console.log(ar.map(i => i + 5));

//! fifth Task

var ar = ["J", "A", "V", "A"];

console.log(ar);

var s = "";

for (let i of ar) {

    s = s + i;

}

console.log(s);

console.log(ar.reduce((container, val) => container + val));

var ar = [10, 20, 30, 40, 50];

console.log(

    ar.reduce((sum, i) => {

        console.log("sum:", sum, "i:", i);

        return sum + i;

    }, 0)

);


