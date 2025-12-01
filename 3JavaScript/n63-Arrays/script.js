let arr=[1,2,3,4,5,6]
console.log(arr);
console.log(arr.length);

arr[0]=10;
console.log(typeof arr);
console.log(arr);

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop()); 

arr.push(50);
arr.push("kallesh");
console.log(arr);

arr.shift();
console.log(arr);//fermoves first element

arr.unshift("hello");
console.log(arr);