// ! ========= Creation of an object ===========

let obj = {
    sname: "Prashant",
    course: "Java",
    fee: 30,
    47: "fav Biker",
};
console.log(obj);

// ! ========= Accessing ===========

// ? DOT NOTATION:

console.log(obj.sname);
console.log(obj.course);
console.log(obj.fee);
// console.log(obj.47); //! Returns error

// ? BRACKET NOTATION:
console.log(obj);
console.log(obj["sname"]);
console.log(obj["course"]);
console.log(obj["fee"]);
console.log(obj[47]);

// ? 2nd Way
let obj2 = new Object();
console.log(obj2);

// ? adding
obj2.name = "Gupta";
obj2.course = "react Js";
obj2.age = 20;
console.log(obj2);

// ? modification
obj2.name = "Atul";
obj2.course = "Java Full Stack";
console.log(obj2);

// ? deletion
delete obj2.age;
console.log(obj2);

