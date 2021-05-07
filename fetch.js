//using native fetch api
const goodUrl = "https://jsonplaceholder.typicode.com/todos/"
const badUrl = "https://jsonplaceholder.typicode.com/todoss"

const fetchy=(url)=>{
    fetch(url).then((response)=>{
        return response.json() //response.json() returns a promise, not an object!! 
     
     }).then((data)=>{
         console.log(data)
     }).catch((error)=>{
         console.log("rejected!!", error)
     
     })
     

}


fetch("https://jsonplaceholder.typicode.com/todoss/").then((response)=>{
    if (!response.ok) {
        throw Error(response.status);
    }
    return response.json() //response.json() returns a promise, not an object!! 
 }).then((data)=>{
     console.log(data)
 }).catch((error)=>{
     console.log("rejected!!", error)
 
 })
 

console.log("ASYNC $$$$")

/* 1st we fetch the data using fetch()
we then use a .then() function to handle the response.
if the response is not ok, (!response.ok), we throw an error. This is in case of 
a 404 error or something. 
Otherwise, we return response.json(), which is a promise. When the promise is finished, it 
will either return the json data or an error. If there is an error retreiving or parsing the 
data, it will pass to the .catch() function. 

We can attach another .then() function that takes the json data from response.json()
as an argument. At this point we are handling the json object and can  do what we like with it. 

Lastly we chain the catch function to the promise handlers and handle any errors that come from the promises*/ 