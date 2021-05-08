//using async-await
//async function always returns a promise 
// fetch returns a promise that resolves into a response object
//

const getTodos = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    if (!response.ok) {
        throw Error(response.status);
    }
    
    const data = await response.json()
    return data
}
getTodos().then(data=>{
    console.log("resolved")
    info = data
    console.log(info)
}).catch(error=>{
    console.log(error)
})

let info 
