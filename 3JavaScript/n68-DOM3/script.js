console.log("dom");
let boxes=document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor="red";
document.getElementById("red").style.backgroundColor="blue";
document.querySelector(".box").style.backgroundColor="green";
document.querySelectorAll(".box")[1].style.backgroundColor="green";
document.querySelectorAll(".box").forEach(e=>{
    e.style.color="yellow";
})

document.getElementsByTagName("div");