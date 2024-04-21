//  Object Oriented Programing

// Constructor function and "new " Operator

//  we cannot use "arrow" function as constructor

//  Call "constructor" fucntion using "new" keyword

// 1 new {object} created empty initially
// 2 "this"  = {object}
// 3 object linked to prototype
// 4 function automatically return {object}


// Prototype

// Each object created by "constructor " function
// have an access to all "methods" present inside that "constructor" 
// prototype

// let Car = function(color,model){
//     // properties
//     this.carColor= color
//     this.carModel= model

    // Not a good practice
    // this.startEngine = function(){
    //     console.log("This is start engine method of car")
    // }
// }
// console.log(Car.prototype)
// Car.prototype.startEngine = function(){
//     console.log("This is start engine method")
// }

// console.log(Car.prototype)
//  We can also set "properties" to prototype
// Car.prototype.company = "Honda"
// console.log(Car.prototype)



// let instanceOfCar = new Car("black",1987);
// let instance = new Car("yellow",2830)
// console.log(instanceOfCar,instance)
// console.log(instanceOfCar.startEngine())
// instanceOfCar.startEngine()

// console.log(instance.__proto__)

// ********* 10.4 *********ES6 Classes

// ES6 Classes (They still implement prototypal inheritence
// behing the scene)

// class declaration

// class Car {
//     constructor(color,model){
//         this.color = color;
//         this.model= model;
//     }
//     startEngine(){
//         console.log("This is start engine method of Car Class")
//     }
// }

// let honda = new Car("Red", 2038);
// console.log(honda.__proto__.isPrototypeOf(honda))

// honda.startEngine()


// Important points 
// Classes are not hoisted
// Classes are also first clas citizens (Pass as an argument or return)
// Classes are executed in strict mode


// setter and getters

// Getters and setters allow you to define Object Accessors(Computed )

// We can alsoe use in class

// Class declaration

// class Car {
//     constructor(color,model){
//         this.color = color;
//         this.model= model;
//     }
//     startEngine(){
//         console.log("This is start engine method of Car class")

//     }

//     get __startEngine(){
//         console.log("This is start engine method usign get")
//     }
//     set changeColor(color){
//         console.log(this.color=color)
//     }
//     get desciption(){
//         return `Color of Bike is ${this.color} and its model is ${this.model}`
//     }
    
// }

// let honda = new Car("Red",2022) // accessing as function
// honda.startEngine()  // accessing as function
// honda.__startEngine; // accessing as property

// honda.changeColor = "blue";
// console.log(honda);
// console.log(honda.desciption)


// ********* 10.6 *********Static methods
// static method (method which is not present on 
// constructor property but "constructor" itself)
// class Car {
//     constructor(color,model){
//         this.color= color;
//         this.model = model;
//     }
//     startEngine(){
//         console.log("This is start engine method of Car class")
//     }
// }

// static method
// Car.breakMethod = function(){
//     console.log("This is break method of car")
// }

// let honda = new Car("Red", 2208)

// honda.startEngine()
// Car.breakMethod()

// ********* 10.7 *********Class inhertence(sub class)

// class declaration

// Parent Class

// class Car {
//     constructor(color,model){
//         this.color= color;
//         this.model = model;
//     }
//     startEnginer(){
//         console.log("This is start engine method")
//     }
// }

// child class

// class Bike extends Car {
//     // add some new properties and "method" as well
//     constructor(color,model,enginerCapacity){
//         super(color,model)
//         this.enginerCapacity = enginerCapacity
//     }
//     bikeMehtod(){
//         console.log("This is method of bike clas ")
//     }

// }


// let newBike = new Bike("Black",2023,"125CC")
// let bike2 = new Bike("orange",2432, "8r8we")
// console.log(newBike,bike2)

// let honda = new Car("red",3947);
// console.log(honda)


// ********* 10.9 *********chaining of methods

// Chaining of methods 

// classs declaration

// class bankAccount {
//     constructor(owner,pin){
//         this.owner= owner;
//         this.pin = pin;
//         this.movements = [];
//     }

//     getMovements(){
//         return this.getMovements
//     }

//     deposit(val){
//         this.movements.push(val)
//         return this;
//     }

//     withdraw(val){
//         this.deposit(-val)
//         return this;
//     }
// }

// let account = new bankAccount("Zack",3480);

// chian of methods
// account.deposit(45).withdraw(93).deposit(1000).withdraw(25);
// account.withdraw(65)

// console.log(account.getMovements())
// console.log(account)