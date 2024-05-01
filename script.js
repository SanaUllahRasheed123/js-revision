// ******************* 6.1 Submit Form ***********

// // form events  (submit form)

// let form = document.querySelector('.sign-up-form')
// // let email = document.querySelector('#email')
// // let password = document.querySelector('#password')
// // console.log(form)
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     // console.log(form.userEmail.value, form.userPassword.value)
//     // console.log(form.email.value, form.password.value)
//     // console.log(email.value , password.value)
//     // console.log("Submitted the form successfully")

// })

// console.log("fdsjfkj")

// ******************* 6.2 Regular Expression ***********

// Regular Expression (Regex) for pattern matching

// It is a pattern of Characters used to do pattern mathching
// Or we can say for "Data Validation"

//Implementation of password validation

//Lenght At least = 8
// At least Contain one Upper Case letter
// At least contain one Lower Case letter
// At least contain one digit 0-9

// let form= document.querySelector('.sign-up-form');
// let email = document.querySelector('#email')
// let password = document.querySelector('#password')
// let passwordPattern = "^(?=.*?[A-Z])(?=.*[a-z])(?=.*?[0-9].{8,}$)"

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let passwordValue = password.value
//     console.log(passwordValue)
//     let result = passwordValue.match(passwordPattern);
//     console.log(result)

//     if(result){
//         console.log("Your Paaword is strong")
//     }else{
//         console.log("Try Again")
//     }
// })

// Regular Expression part 2 (Regex)

// Basic Form Validation using Regex

// username can only consist of A-Z or a-z

// Length of username between 6 to 12

// let form = document.querySelector('.sign-up-form');
// let user = document.querySelector('#name')
// let password = document.querySelector('#password')
// let userNamePattern = /^[A-Za-z]{6,12}/

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let username = user.value;
//     // "test" method return boolean values
//     let result = userNamePattern.test(username)
//     if(result == true){
//         console.log("User is valid")
//     }
//     else{
//         console.log("Username is invalid try Again ")
//     }
// })

// Live Feedback

// user.addEventListener("keyup",(e)=>{
//     if(userNamePattern.test(e.target.value)){
//         // console.log("Passed")
//         user.setAttribute('class','success')
//     }
//     else{
//         // console.log(("Failed"))
//         user.setAttribute('class','error')
//     }
// })

// OOP
// Prototype
//
// Each object created by "Constructor" function have an access
// to all 'methods' present inside that 'constructor' prototype

// let Car = function (color, model) {
// console.log(this);
// prperties
// this.color = color;
// this.model = model;

// this.login = function () {
//   console.log("this is method function");
// };
// };

// METHOD

// Car.prototype.startEngine = function () {
//   console.log(`This is a start engine method`);
// };

// we can also set "properties" to prototype
// Car.prototype.company = "Honda";

// console.log(Car.prototype);

// let instanceOfCar = new Car("black", 2939);
// let instanceOfCar1 = new Car("Yello", 2019);
// let example2;

// console.log(instanceOfCar, instanceOfCar1);
// console.log(instanceOfCar1 instanceof Car);
// console.log(instanceOfCar.startEngine());

// console.log(instanceOfCar.__proto__);

// if we don't have a Car then with the instance of contructor way would be like this below
// console.log(instanceOfCar.__proto__.isPrototypeOf(instanceOfCar));
// It is same
// If we have a constructor then the way would be like this
// console.log(Car.prototype);
// console.log(instanceOfCar);

// Getters and setters allow you to define object Accessros (Computed Properties)
// We can also use in class

// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("This is start engine method of Car class");
//   }
//   get _startEngine() {
//     console.log("This is start engine method using get");
//   }

//   get description() {
//     return `Color of Bike is ${this.color} and its model is ${this.model}`;
//   }
//   set changeColor(color) {
//     console.log((this.color = color));
//   }
// }

// let honda = new Car("Red", 2019);
// let suzuki = new Car("Black", 2020);
// console.log(honda, suzuki.__proto__);

// honda.startEngine(); //accessing as function
// honda._startEngine(); // accessing as property // not towrite like this one write like below one
// honda._startEngine; // accessing as property

// honda.changeColor("yello"); // not to write like this, write like this below one

// honda.changeColor = "blue";
// console.log(honda);

// console.log(honda.description);

// static methods(methods which is not present on constructor)
// "prototype" property but "constructor" itself

// can never inherit to all objects
// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("This is start engine method of Car class");
//   }
// }

// Car.breakMethod = function () {
//   console.log("this is static method of car");
// };

// let honda = new Car("Red", 3932);
// // console.log(honda);
// honda.startEngine();

// Car.breakMethod();

// console.log(Array.from(12.54));

// 10.7 *************Inhertence*******

// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("This is start engine method of Car class");
//   }
// }

// class Bike extends Car {
//   // add some new properties and "methods" as well
//   constructor(color, model, engineCapacity) {
//     super(color, model);
//     this.engineCapacity = engineCapacity;
//   }
//   bikeMethod() {
//     console.log("This is Method of Bike class");
//   }
// }

// let newBike = new Bike("Black", 2023, "12C34");
// let bike2 = new Bike("OrangeWhite", 2384, "4390C3");

// console.log(newBike);

// let instance = new Car("yello", 2939);

// console.log(instance);

// let honda = new Car("red")\

// 10.7 Prototypical Inheritance(using constructor function)

// parent class
// let Car = function (color, model) {
//   this.color = color;
//   this.model = model;
// };
// Car.prototype.startEngine = function () {
//   console.log("This is start Engine method");
// };

// let honda = new Car("Blue", 2021);
// console.log(honda);

// child clas

// let Bike = function (color, model, engineCapacity) {
//   Car.call(this, color, model);
//   this.engineCapacity = engineCapacity;
// };
// inherited from parent class
// Bike.prototype = Object.create(Car.prototype);

// // Not inherited
// Bike.prototype.ownBike = function () {
//   console.log("this is own Bike class methods");
// };
// let bike1 = new Bike("Green", 2019, "200CC");
// let bike2 = new Bike("Narangi", 3290, 3298);
// console.log(bike1, bike2);

// 10.8  *******Chaining of Methods******

// Chaining methods

// class declaration

// class bankAccount {
//   constructor(owner, pin) {
//     this.owner = owner;
//     this.pin = pin;
//     this.movements = [];
//   }

//   getMovements() {
//     return this.movements;
//   }
//   deposit(val) {
//     this.movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
// }

// let account = new bankAccount("Zack", 3838);

// account.deposit(434).withdraw(4223).deposit(43987);
// // account.withdraw(65);

// console.log(account.getMovements());
// console.log(account);

// 11.1  *******Async Code******

// console.log("This is clg satatement");
// setTimeout(() => {
//   console.log("after 3 seconds");
// }, 3000);

// 11.2  *******Makin HTTP Request (Example)******

// 0 UNSENT client has been created. open() not called
// 1 OPENED  open() has been called
// 2 HEADERS_RECEIVED send() has been called, and headers
// 3 LOADING downloading; responseText holds partial data;
// 4 DONE - The operation is completed // interested here

// HTTP STATUS CODE

// Informational response (100-199)
// Successful response (200-299)
// Redirectional messages (300-399)
// Client error responses (400-499)
// Server error responses (500-599)

// call back
// call back hell
// chain of todos

// let todos = ((resource) => {
//   return request = new XMLHttpRequest();

//   console.log(request), request.readyState;

//   request.addEventListener("readystatechange", () => {
//     //   console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status == 200) {
//       // console.log(request.responseText);
//       let data = JSON.parse(request.responseText);
//       resolve(data)
//       // callback(undefined, data); // regular js objects
//     } else if (request.readyState === 4) {
//       // console.log("Data could not fetch");
//       // callback("Data could not be fetched", undefined);
//       reject("Error in fetching")
//     }
//   });

//   // set up the request

//   // request.open("Get", "https://jsonplaceholder.typicode.com/todos");
//   request.open("Get", resource);

//   // sending the request

//   request.send();
// };

// todos

// todos("data.json", (error, Data) => {
//   // console.log("callback function is fired");
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(Data);
//   }
//   todos("mario.json", (error, Data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(Data);
//     }
//     todos("lurie.json", (error, Data) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(Data);
//       }
//     });
//   });
// });

// Primises General Exaple

// let getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("Some data");
//     reject("some error");
//   });
// };

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// todos = ((resources)) => {
//   let request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status == 200) {
//       let data = JSON.parse(request.responseText);
//       resolve(data);
//     } else if (request.readyState === 4) {
//       reject("Error in Fetching the data");
//     }
//   });

// setting up the request
//   request.open("Get", resources);

//   // sending the request
//   request.send();

// };

// todos("data.json")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch API

fetch("data.json")
  .then((response) => {
    console.log("Promise resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
