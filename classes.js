//classes are blueprint of an object

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello");
    }
}

// we can instantiate an object by using the keyword new

let person = new Person("John", 30);

//we can use insatanceof to check if an object is an instance of a class

//any method named constructor will be called at the time of object creation

//function placed in a class are called methods (instance methods) they have access to all properties of the object with this keyword 