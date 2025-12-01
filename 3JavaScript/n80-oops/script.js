let obj={
    name:"kallesh",
    age:23
}
console.log(obj);
console.log(typeof obj);

let animal1={
    eats:true
}
let rabbit={
    jumps:true
}

rabbit.__proto__=animal1;


class animal{
    constructor(name){
        this.name=name;
        console.log("class animal created")
    }
    eats(){
        console.log("animal is eating")
    }
    jumps(){
        console.log("animal is jumping")
    }
}

class lion extends animal{
    constructor(name){
        super(name);
        console.log("class lion created");
    }
    eats(){
        super.eats();
        console.log("lion is eating");
    }
}

let a =new animal("bunny");
console.log(a);
a.eats();
a.jumps();

let l =new lion("simba");
console.log(l);


//object is instance of class
console.log(a instanceof animal);
console.log(l instanceof lion);
console.log(l instanceof animal);
console.log(a instanceof lion);