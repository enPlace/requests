let response 
let url = "todos.json"

//xmlhttp request function. 
const getTodo=(callbackFunction)=>{

    const request = new XMLHttpRequest();
    console.log(request.readyState)

request.onreadystatechange =()=>{
   console.log(request, request.readyState)
    if(request.readyState===4&&request.status/100 ==2){
        callbackFunction(undefined, request.responseText)
        response = JSON.parse(request.responseText)
    }else if (request.readyState ===4){
        callbackFunction("Couldn't fetch data. Try double-checking the url.")

    }
}
request.open("GET", url)
request.send()
}


console.log("hello1")
console.log(2)

function errorHandler(error, data){
    console.log("callbackFunction executed")
    if(data){
        console.log("request complete. type 'response' in the console.")
    }
    if(error){
        console.log(error)
    }
}
console.log(3)
console.log(4)
getTodo(errorHandler)
