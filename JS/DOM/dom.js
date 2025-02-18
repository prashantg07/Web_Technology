// ! based on name attribute
// It will return an array of matching elements
let emp = document.getElementsByName("empName");
console.log(emp);
emp[0].value = "Prashant";
emp[1].value = "Vishal";
emp[2].value = "Akash";

let user = document.getElementsByName("userName");

user[0].value = "Frontend Developer";
user[1].value = "Developer Prashant";

console.log(user);

// ! Query Selector
// It will target only the first matching element.
// ? id
let qsID = document.querySelector("#demoID");
console.log(qsID);
qsID.innerHTML = "I am targetted by QS";

// ? class
let qsClass = document.querySelector(".demoClass");
console.log(qsClass);
qsClass.innerHTML = "I am targetted by QS";

// ? tagname
let sec = document.querySelector("section");
console.log(sec);

// ! Query Selector All
// It will target all the matching elements.
// It will return an array, so indexing is required.
// ? id
let qsaID = document.querySelectorAll("#demoID");
console.log(qsaID);

// ? class
let qsaClass = document.querySelectorAll(".demoClass");
console.log(qsaClass);

// ? tagname

