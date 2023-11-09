var inputs= document.getElementById("inpid")
var inputsa= document.getElementById("inpid1")
var result= document.querySelector(".rest")

function Add(){
    if(inputs.value==""){
        alert("Please enter task")
    
}else{
    var newspc= document.createElement("li")
    
    // var div1= document.createElement("div")

    newspc.innerHTML=`${inputs.value}<div><i class="ri-pencil-fill "></i><i class="ri-delete-bin-fill"></i></div>`  
    result.appendChild(newspc)
    // result.appendChild(div1)

    inputs.value=""

    var newspace= document.createElement("li")
     var div2= document.createElement("div")
    newspace.innerHTML=`${inputsa.value}`
    result.appendChild(newspace)
    // result.appendChild(div2)
    inputsa.value=""

}
    
}











// check.innerHTML +=
// `<h2>${inputs}</h2>
// <h3>${result}</h3>`







