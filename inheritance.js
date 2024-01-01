//Inheritance
class Person{    //perents class
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
talk(){
    console.log(`Hi im ${this.name}`);
}
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);//paternts class constructor is being called from Person
        this.marks=marks;
    }
}
class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}
let std1=new Student("ambi",23,67);
let t1= new Teacher("biba",34,"bio");