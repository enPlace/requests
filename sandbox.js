const request = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/todoss/"
let response 
request.onreadystatechange =()=>{
   //console.log(request, request.readyState)
    if(request.readyState===4&&request.status/100 ==2){
        console.log(request, request.response)
        response =JSON.parse(request.response)
    }else if (request.readyState ===4){
        console.log("can't fetch data. check the url")

    }
}


request.open("GET", url)
request.send()
