const addItem=async(item)=>{
   await randomDelay();
   let div=document.createElement("div");
   div.innerHTML=item;
   document.body.append(div)
}

const randomDelay=()=>{
    return new Promise((resolve,reject)=>{
        timeout=1+6*Math.random();
        setTimeout(() => {
            resolve();
        }, timeout*1000);
    });
}

async function main(){
    let st=setInterval(()=>{
        let last=document.body.querySelector("div:last-child");
        if(last.innerHTML.endsWith("....")){
            last.innerHTML=last.innerHTML.slice(0,-4);
        }
        else{
            last.innerHTML+=".";
        }
    },100);

   let text=[
    "Initializing hacking",
    "Reading ur files",
    "password files found",
    "Decrypting password files",
    "passwords decrypted",
    "Uploading viruses",
    "Viruses uploaded",
    "Hacking complete"
]

for(const item of text){
    await addItem(item);
}
await randomDelay();
clearInterval(st);

}

main();
