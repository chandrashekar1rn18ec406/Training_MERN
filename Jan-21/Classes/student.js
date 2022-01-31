// creat a class student 
class student{
    constructor (name, age)
{
    this.name = name;
    this.age = age;
}
}
const studentClass = new student('John', 19);
console.log(studentClass.name,',',studentClass.age,'years old');


// Write a program to print the area of Reactangle by create a class name "Area"
class Area{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
    get setDim(){
        return this.getArea();
    }
    getArea(){
        return this.length * this.breadth;
    }
}
const rectAngle = new Area (10,10);
console.log(rectAngle.setDim);


// Create a Attendance class static methods 

class Attendance{
    static  dateNow(){
        var res = new Date().getDate()
        return res;
        
    }
}
console.log(Attendance.dateNow());