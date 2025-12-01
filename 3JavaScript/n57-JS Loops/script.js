console.log(" i am java script loops");

let a=1;
for(let i=0;i<5;i++){
    console.log(a+i);
}

let obj={
    name:"kallesh",
    role:"student",
    age:21
}

for(const key in obj){
    console.log(key + ": " + obj[key]);
}

for (let value of "coding is fun"){
    console.log(value);
}

let i=6;
while(i<10){
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i<10);