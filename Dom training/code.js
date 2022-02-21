document.querySelector("#a-supprimer").remove();

let h1 = document.createElement("h1");
h1.textContent = "Bienvenue"
document.body.append(h1);

let h2 = document.createElement("h2");
h2.textContent = "Acceuil / Une autre page";
document.body.append(h2);

let p = document.createElement("p");
p.textContent = "Ceci est un paragraohe crée avec JavaScript";
document.body.append(p);

document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.color = "white";
document.querySelector("h1").style.backgroundColor = "#e3b04b";
document.querySelector("h1").style.paddingBottom = "2rem";
document.querySelector("h1").style.paddingTop = "2rem";

document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.backgroundColor = "#f1d6ab";
document.querySelector("h2").style.marginTop = "-1.4rem";
document.querySelector("h2").style.padding = "1rem 0";

document.querySelector("body").style.border = "black solid"