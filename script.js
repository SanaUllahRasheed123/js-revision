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

// fetch("data.json")
//   .then((response) => {
//     console.log("Promise resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async and await fetch(thorowring custom error)

// let getTodos = async () => {
//   let response = await fetch("data.json");
//   // custoem error
//   if (response.status !== 200) {
//     throw new Error("Custom:Error in fetching the data");
//   }
//   let data = await response.json();
//   return data;
// };

// getTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// let suppose we want to get more than one data

// let getTodos = async () => {
//   let response = await fetch("data.json");
//   let data = await response.json();

//   let response2 = await fetch("mario.json");
//   let marioData = await response2.json();

// returning the data from async await function
// return data;
// return marioData;
//   console.log(data, marioData);
// };

// we don't need to chain anything as previously
// getTodos();
// .then((data) => {
//   // promise using then method
//   console.log(data);
// })
// .catch((error) => {
//   // this is how we handle rejected promise
//   // using catch method
//   console.log(error);
// });

// Error handling usign Try Catch Method

// let getTodos = async () => {
//   try {
//     let response = await fetch("data.jsdon");
//     let data = await response.json();

//     let response2 = await fetch("mario.json");
//     let data2 = await response2.json();

//     console.log(data, data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// getTodos();

// try {
//   let x = 4;
//   const y = 6;
//   y = x;
// } catch (error) {
//   console.log(error.message);
// }

// Destructuring of Arrays

// let hotel = {
//   name: "hottell",
//   name: "street no xyz Delhi",
//   categories: ["Chinese", "Italian", "English"],
// };

// simple example without

// let items = [2, 3, 4, 5];

// let x = items[0];
// let y = items[1];
// let z = items[2];
// let p = items[3];

// console.log(x, y, z, p);

// with destructuring
// let [x, y, z, p] = items;
// console.log(x, y, z, p);

// let [first, , third] = hotel.categories;

// console.log(first, third);

// switch the category(usecase)

// without destructuring

// let [main, secondary] = hotel.categories;

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];

// console.log(main, secondary);

// let nums = [2, 3, [4, 6]];
// let [a, , b] = nums;
// let [a, , [b, c]] = nums;
// console.log(a, b, c);

// Destructuring of "Objects"

// let hotel = {
//   name: "hotelzyu",
//   Location: "street no xyz Delhi",
//   categories: ["Chinsese", "Italia", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   openingHours: {
//     sunday: { open: "09:00AM", close: "11:00PM" },
//     monday: { open: "10:00AM", close: "10:00PM" },
//   },
// };

// let { name, Location, mainMenu } = hotel;
// console.log(name, Location, mainMenu);

// set the customize name to objects property
// let { name: hotelName, Location: hotelLocation, mainMenu: Menu } = hotel;
// console.log(hotelName, hotelLocation, Menu);

// let { name: hotelName, Menu = [], categories = [] } = hotel;
// console.log(name, Menu, categories);

// Destructuring Nested Objects

// let { name, openingHours } = hotel;
// console.log(name, openingHours);

// let {
//   sunday: { open, close },
// } = openingHours;
// console.log(open, close);

// let hotel = {
//   name: "hotelzyu",
//   Location: "street no xyz Delhi",
//   categories: ["Chinsese", "Italia", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   openingHours: {
//     sunday: { open: "09:00AM", close: "11:00PM" },
//     monday: { open: "10:00AM", close: "10:00PM" },
//   },
// };

// let nums = [2, 3, 4, 5];
// console.log(...nums);

// usecase
// let newArray = [9, 29, ...nums];
// console.log(newArray, nums);

// let updateMainMenu = [...hotel.mainMenu, "FoodD", "FoodE"];
// console.log(updateMainMenu);

// deep copy

// let copyArray = updateMainMenu; //reference
// copyArray[1] = "new Food";

// create shallow copy using spread operator
// console.log(copyArray);
// console.log(updateMainMenu);

// we can also use sprea operator on strings

// let passion = "Programming";
// console.log(...passion);

// same as

// console.log("p", "r", "o", "g", "r", "a", "m", "m", "i", "n", "g");

// let hotel = {
//   name: "hotelzyu",
//   Location: "street no xyz Delhi",
//   categories: ["Chinsese", "Italia", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   openingHours: {
//     sunday: { open: "09:00AM", close: "11:00PM" },
//     monday: { open: "10:00AM", close: "10:00PM" },
//   },
// };

// spread(...)operator it is present in the RHS of =

// let nums = [2, 3, 4, 5, 6];
// let newArray = [1, ...nums];
// console.log(newArray);

// Syntax of REST(...) Get elements and packed them into array
// use in LHS

// let [a, ...others] = nums;
// console.log(others);

// short circuiting
// let hotel = {
//   name: "hotelzyu",
//   Location: "street no xyz Delhi",
//   categories: ["Chinsese", "Italia", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   openingHours: {
//     sunday: { open: "09:00AM", close: "11:00PM" },
//     monday: { open: "10:00AM", close: "10:00PM" },
//   },
// };

// Fasly value => 0,false, null, undefined, '' (empty string)

// AND (&&) operator (Output true if all input true)

// let result = "programmers" && "coders";
// console.log(result);

// OR(||) operator (Output true if any given input true)

// let result = "programmers" || "coders";
// console.log(result);

//  As || operator find first output true. It simply return that
// true value and does not move towards next operands

// Nullish coalesing operator (??) only 'null' and 'undefined' are false value

// let numGuests = 0;
// let result = numGuests || 10;
// console.log(result);

// let result2 = numGuests ?? 10;
// console.log(result2); // 0 is not nullish value

// for of loop

// let hotel = {
//   name: "hotelzyu",
//   Location: "street no xyz Delhi",
//   categories: ["Chinsese", "Italia", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   startMenu: ["Wada Ghost", "Chota Ghost", "Gobi"],
//   openingHours: {
//     sunday: { open: "09:00AM", close: "11:00PM" },
//     monday: { open: "10:00AM", close: "10:00PM" },
//   },
// };

// let menu = [...hotel.mainMenu, ...hotel.startMenu];
// console.log(menu);

// // if only value
// for (let elem of menu) console.log(elem);

// // if we want both index as well as value
// for (let [i, items] of menu.entries()) {
//   console.log(`${i + 1}:${items}`);
// }

// Enhanced Object Literal

// Before ES6 Vs After Es6
// we can use computed property name

// openingHours = {
//   sunday: { open: "09:00AM", close: "11:00PM" },
//   monday: { open: "10:00AM", close: "10:00PM" },
//   tuesday: { open: "10:00AM", close: "10:00PM" },
// };
// let menuType = "plantinumMenu";

// let hotel = {
//   name: "hotelzyu",
//   Location: "street no xyz Delhi",
//   categories: ["Chinsese", "Italia", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   startMenu: ["Wada Ghost", "Chota Ghost", "Gobi"],
//   openingHours,
//   orser: function () {
//     console.log("This is object function");
//   },

//   [menuType]: ["Different Food item"],
// };

// console.log(hotel);

// openingHours = {
//   sunday: { open: "09:00AM", close: "11:00PM" },
//   monday: { open: "10:00AM", close: "10:00PM" },
//   tuesday: { open: "10:00AM", close: "10:00PM" },
// };
// let menuType = "plantinumMenu";

// openingHours = {
//   sunday: { open: "09:00AM", close: "11:00PM" },
//   monday: { open: "10:00AM", close: "10:00PM" },
//   tuesday: { open: "10:00AM", close: "10:00PM" },
//   saturday: { open: "09:00AM", close: "6:00PM" },
// };

// let hotel = {
//   name: "hotelzyu",
//   Location: "street no xyz Delhi",
//   categories: ["Chinsese", "Italia", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   startMenu: ["Wada Ghost", "Chota Ghost", "Gobi"],
//   openingHours,
// };

// Let suppose we want to check this hotel open on saturday or not
// if open then at what  time

// console.log(hotel.openingHours.tuesday.open);

// To avoid this error two methods
// without optional chaining

// if (hotel.openingHours && hotel.openingHours.saturday) {
//   console.log(hotel.openingHours.saturday.close);
// }

// with optional chaining

// console.log(hotel.openingHours?.saturday?.open);

// openingHours = {
//   sunday: { open: "09:00AM", close: "11:00PM" },
//   monday: { open: "10:00AM", close: "10:00PM" },
//   tuesday: { open: "10:00AM", close: "10:00PM" },
//   saturday: { open: "09:00AM", close: "6:00PM" },
// };

// let hotel = {
//   name: "hotelzyu",
//   Location: "street no xyz Delhi",
//   categories: ["Chinsese", "Italia", "English"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   startMenu: ["Wada Ghost", "Chota Ghost", "Gobi"],
//   openingHours,
// };

// Keys(properties)

// let properties = Object.keys(openingHours);
// console.log(properties);

// we know how to loop over array

// for (let key of properties) {
//   console.log(key);
// }

// values

// let values = Object.values(openingHours);
// console.log(values);

// complete objects

// let entries = Object.entries(openingHours);

// console.log(entries);
// for (let [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// Data sets
openingHours = {
  sunday: { open: "09:00AM", close: "11:00PM" },
  monday: { open: "10:00AM", close: "10:00PM" },
  tuesday: { open: "10:00AM", close: "10:00PM" },
  saturday: { open: "09:00AM", close: "6:00PM" },
};

let hotel = {
  name: "hotelzyu",
  Location: "street no xyz Delhi",
  categories: ["Chinsese", "Italia", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  startMenu: ["Wada Ghost", "Chota Ghost", "Gobi"],
  openingHours,
};

//example
// indexing not allowed

// let itemSet = new Set([1, 2, 3, 4, 2, 3, 4, 5, 7, 8]);
let itemSet = new Set("SanaUllah");

// console.log(itemSet);
// console.log(itemSet.size);
// console.log(itemSet.has(98));
// console.log(itemSet.add(98));
// console.log(itemSet.has(98));
// console.log(itemSet.delete(98));

// set are also iterables

for (let item of itemSet) {
  console.log(item);
}
