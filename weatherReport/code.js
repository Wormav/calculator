let ville = "paris";
recevoirTemperature(ville);

let btn = document.querySelector("#changer");

function recevoirTemperature(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=5ec3b21672a8b8f0636dd017dae65dbd&units=metric";

  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let température = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector("#ville").textContent = ville;
        document.querySelector("#temperature_label").textContent = température;
      } else {
        alert("Un problème est survenu merci de revenir plus tard !");
      }
    }
  };
}

btn.addEventListener("click", () => {
  ville = prompt("Quelle ville ?");
  recevoirTemperature(ville);
});
