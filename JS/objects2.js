// ! =============== METHODS ==================

let obj1 = {
    sname: "Prashant",
    course: "Java ",
    age: 24,
};

console.log(obj1);
console.log(Object.keys(obj1));  // Returns Keys of an object
console.log(Object.values(obj1)); // Return values of an object
console.log(Object.entries(obj1)); // Returns Keys and values of an object
console.log(obj1.hasOwnProperty("sname")); // true
console.log(obj1.hasOwnProperty("empName")); // false
// hasOwnProperty() will check the property has present in an object or not.
// It will always return a boolean value.
// Syntax: ObjName.hasOwnProperty("KeyName");

let obj2 = {
    sname: "Vishal",
    course: "React Js",
};

let obj3 = {
    institute: "Qspiders",
};

console.log(obj1);
console.log(obj2);
console.log(obj3);
let mergeObj = Object.assign({}, obj1, obj2, obj3);
console.log(mergeObj);
console.log(obj1);
console.log(obj2);
console.log(obj3);
