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

let form = document.querySelector('.sign-up-form');
let user = document.querySelector('#name')
let password = document.querySelector('#password')
let userNamePattern = /^[A-Za-z]{6,12}/

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = user.value;
    // "test" method return boolean values
    let result = userNamePattern.test(username)
    if(result == true){
        console.log("User is valid")
    }
    else{
        console.log("Username is invalid try Again ")
    }
})

// Live Feedback

user.addEventListener("keyup",(e)=>{
    if(userNamePattern.test(e.target.value)){
        // console.log("Passed")
        user.setAttribute('class','success')
    }
    else{
        // console.log(("Failed"))
        user.setAttribute('class','error')
    }
})