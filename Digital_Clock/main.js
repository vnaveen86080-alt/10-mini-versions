const hour=document.querySelector("#hour")
const minute=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const date=document.querySelector("#date")

let avail_day=new Date()

let avail_date=new Date()

let datee=avail_date.getDate()

let day=avail_day.getDay()


let c;

switch(day){
    case 1:
        c=`Monday`
        break;
    case 2:
        c= `Tuesday`
        break;
    case 3:
       c= `Wednesday`
        break;
    case 4:
        c= `Thursday`
        break;    
    case 5:
        c= `Friday`
        break; 
    case 6:
        c= `Saturday`
        break; 
    case 0:
        c= `Sunday`
        break; 
}

date.textContent=`${datee},${c}`







function getTiming(){
   let data=new Date()
   let h=data.getHours()
   let m=data.getMinutes()
   let s=data.getSeconds()

   let hour_12=h % 12 || 12
   
   hour.textContent =String(hour_12).padStart(2,"0")
   minute.textContent=String(m).padStart(2,"0")
   seconds.textContent=String(s).padStart(2,"0")
}
getTiming()
setInterval(getTiming,1000)

console.log(7%12)

