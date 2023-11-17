let button = document.querySelector('button');

let xhr = new XMLHttpRequest()

let content= document.querySelector(".content")


xhr.responseType="json"

button.addEventListener('click', function () {
    console.log(xhr.response.products)


})

xhr.open('GET', 'https://dummyjson.com/products')
xhr.send()


xhr.onload = function(){

    xhr.response.products.map((e)=>{
        
        content.innerHTML+=`<li>${e.title}</li>`
        
        
    })
}
xhr.open('GET', 'https://dummyjson.com/products')
xhr.send()










// xhr.onload= function 




// button.addEventListener('click', function(){
//     button.onclick=alert('Welcome to javascript');
// })