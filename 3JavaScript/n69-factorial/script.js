let a=4;

// Array.from(Array(5+1).keys()).slice(1,).reduce((a,b)=>a*b);
function factorial(number){
    let arr=Array.from(Array(number+1).keys());
    let c=arr.slice(1,).reduce((a,b)=>a*b)
    return c;
}
// factorial(a);
console.log(factorial(a)); 

function factorial2(number){
    let fac=1;
    for(let i=1;i<=number;i++){
        fac=fac*i;
    }
    return fac;
}
console.log(factorial2(a));