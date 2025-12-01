class user{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<4){
            console.log("name is too short");
            return;
        }
        this._name=value;
    }
}

let user1=new user("kallesh");
console.log(user1.name);

user1.name=new user("ki");