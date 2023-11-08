var colors=["lightblue","aqua","red","lightyellow"]
var h1=document.querySelector("h1")
// first.setAttribute("style","background-color:lighblue; color:black; font-size:25px")
// function setInterval(() => {
    
// }, interval);
var i=0
setInterval(()=>h1.style.backgroundColor=colors[i<colors.length?i++:i=0],200)



var para= document.querySelector("p") 
var para1= document.querySelector('id1')
var para2=document.querySelector('id3')
var para3=document.querySelector('id4')
var para4=document.querySelector('id2')

var paraa=document.querySelectorAll("p")



console.log(para)                   //node list
// console.log(para1)                  
// console.log(para2)                  
// console.log(para3)                  
// console.log(para3)                  

var para2=document.getElementById("id2")
console.log(para2)


var para3=document.getElementById("id3")
console.log(para3)

var para4=document.getElementById("id4")
console.log(para4)


id1.setAttribute("style","background-color:aqua; color:black; font-size:25px")
id2.setAttribute("style","background-color:lightblue; color:black; font-size:25px")
id3.setAttribute("style","background-color:red; color:black; font-size:25px")
id4.setAttribute("style","background-color:lightyellow; color:black; font-size:25px")
























// let p1=document.createElement("p")

// div.appendChild(p)
// div.appendChild(p1)
// p.textContent="hello world"
// p1.innerText="hello world123"

// // console.log(div)
// // document.body.appendChild(div)
