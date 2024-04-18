
// ******************* 7.0 Arrays Method ***********

let letters = ['a','b','c','d'];
// console.log(letters)

// Reverse (Mutate the original array)

// console.log(letters.reverse());
// console.log(letters)

// concat

// let nums = [1,2,3,4]

// let concated = letters.concat(nums);
// console.log(concated,nums)
// console.log(...nums, ...letters)
// console.log(concated);

// join

// let joined = letters.join('')
// console.log(typeof joined)

// slice method

// used to Extract part the array
// Array.slice(startIndex,lastIndex(excluded))
// Return new Array of extracted elements

// let num = [3,5,7,9,11]
// let extractedArray= num.slice(1,4);//1-3
// console.log("Original Array",num);
// console.log("Extracted Array",extractedArray)

// splice() method // It alse mutate the original array

// used to add new elements into the array
// Array.splice(index,deleteValue,valueToBeAdded)
// Return deleted items in the form of array

// let num = [3,4,5,9,2]
// let updated = num.splice(1,1,1)

// console.log(num)

// console.log(updated);

// Working with Arrays(simple methods)

// at method

let nums = [23,43,24,54,29,85]

// console.log(nums[0])
console.log(nums.at(-1))

// Getting last element of the array

// console.log(nums[nums.length-1])
// console.log(nums.slice(-1)[0])
// console.log(nums.at(-1))

// at() method can also work on strings

// let geo = "Larry"
// console.log(geo.at(-1));

// Map()

// create new array from original array by applying 
// transformation function

// let salaries = [3000, 5000,6000, 9000]

// let newSalaries = salaries.map(salary =>{
//     let incrementedAmount = salary/2;
//     return salary + incrementedAmount
// })

// console.log("After 50% Incrementation New Salaries are",newSalaries)

// filter() method

// let gifts = ["watch","Ring",'chocolates','Teddy','watch','neckless']

// now you want to filter only "watch and Ring Gifts"

// let filterArray = gifts.filter(gift =>{
//     if(gift == 'watch'|| gift=='Ring'){
//         return gift
//     }
// })

//  It return 'new' array

// console.log(filterArray)
// console.log(gifts)


// reduce() // Does not mutate the original array

// run reducer function for each array element
// Array.reduce(function(total,currentValue),initialValue)
// It return signle value

// sum of all elements using 

let num = [1,5,8,3,9,4,43,42]

let sum = num.reduce(function(total,currentValue){
    return total + currentValue
},0)

console.log(sum)
console.log(num)

