// Aynchronous JavaScript

//  Asyn code ********11.1

// console.log(1)
// console.log(2)

// // Asyn code

// setTimeout(() => {
//     console.log("Call back function called after 3 seconds")
// console.log(3)

// }, 3000)
// console.log(4)

// setTimeout(()=>{
// console.log(`The sum of ${5+5}  `)
// },1000)

//  XML Http Request ********11.2

// Asynchronous JavaScript

// Making HTTP Request (Example)

// let request = new XMLHttpRequest();
// console.log(request,request.readyState)

// request.addEventListener('readystatechange',()=>{
//     // console.log(request,request.readyState)
//     if(request.readyState ===4){
//         console.log(request.responseText)
//     }
// })

// set up the request]
// request.open("Get","https://jsonplaceholder.typicode.com/posts")

// sending the request

// request.send()

// Use this link for practice to get JSON data in response

// value sate Description

// 0 UNSENT  Client has been created . Open() not called yet.
// 1 OPENED open() has been called
// 2 HEADERS_RECEIVED send() has been called, and headers
// 3 LOADING Downloading;responseText holds partial data.
// 4 DONE The opration is complete

//  Status Code ********11.3

// HTTP response status codes

// Informational responses (100-199)
// Successful responses (200-399)
// Redirectional messages (300-399)
// Client error responses (400-499)
// Server error responses (500-599)

// let request = new XMLHttpRequest();

// request.addEventListener("readystatechange",()=>{
//     if(request.readyState===4 && request.status==200){
//         console.log(request,request.responseText)
//     }
// })

// // set up the request
// request.open("Get","https://jsonplaceholder.typicode.com/posts/")

// // sending the request

// request.send()

//  Call Back function********11.4

let todos = (callback) => {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      //   console.log(request, request.responseText);
      // let data = JSON.parse(request.responseText);
      // callback(undefined, data); //regular js object
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      //   console.log("Data could not be fetched");
      callback("Data Could Not Fetch", undefined);
    }
  });

  // set up the request
  // request.open("Get", "https://jsonplaceholder.typicode.com/posts");
  request.open("Get", "data.json");

  // sending the request

  request.send();
};

todos((error, Data) => {
  //   console.log("Called Function is fired");
  if (error) {
    console.log(error);
  } else {
    console.log(Data);
  }
});

console.log(1);
console.log(1);
console.log(1);

//  Extractiing JSON data********11.4
