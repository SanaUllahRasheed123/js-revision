// Local Storage

// In Previous todo list task when we refresh the browser we 
// lose our current state data

// Store and retrieve data from database

// Store and retrieve data from local storage

// is an api provided by brwoser to store data inside brwoser
// console.log(window.localStorage)


// set the item in local storage
// localStorage.setItem('passion','programming')
// localStorage.setItem('age',23)
// console.log(localStorage)

// Get the item from local storage

// console.log(localStorage.getItem('passion'))

// localStorage.removeItem('age')

// localStorage.clear()

//  ********* 9.4 *********
// How to store complex data structure like
// array

// Ultimately in local storage data store in string formate

let vehicles = [
    {company:"Honda", model:'2008'},
    {company:"Toyota",model:"2010"}
]

console.log( "Type of vehicles data is ",typeof vehicles)

let stringOfVehicles = JSON.stringify(vehicles)
console.log(stringOfVehicles)

localStorage.setItem("vehicles", stringOfVehicles)
console.log(localStorage)

// Get stored item again in object formate

let storedData = localStorage.getItem('vehicles')

let objectFormat = JSON.parse(storedData)
console.log(typeof objectFormat)
