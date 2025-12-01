let random=Math.random();
let a =prompt("Enter the first number")
let b =prompt("Enter the second number")
let c =prompt("Enter the operation to be performed +,-,*,/")

 let obj={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**" 
 }

if(random>0.1){
//correct calculation
alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
//wrong calculation
c=obj[c];
alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}