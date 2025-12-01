let arr=[1,2,3,4,5,6,6,7,8];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let newarr=[];
for(let i=0;i<arr.length;i++){
    newarr.push(arr[i]**2);
}
console.log(newarr);

let arrr=arr.map((e)=>{
    return e**2;
})
console.log(arrr);


const func=(e)=>{
    if (e>16){
        return true;
    }
    return false;
}

console.log(newarr.filter(func));

let arr2=[1,2,3,4,5,6];
const red=(a,b)=>{
    return a+b;
}
console.log(arr2.reduce(red));