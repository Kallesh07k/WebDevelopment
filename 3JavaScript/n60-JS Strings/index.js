console.log("this is strings");

let a ="Harry";
console.log(a.length);
for(const char of a){
    console.log(char);
}
for(const index in a){
    console.log(index + ":" + a[index]);
}
console.log(a[0]);


let name1="kallesh";
let age =23;
let course="computer science";

console.log("My name is "+name1 + " and my age is "+age +". I am studying " + course);
console.log(`My name is ${name1} and my age is ${age}. I am studying in ${course}`);
// console.log('My name is ${name1} and my age is ${age}. I am studying in ${course}'); ==wrong way

console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.length);
console.log(name1.slice(1,4));
console.log(name1.replace("ka","Ma"));
console.log(name1.replaceAll("l","p"));
console.log(name1.concat(" is a good boy"));