class Student{
    constructor(sname , rollNo , course) {
        this.sname = sname;
        this.rollNo = rollNo;
        this.course = course;
    }
};

console.log(Student);

let s1 = new Student("prashant", 123, "java");
let s2 = new Student("sweta", 321, "python");

console.log(s1);
console.log(s2);