//classes are blueprint of an object

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static species = "Homo sapiens";

    static thisIsAMethod(){
        console.log("this is a static method");
    }
    greet() {
        console.log("Hello");
    }
}
//properties which are tied to the class itself is known as static properties and these are not tied to the object instances

//static methods can be called without creating an object and these are called on the class itself and is not available on the instances of the class

//this generally refers to the current object but in static method it refers to the class itself

// we can instantiate an object by using the keyword new

let person = new Person("John", 30);

//we can use insatanceof to check if an object is an instance of a class

//any method named constructor will be called at the time of object creation

//function placed in a class are called methods (instance methods) they have access to all properties of the object with this keyword 

class Person2 extends Person {
    constructor(name, age,city){
        super(name,age);
        this.city=city
    }
    describe() {
        console.log(this.name + " is " + this.age + " years old");
    }
}

// we can use extends to inherit methods from another class
// while using the constructor in the child(derived) class before using the this keyword use super to call the constructor of the parent class
//super keyword is used to call the constructor of the parent class

//private class feild is not available outside of the class and is only accessible within the class
//we can use # to declare a private field
//we can use getters and setter to access the rpivate feild

//private methods are not available outside of the class

//when you call a function on a class then the this keyword is mapped to the isntance of the class but if the function is isolated and called in the global scope then the value of this will be undefined

//call method then we use call(this) we are calling a function with a specified this keyword eg: if i have a method in an object called One and i want to use the method in another object called Two then i can call the method using OneMethod.call(Two) here i am passing the this keyword of Two as this