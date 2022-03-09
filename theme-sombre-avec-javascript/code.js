let btn = document.querySelector("#mode");
let span = document.querySelector("span");

function modeSombre(){
    document.body.className = 'dark';
    span.textContent = 'Thème clair'
    localStorage.setItem('theme' , 'sombre');
};

if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') == 'sombre'){
        modeSombre();
    };
};

btn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.className = " ";
    span.textContent = "Thème sombre";
    localStorage.setItem("theme", "clair");
  } else {
      modeSombre();
  }
});
 