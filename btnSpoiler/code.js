let btn    = document.querySelector("button");
let div    = document.querySelector("div");
let hidden =true;

div.style.display = "none";

btn.addEventListener('click' , () => {

    if(hidden){
        btn.textContent = "cacher";
        div.style.display = "block";
        hidden = false ;
    } else {
        btn.textContent = "afficher";
        div.style.display = "none";
        hidden = true ;
    }
});
