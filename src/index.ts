#! /usr/bin/env node

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }
}

class Student extends Person {

    rollNumber: string;
    courses: Course[] = [];

    constructor(name: string, age: number, rollNumber: string) {
        super(name, age);
        this.rollNumber = rollNumber
    }

    registerForCourses(course: Course) {
        this.courses.push(course)
    }
}

class Instructor extends Person {

   private salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary
    }

    assignCourses(course: Course) {
        this.courses.push(course);
    }
}

class Course {

    id: string;
    name: string;
    students: Student[] = [];
    instructor!: Instructor;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student: Student) {
        this.students.push(student)
        student.registerForCourses(this)
    }

    setInstructor(instructor: Instructor) {
        this.instructor = instructor;
        instructor.assignCourses(this);
    }
}

class Department {

    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course){
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


