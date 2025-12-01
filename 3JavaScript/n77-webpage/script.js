function createcard(title,cname,views,monthsold,duration){
    let vstr
    if(views<1000){
        vstr=views;
    }
    else if(views<1000000){
        vstr=views/1000+"k";
    }
    else if(views>=1000000){
        vstr=views/1000000+"M";
    }
    else{
        vstr=views;
    }

    let html=`<div class="container">
        <div class="card">
            <div class="image">
                <img width="204px" height="154px" src="https://unsplash-assets.imgix.net/unsplashplus/module-01-v2.jpg?fm=jpg" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cname}. ${vstr} views . ${monthsold} months ago</p>
            </div>
        </div>
    </div>`
    document.querySelector(".container").innerHTML+=html;
}
createcard("fd| Sigmafeeeourse", "codewithharry", 89000000, 43, "43:03");
createcard("fd| fe", "f", 89000000, 43, "43:03");