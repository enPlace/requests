const request = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/todos/"
request.onreadystatechange =()=>{
    console.log(request, request.readyState)
}



request.open("GET", url)
request.send()

