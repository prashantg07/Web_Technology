// //? case 1

// let prashant = {
//     fname: "Prashant",
//     lname: "The web Developer",
//     printName: function () {
//         console.log((this.fname + " ") + this.lname, "how are you?");
//     },
// };

// prashant.printName();

// let Vishal = {
//     fname: "Vishal",
//     lname: "Anand",
// };

// prashant.printName.call(Vishal);

// //? case 2

// function printName() {
//     console.log((this.fname + " ") + this.lname, "how are you?");
// }

// let prashant = {
//     fname: "Prashant",
//     lname: "The web Developer",
// };
// printName.call(prashant);

// let Vishal = {
//     fname: "Vishal",
//     lname: "Anand",
// };
// printName.call(Vishal);

// //? case 3 

// function printName() {
//     console.log(this);
//     console.log(this.fname + " " + this.lname, " ", this.rollNo);
// }

// let prashant = {
//     fname: "Prashant",
//     lname: "The web Developer",
// };
// printName.call(prashant);

// let Vishal = {
//     fname: "Vishal",
//     lname: "Anand",
//     rollNo: 21,
// };
// printName.call(Vishal);

//? case 4
let prashant = {
    fname: "Prashant",
    lname: "The web Developer",
    printName: function (rollNo, course) {
        console.log(this.fname + " " + this.lname, " ", rollNo, " ", course);
    },
};
prashant.printName.call(prashant, 420, "java");
prashant.printName.apply(prashant, [420, "java"]);
prashant.printName.bind(prashant, 420, "java")();

let vishal = {
    fname: "Vishal",
    lname: "Anand",
    rollNo: 21,
};
prashant.printName.call(vishal, 124, "Python");
prashant.printName.apply(vishal, [124, "Python"]);