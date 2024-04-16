//strings
// console.log("hello");

// let firstName = "Wow";
// let lastName = "Programmer";

// console.log(firstName, lastName);

//string concatination
//Method 1 Using + operator

// let fullName = firstName + " " + lastName;
// console.log(fullName);

//Method 2 Templete Literal

//Getting String Charcter
// console.log(firstName[1]);

//string methods

// console.log(firstName.toLocaleLowerCase());
// console.log(firstName.toUpperCase());
// console.log(lastName.indexOf(""));

// let hobbies = "      coding reading running  ";
//trim method
// let result = hobbies.trim();
// console.log(hobbies);
// console.log(result);

//index of

// console.log(result.indexOf("coding"));
// console.log(result.lastIndexOf("running"));//Case Sensitive

//include method
//to see whether the thing exist or not , give result in the form of true or false

// console.log(result.includes("jumping")); // Case Sensitive

//slice method

// let fullName = "wowprogrammer";
// console.log(fullName.slice(0, 5)); // Excluding the last one 0-4

// let result = fullName.slice(0, 5);

//imp Note does not mutate original array.
// console.log("Original string ", fullName);
// console.log("Extracted String", result);

//string "split()" method

// let favoriteColors = "Brow,Blue,Black,Gray";
// let arrColors = favoriteColors.split(",");
// console.log(arrColors);

//javacript strings are Immutable

// let str = "Hello";

// str[0] = "p";
// str[2] = "r";

// console.log(str);

// str = str + " " + "Programmer";

// console.log(str);

// *************Numbers Data Type started************\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let score = 50;
// console.log(typeof score);

//Mathematical Operators * / % ** + -

// let result = score / 4; //Give Quotient
// let result = score % 2; // Give Remainder
// console.log(result);

//Mathematical Expression
// let result = score * 2 + 4 * 3 - ((8 / 2) % 4); //100+12-0

//Using Priority and Precedence
//1 () Brackets
//2 ** Power Operator
//3 * / % (From left to right)
//4 + - (From left to right)vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv///////////'

// console.log(result);

//concatination of numbers

// let resultLine = "My Total Score is = " + result;
// console.log(resultLine);

//Loose Equality (==) vs Strict Equality Operator (===)
//Loose Equality (==)

// let age = 22; // Number type value
// console.log(age == "22"); // Focus Only On value Both Not Type
// console.log(age != "22");

//strict equality operator

// console.log(age === "22"); //Focus on Both Value and its Type
// console.log(age !== "22"); //Focus on Both Value and its Type

//*******************Type Coversion*********************

// let stringType = "Hello";
// console.log(stringType, typeof stringType);

//Number Mthod

// let numberType = Number(stringType);
// console.log(numberType, typeof numberType);

//Imp Note
//In number method passing string must be of numeric value

// let numberType = 53;

// //String method
// let stringType = String(numberType);
// console.log(stringType, typeof stringType);

//Boolean Method true/false
// let age = 0;
// let booleanValueOfAge = Boolean(age);
// console.log("Boolean value of age is ", booleanValueOfAge);

//Arrays

// let dish1 = "Biryani"
// let dish2= "Mutton"

// let dishes = ["Biryani", "Mutten", "Parathay"];

//Access
// console.log(dishes[1]);

//Modify the Array

// dishes[2] = "Karahai";
// console.log(dishes);

//Array methods
//Join Mehthod

// console.log(dishes.join(" "));

// console.log(dishes.indexOf("Parathay"));//case sensitive

// let newDishes = ["sweet-dish", "Pani-Pori"];
// console.log(dishes.concat(newDishes));
// let updateDishes = dishes.concat(newDishes);
// console.log(newDishes.length);

// console.log(updateDishes.push("Bhally"));

// console.log(updateDishes.pop());

// console.log(dishes.pop());

// ***************************************Flow Control*88888888888888888888888888888888888888888

//Control Flow
//For Loops

//Run the Specific task 10 times

//without for loop

// console.log("Run the task");

// console.log("Run");
// console.log("Run");
// console.log("Run");
// console.log("Run");
// console.log("Run");
// console.log("Run");

// for (let i = 0; i < 200; i++) {
//   console.log("The run time", i);
// }

// let dishes = ["Biryani", "Chana-Chat", "Bhally", "Pani-Pori"];

//Access the array values

// for (let i = 0; i < dishes.length; i++) {
//   console.log(dishes[i]);
// }

// let j = 1;
// while (j <= 6) {
//   // Get Error Conditional Statement is mandatory
//   console.log("While loop", j);
//   j++;
// }

//While Loopp

// let dishes = ["Biryani", "Chat-chana", "Bhally", "Karahi"];

// let j = 0;

// while (j < dishes.length) {
//   console.log("Favourite Dish", dishes[j]);
//   j++; // without this statement we will get infinite loop
// }

//Do While Loop

// let j = 1;
// do {
//   console.log("At least Run Time", j);
//   j++;
// } while (j < 1);

//if , else, else if  statements
// let budjet = 3500;

// if (budjet > 6000) {
//   console.log("Will do dinner in hotel");
// } else if (budjet > 5000) {
//   console.log("Will do dinner in 3 star hotel");
// } else if (budjet > 3000) {
//   console.log("Will do dinner in 2 start hotel");
// } else {
//   console.log("Run if All the conditions are false");
// }

// break and Continue
//Aslo called jumm statement

//Continue Statement
//used to skip some values of loop
// console.log("heh");

// for (i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue; //Move towards the next iteration
//   }
//   console.log("i =", i);
// }

//Break statement

//used to terminate the loop and control transform from outside the loop

// for (let i = 1; i < 10; i++) {
//   if (i == 5) {
//     console.log("Our desired value is =", i);
//     break;
//   }
//   console.log("The value of i = ", i);
// }

//Logical Operators

// And && , Or || , Not !

// let password = "qwerty@";

// if (password.length > 5 && password.includes("@")) {
//   console.log("Password is strong");
// } else {
//   console.log("You have a weak password");
// }

// let password = "qwerty@";

// if (password.length > 3 || password.includes("@")) {
//   console.log("Give true if only one true");
// } else {
//   console.log("You have a weak password");
// }

// Not operator ! true to false and false to true

// const hello = true;

// if (!hello) {
//   console.log("h", hello);
// }

// Priorities
// Not , And , OR left to Right

// Example
// let result = (true && true) || (false && !false);

// result = (true && true) || (false && true);
// result = true || (false && true);
// result = true ||true;
// console.log(result);

//Variables and Block Scope

//scope >> - Area Where variable is defined or accessible
//only let and const make the block scope

// let score = 90; //Global Scope

// if (true) {
//   let score = 58; //block scope
//   console.log("The value of score is", score);
// }

// console.log(score);

//Terniary Operator ( ? : )

// age = 20;
// if (age > 20) {
//   console.log("Qualify");
// } else {
//   console.log("Fail");
// }

// let age = 18;

// let result = (age) => (18 ? "Qualify" : "Fail");
// console.log(result);

// let age = 19;
// let weight = 60;

// let result =
//   age > 20 ? (weight > 89 ? "Qualify" : "Age Issue") : "Weight Issue";
// console.log(result);

//it is used in competetive of "Conditional " statement

// let currentDate = new Date();

// let weekDay = currentDate.getDay();
// console.log(weekDay);//0 to 6

// switch statement
// let age = 16;

// switch (age) {
//   case 15:
//   case 16:
//   case 17:
// result = "These ages are  allowed to sit in the exam";
//   default:
//     result = "Not allowed";
// }

//If there is no break statement "next" case will be executed
// console.log(result);

// *************************************** Ch#3. Functions *88888888888888888888888888888888888888888

// It is simply a piece of code which we can use in our program many times
// it is just like a variable holding some piece of code

//Declaration

// function nameOfFunction(x, y) {
//   console.log("You are running code present inside the function");
//
// }

//function call
// nameOfFunction();
// nameOfFunction();
// nameOfFunction();

//Also called Anonymous function given below.
// let fun = function () {
//   console.log("This is another example of function expression");
// };

//Caliing function expression
// fun();
// fun();

//passing values (Arguments and Parameters)

// let invitation = function (name = "defaultValue", time = "defaultTime") {
//   // local variable to this
//   console.log(`Welcome ${name} you are invited at our event at ${time}`);
// };
// invitation("sanaullah", "Morning");
// invitation("UbaidUllah", "Afternoon");
// invitation("sanaullah");

//How to returning values(how to return vlaue from the function)

// let ageCalcaulation = function (birthYear) {
//   let age = 2024 - birthYear;
//   console.log(`Your current age is = ${age}`);
// };

// ageCalcaulation(2001);

// let ageCalcaulation = function (birthYear, currentYear) {
//   let age = currentYear - birthYear;
//   console.log(`Your current age is = ${age}`);
// };

// ageCalcaulation(2001, 2024);

// let ageCalcaulation = function (birthYear, currentYear) {
//   let age = currentYear - birthYear;
//   return age;
//   // console.log(`After return satement no code of line will execute`);
// };

// // console.log(ageCalcaulation(2001, 2005));
// let functionResult = ageCalcaulation(2005, 2013);
// console.log(`Your age is = ${functionResult}`);

//Arrow Function(ES6)

//Special form of functions expression
//It allows us to write function more fast becuse
//No need to use function keyword
//No need to use parenthesis() in case of single parameter
//No need to use return statement if single line of code in function

//Function Expression

// let invitation = function (name) {
//   console.log(`Welcome ${name} to this event`);
// };

// invitation("AI");

//Arrow Function

// let invitation = (name) => `Welcome ${name} to this event`;

// console.log(invitation("SanaUllah"));

// //Passing functionas as an Argument(Higher order function example)

// let UpperCase = function (str) {
//   return str.toUpperCase();
// };

// let LowerCase = function (str) {
//   return str.toLowerCase();
// };

// let transformer = function (str, fun) {
//   return fun(str);
// };

// console.log(transformer("Hello", LowerCase));

// ***********************Function returning another Function******

// let complement = function (msg) {
//   return function (name) {
//     console.log(`${msg} ${name}`);
//   };
// };

// complement("You are good Coder")("Carry");

//2nd Method

// let complemented = complement("You are good Code");
// complemented("Carry");

//Complement is higher order function

//Function

//Immediately invoked function Expression
//Executed only once
//Now this is expression

// (function (name) {
//   console.log("This function will never use again", name);
// })("IIFE");

//setTimeOut and setInterval

//setTimeout -> Run Function "Once" after "interval" of time
//setInterval -> Run function repeatedly, Starting after the
//interval of time, then repeating.....

//setTimeOut

//setTimeOut(fun|code,delay,arg1,arg2,...)

// function greeting(name) {
//   console.log(`Welcome ${name} to our event `);
// }

// setTimeout(greeting, 1000, "sanaullah");

//setInterval(fun|code,delay,arg1,arg2,...)

// setInterval(greeting, 3000, "Hamza");

//  ********************3.9 Hoisting**********************
//variable "declaration" are "hoisted" toward "top" of their scope

//function Declaration

// test();
// function test() {
//   console.log("Hello Programmers");
// }

// num = 12;
// var num;
// console.log(num);

// *************Intruduction to objects in js************\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let car = {
//   color: "red",
//   model: "2022",
//   company: "Honda",
// };
// console.log(car);

//accessing the js objects properties
//two methods
// console.log(car["model"]);
// console.log(car.company);

// let propertyName = "company";

// propertyName = "color";
// propertyName = "company";

// console.log(car[propertyName]);
// console.log(car.color); // use direct property name
// console.log(car.propertyName);//not working

// "Modify" the objject

// car.color = "brown";
// car.company = "suzuki";
// car["color"] = "blue";
// console.log(car.color);

// console.log(car[propertyName]);
// console.log(car[propertyName]);
// console.log(car.company);

//Delete properties of objects

// let obj = {
//   prop1: "value1",
//   prop2: "value2",
// };

// let returnValue = delete obj["prop1"];
// delete obj.prop2;
// delete obj["prop1"];

//it always return true value

// console.log(obj, returnValue);

//Function vs method

// let ageCalculate = function (birthyear) {
//   let age = 2024 - birthyear;
//   console.log(`Current age is = ${age} `);
// };

// ageCalculate(2001);

// Method >-- It is nothing but object property(key) holding
// Function as "Value"

// let person = {
//   ageCalculate: function (birthYear = 2005) {
//     let age = 2024 - birthYear;
//     return age;
//   },
// };

// console.log(`Current age is ${person.ageCalculate(2001)}`);

//********************this keyword */

//In Each method we have an access of special keyword called
// "this"

//this keyword represent the oject. "Calling" the "method"
// in which "this " is "present"

//Example

// let person = {
//   firstName: "Harry",
//   lastName: "Brook",
//   city: "Bombay",
//   birthyear: 1998,
//   education: "software engineer",
//   getSummary: function () {
// return `Harry Brook lived in Delhi. He is software engineer and he is 20 years old`;
// return `${this.firstName} ${this.lastName} lives in ${this.city} and he  is a  ${this.education}. His age is ${this.birthyear}`;
// return this;
//   },
// };

// console.log(person["getSummary"]());
// console.log(person.getSummary());

//Step 1 check in which method we use "this" keyword
//Step 2 Owner of that method(Who is calling those method)

//ForEach method of array

//Its another type of loop which we used to traverse
//over the array

// let dishes = ["Biryani", "Chany", "karahi"];

//using for loop

// for (let i = 0; i < dishes.length; i++) {
//   console.log(dishes[i]);
// }

// console.log("*********");
// // usign forEach loop
// dishes.forEach((element) => {
//   console.log(element);
// });

//Objects inside array

// let blockList = [
//   { userName: "John", reason: "Abusive Content" },
//   { userName: "Paul", reason: "Copyright content" },
//   { userName: "Modi Sarkar", reason: "palgerism" },
//   { userName: "Aman", reason: "abusing" },
// ];
// console.log(blockList);

// for (let i = 0; i < blockList.length; i++) {
//   console.log(
//     `User ${blockList[i].userName} blocked due to follwing reason ${blockList[i].reason}`
//   );
// }

// *********Math Objects  4.6 topic**********

//Math object are built in objects in javascript

// console.log(Math);

// let number = 7.4;
// let result = Math.round(number); // round to nearest integers
// console.log(result);

// console.log(Math.floor(number)); // round to down
// console.log(Math.ceil(number)); // round to up
// console.log(Math.trunc(number)); //remove decimal part

// let random = Math.random();
// console.log(Math.round(random * 67)); // 1-100

// *********Call, apply and bind  4.7 topic**********

//Function
// "use strict"
//call and apply method
// we can manually set the value of "this" keyword using "call and apply"

// let mainPlane = {
//   airline: "Fly Pakistan",
//   iatacode: "P1",
//   day: "wednesday",
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} Booked Flight on ${this.airline} with ioatcode number ${this.iatacode} and flight number  ${flightNum} on ${this.day}`
//     );
//     this.bookings.push({
//       flightName: `${this.airline}`,
//       name: name,
//       flightNum: `${this.iatacode}${flightNum}`,
//     });
//   },
// };

// mainPlane.book(553, "Carlos");
// mainPlane.book(733, "SanaUllah");
// console.log(mainPlane);

// New airline launched of same group

// "use strict"
// let childPlain = {
//   airline: "Child Plain",
//   iatacode: "P230",
//   day:"Friday",
//   bookings: [],

// };

// let book = mainPlane.book;
// book(636,"Laeeq"); // book is regular function



//  "this" value is "undefined" at least in strict mode
// Solution Using "call" method

// book.call(childPlain,689,"Zack")

// console.log(childPlain)

// book.call(mainPlane,435,"Umar Khan")
// console.log(mainPlane);

//apply method

// book.apply(childPlain,[435,"Barira"])
// console.log(childPlain)

// let mainPlane = {
//   airline: "PIA",
//   iatcode: "BS6",
//   day: "Friday",
//   bookings: [],
//   book: function (name, flightNumber) {
//     console.log(
//       `User ${name} booked this flight name ${this.airline} with code ${this.iatcode} on ${this.day} having flight number${flightNumber}`
//     );
//   },
// };

// mainPlane.book("Sana Ullah", 3219);

//bind method

// function greet() {
//   console.log(`Welcome ${this.firstName} ${this.lastName} on MyCodeAcadmy`);
// }

// let user = {
//   firstName: "Neha",
//   lastName: "Kakar",
// };

// let greets = greet.bind(user);

// greets();

//"object/arrays" how "reference" are passed to variable

// let arr = [1, 2, 3, 4, 5];

// let getRef = arr;

// getRef[5] = 7;
// getRef.shift();

// console.log("original array", arr);
// console.log("get ref array", getRef);

// console.log("******");

//pass by value

// let getValue = [...arr];

// getValue[6] = 89;

// console.log("Original", arr);
// console.log("getValue array", getValue);


// ****************4.9**************
// for in Loop (Each iteration return a "key" of object)

// let car = {
//   model:2022,
//   color:"Black",
//   company: "Toyota"
// }

// for(let key in car)
// console.log(key)
// ******************5.1 DOM *******************

// JavaScript DOM (Document Object Model)

//created by browser as the html load into brower

// Browser create object of html called 'document object' 

// In Document object there is model of complete in 
//tree like structure

// console.log(document.URL) // give the address 


// ******************5.2 Query Selector *******************

//Getting html element/s using querySelector/All

//querySelector returns "first element" that match CSS selector

//To get all matched elements we use querySelectorall

// let resultedElement = document.querySelectorAll('p')

// console.log(resultedElement)

// Access element with class

// let resultedElement = document.querySelectorAll('.coderdost')

// console.log(resultedElement)

// Access element with class

// let resultedElement = document.querySelector('#coders')

// console.log(resultedElement)

// ******************5.3 Other ways to access elements *******************

//other ways to get html elements

// let querySelectorElement = document.querySelectorAll('p')
// console.log(querySelectorElement)

// querySelectorElement.forEach(element => {
//     console.log(element)
// })


//Get elements by tagName

// let tagNameElements = document.getElementsByTagName('p')
// console.log(tagNameElements)

// tagNameElements.forEach(element => {
//     console.log(element)
// })

// Get elements by className

// let classNameElements = document.getElementsByClassName('coderdost')

// console.log(classNameElements)

//  Get elements by Id

// let elementById = document.getElementById('coders')
// console.log(elementById)


// ******************5.4 innerText Vs innerHTML *******************

//Updating and Changing content

//innerText
// Retriveve and set content in Plain text
// let content = document.querySelector('.content')
// console.log(content.innerText)
// content.innerText = "<p>Greate  Coders</p>" // update





//innerHTML
// It does not ignore spaces
// Retriveve and set content in HTML formate

// content.innerHTML += "<p>Great Coders</p>"
// console.log(content.innerHTML)


// ******************5.5 getting ad setting the attribute *******************


// getting attribute of element
let coderDostLink = document.querySelector('a')
// console.log(coderDostLink.getAttribute('href'))


// setting thhe attribute of element

// coderDostLink.setAttribute('href','https://www.onlineocr.net/')
// console.log(coderDostLink.getAttribute('href'))

// coderDostLink.innerText = "Image to text"

// coderDostLink.setAttribute('href','https://mail.google.com/mail/u/0/#inbox')
// console.log(coderDostLink.getAttribute('href'))
// coderDostLink.innerText= "Gmail"