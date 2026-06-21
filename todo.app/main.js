let input=document.querySelector("input")
let divContainer=document.getElementById("taskContainer")
let del=document.getElementById("rough")


let taskStore=JSON.parse(localStorage.getItem("data"))||[]

function adding(){
  
  let newTask=input.value.trim()
  if(newTask){
  taskStore.push(newTask)
  let div=document.createElement("div")
  div.classList.add("btntaskContainer")
  div.innerHTML=`
        <div class="btntask">
            <div><p>${newTask}</p></div>
            <div class="btnContainer"><button class="tickIcon"><i class="fa-solid fa-check"></i></button><button class="wrongIcon"><i class="fa-solid fa-xmark"></i></button></div>
        </div>`
   del.appendChild(div) 
} else{
    alert("Enter a Value")
   }
   input.value=""
   
  
 
// strike effect 
   let tickBtns=document.querySelectorAll(".tickIcon")
    tickBtns.forEach((ticks)=>{
    ticks.addEventListener("click",(e)=>{
    let dashcontent=e.currentTarget.parentElement.parentElement
    dashcontent.classList.add("dash")
    })
})
// delete effect
      
let cutBtns=document.querySelectorAll(".wrongIcon")
cutBtns.forEach((cuts)=>{
    cuts.addEventListener("click",(e)=>{
        let delContent=e.currentTarget.parentElement.parentElement
        delContent.remove()

    })
})
    
   localStorage.setItem("data",JSON.stringify(taskStore))
   console.log(taskStore)
}



function delAll(){
     del.innerHTML=""
     localStorage.removeItem("data")
}
console.log(taskStore)

console.log(del)
















