// let a =parseInt(prompt("enter a number:"));
// let b =parseInt(prompt("enter another number:"));
let a =prompt("enter a number:");
let b =prompt("enter another number:");
// let sum=a+b;
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("sorry you did not enter the number")
}
let sum=parseInt(a)+parseInt(b);

function main(){
let x=9;
try {
    console.log("the sum is "+sum*x);
    return true;
    
} catch (error) {
    console.log("error occured",error);
    return false;
}
finally{
    console.log("i am finally block, i will execute anyway");
}
// console.log("the sum is "+sum*x);
}
main();