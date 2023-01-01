#! /usr/bin/env node
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourses(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourses(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("Abdullah", 22, "student1");
const student2 = new Student("Sheikh", 22, "student2");
const instructor1 = new Instructor("Sir Zia", 22, 100000);
const instructor2 = new Instructor("Sir Daniyal", 22, 100000);
const course1 = new Course("course1", "Metaverse");
const course2 = new Course("course2", "Blockchain");
const department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
console.log(department1);
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(course1.instructor);
export {};
//# sourceMappingURL=index.js.map