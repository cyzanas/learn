const prompt=require("readline-sync")
class Student{
    constructor(name,age){
        this.name=name
        this.age=age

    }
    hello(){
        console.log(`Hey ${this.name}`)
    }
}
let name=prompt.question("Enter your Name: ")
let age=prompt.question("Age: ")
let s1= new Student(name,age);
s1.hello()
