const url ="https://blockchain.info/ticker";

function recupererPrix() {
  // Crée une requête
  let requete = new XMLHttpRequest(); //crée un obejt
  requete.open("GET", url); //premier paramètre GET|POST , deuxieme parametre url
  requete.responseType = "json"; // nous attendons du JSON
  requete.send(); // nous envoyons notre requête

  // dès qu'on reçoit une réponse , cette fonction est executé

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // stock la réponse
        let prixEnEuros = reponse.EUR.last;
        document.querySelector("#price_label").textContent = prixEnEuros;
      } else {
        alert("un problème est survenu merci de revenir plus tard !");
      }
    }
  };
}

setInterval(recupererPrix, 500);

