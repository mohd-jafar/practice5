let button = document.querySelector('button');


let content= document.querySelector(".content")

let xhr = new XMLHttpRequest()

xhr.responseType="json"

button.addEventListener('click', function () {

    

    console.log(xhr.response.products)


})

xhr.open('GET', 'https://dummyjson.com/products')
xhr.send()


xhr.onload = function(){

    xhr.response.products.map((e)=>{
        
        content.innerHTML+=`<li>${e.title}</li>
        <li>${e.description}
        // <>${e.images} ,src="https://i.dummyjson.com/data/products/2/1.jpg"}</li>`
        
        
    })
}
xhr.open('GET', 'https://dummyjson.com/products')
xhr.send()










// xhr.onload= function 




// button.addEventListener('click', function(){
//     button.onclick=alert('Welcome to javascript');
// })