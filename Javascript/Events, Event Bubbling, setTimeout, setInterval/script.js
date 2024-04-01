let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="Hey you were click <b>Enjoy your click!</b>"
})

btn.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click please");
})

document.addEventListener("keydown",()=>{
    alert("Keydown done");
})