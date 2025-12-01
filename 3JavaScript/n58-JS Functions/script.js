console.log("hey harry is good")
console.log("hey harry is fine")
console.log("hey harry is great")

function nice(name){
    console.log("hey " + name + " is good");
    console.log("hey " + name + " is fine");
    console.log("hey " + name + " is great");
}

nice("kallesh");
nice("ramesh");

function sum(a,b){
    console.log(a+b);
}

sum(2,3);
sum(78,2);

function add(a,b,c=1){
    // console.log(a+b);
    return a+b+c;
}

result=add(2,7);
console.log(result);

result1=add(2,7,7);
console.log(result1);
