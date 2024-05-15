//Objects in Javascript

//POJO Plain Old Javascript Object

//Object declaration

let person = {
    _name: "John",
    age: 30,
    greet: function () {
        console.log("Hello");
    },

    get getName() {
        return this._name;
    },

    set setName(name) {
        this._name = name;
    }
}

//underscore is just an convertion to keep the property private in javascript we can use setters to update its value

//getter acts like a property but has logic like a method

//another way ti declare an object

let person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.greet = function () {
    console.log("Hello");
};

/*All keys are stringified automatically*/

//Accessing the values in an object

console.log(person.name);
console.log(person["name"]);

//Adding new properties to an object

person.address = "123 Main St";
person["address"] = "123 Main St";

//getters are used to retrive a property value

//when a function is called inside the object then the this keyword refers to the object but if the function is isolated and called in the global scope then the value of this will be window

//we can bind arguments to a function with the function.bind(null,arguments)
//if we want to access a method outside of the object and we want to pass another object as an argument we can use the function.bind(this)

//bind() method is used to create a new function that has a specified this value and, optionally, a fixed set of arguments. This method allows you to permanently set the value of this for any function, regardless of how it's called