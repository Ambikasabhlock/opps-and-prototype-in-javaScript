// PROTOTYPE IN OOPS

// let arr1=[1,2,3,4];
// let arr2=[1,2,3,4];

// arr1.sayhello =  ()=>{
//     console.log("im an array");
// };

// arr2.sayhello =  ()=>{
//     console.log("im an array");
// };


// FACTORY FUNCTION 

// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age: age,
//         talk (){
//             console.log(`welcome to globe ${this.name}`);
//         }
//     }
//     return person; //let p1=PersonMaker("ana",25); write this line in console
// }

//SECOND METHODE BETTER THAN ABOVE-- THIS IS COSTRUCTOR
// Constructor does not return any thing

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//    // console.log(`welcome ${name}`);
// Person.prototype.talk= function(){
//     console.log(`Hi my name is ${this.name}`);
//     }
    
// }
// let p1= new Person("herry",25);
// let p2= new Person("bia",27);


// THIRD AND BEST METHOD WITH CLASS KEYWORD
class Person{
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi my name is ${this.name}`);
    };
};
 let p1= new Person("herry",25);
 let p2= new Person("bia",27);    


















