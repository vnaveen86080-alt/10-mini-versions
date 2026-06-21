let calcNums=document.querySelectorAll(".numbers")
let calcSym=document.querySelectorAll(".symbol")
let calcBox=document.querySelector("input")

let clear=document.querySelector("#clear")
let equal=document.getElementById("equal")

calcNums.forEach((element) => {
    element.addEventListener("click",(e)=>{
      calcBox.value
      +=e.target.textContent

    })
    
    
});

calcSym.forEach((sym)=>{
    sym.addEventListener("click",(s)=>{
        calcBox.value+=s.target.textContent
    })
})

let numbers=[]
    let operators=[]

function finalOut(){
        let n=calcBox.value
        let current=""
        for (i=0;i<n.length;i++){
    
         if(
    n[i] == "+" ||
    n[i] == "-" ||
    n[i] == "*" ||
    n[i] == "/"
){
    operators.push(n[i]);
    numbers.push(current);
    current = "";
}
        
        else{
        current+=n[i]
        
        }
        }
        numbers.push(current)
        calculate()
 
}

let sum;


function calculate() {

    sum = Number(numbers[0]);

    for (let x = 0; x < operators.length; x++) {

        if (operators[x] === "+") {
            sum += Number(numbers[x + 1]);
        }
        else if (operators[x] === "-") {
            sum -= Number(numbers[x + 1]);
        }
        else if (operators[x] === "*") {
            sum *= Number(numbers[x + 1]);
        }
        else if (operators[x] === "/") {
            sum /= Number(numbers[x + 1]);
        }
    }

    calcBox.value=sum
    numbers.splice(0,numbers.length)
    operators.splice(0,operators.length)
   
}
function del(){
    calcBox.value=""
    numbers.splice(0,numbers.length)
    operators.splice(0,operators.length)
    
}














