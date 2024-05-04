//Objects in Javascript

//POJO Plain Old Javascript Object

//Object declaration

let person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello");
    }
}

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