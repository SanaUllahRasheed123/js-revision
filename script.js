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
