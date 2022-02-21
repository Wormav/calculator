// FONCTIONS D'OPERATIONS //

function addition(nombreA , nombreB){
    return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
  return nombreA / nombreB;
}



// DEMANDER CHOIX //

do {
  var choix = Number(
    prompt(
      "Que souhaitez-vous faire?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"
    )
  );
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

// DEMANDER NOMBRES A UTILISER //

do {
  var premierNombre = Number(prompt("quel est le premier nombre?"));
  var deuxiemeNombre = Number(prompt("quel est le deuxième nombre?"));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

// SWITCH POUR APPELER FONCTION //

try {
  switch (choix) {
    case 1:
      var resultat = addition(premierNombre, deuxiemeNombre);
      break;
    case 2:
      var resultat = multiplication(premierNombre, deuxiemeNombre);
      break;

    case 3:
      var resultat = soustraction(premierNombre, deuxiemeNombre);
      break;

    case 4:
      var resultat = division(premierNombre, deuxiemeNombre);
      break;

    default:
      throw new Error("une érreur est survenue");
      break;
  }
  alert("voici le resultat " + resultat); // AFFICHER LE RESULTAT //
}

catch(error) {
    alert(error);
}
