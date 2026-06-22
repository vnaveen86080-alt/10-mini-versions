let images=document.querySelectorAll(".image")

let forward=document.getElementById("btn1")

let x=0

forward.addEventListener("click",()=>{
    if(x<images.length){
    images.forEach((img)=>{
    img.style.transform=`translateX(${x*-100}%)`
   
    
})
     x++
    }
    else{
    x=0
    images.forEach((img)=>{
    img.style.transform=`translateX(${x*-100}%)`
   })
      }
     
})

let reverse = document.getElementById("btn2");

reverse.addEventListener("click", () => {

    x--;

    if (x < 0) {
        x = images.length - 1;
    }

    images.forEach((img) => {
        img.style.transform = `translateX(${-100 * x}%)`;
    });

});
console.log(images)