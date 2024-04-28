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

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("This is start engine method of Car class");
  }
  get _startEngine() {
    console.log("This is start engine method using get");
  }

  get description() {
    return `Color of Bike is ${this.color} and its model is ${this.model}`;
  }
  set changeColor(color) {
    console.log((this.color = color));
  }
}

let honda = new Car("Red", 2019);
let suzuki = new Car("Black", 2020);
console.log(honda, suzuki.__proto__);

honda.startEngine(); //accessing as function
// honda._startEngine(); // accessing as property // not towrite like this one write like below one
honda._startEngine; // accessing as property

// honda.changeColor("yello"); // not to write like this, write like this below one

honda.changeColor = "blue";
console.log(honda);

console.log(honda.description);
