// let button = document.querySelector("button")
// button.addEventListener('click', function(){



    function apiCall(url){
    let xhr = new XMLHttpRequest()
    // console.log(xhr)
    xhr.responseType = "json"


    
    let promise = new promise(function(resolve,reject){
        xhr.onload= function(){
            resolve(xhr.response)
        }
        
        xhr.onerror= function(){
            reject("error")
        }
        
        
    })
    
    xhr.open('GET',url)
    xhr.send
    
    return promise
}

fetch('https://dummyjson.com/carts/1')

.then((data) =>{
    console.log(data)
    return data.json()

})

.then((data) =>{
    console.log(data)
})







