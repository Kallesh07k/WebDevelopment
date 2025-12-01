const fun1 =(x)=>{
    console.log("this is arrow function",x)
}

fun1(4);
fun1("arrow");

const sum=(a,b)=> a+b;
console.log(sum(6,3));

const add=(a,b)=> {
    console.log(a+b);
}
add(6,1);

const fun=(a,b)=>a+b;
console.log(fun(2,3));

const greet =name=>"hello "+ name;
console.log(greet("kallesh"));


const meet =(name)=>{
    console.log("hello "+ name);
}
meet("ramesh");