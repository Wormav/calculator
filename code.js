// DEMANDER CHOIX //

do {
    var choix = prompt("Que souhaitez-vous faire?\n\n 1 - Addition\n\n 2 - Multiplication\n\n 3 - Soustraction\n\n 4 - Division\n");
} while (choix == "" || choix == null || choix >= 5 || isNaN(choix));

// DEMANDER NOMBRES A UTILISER //

do {
    var premierNombre = prompt("quel est le premier nombre?");
    premierNombre = Number(premierNombre);
    
} while (premierNombre == "" || premierNombre == null || isNaN(premierNombre));

do {
  var deuxiemeNombre = prompt("quel est le deuxième nombre?");
  deuxiemeNombre = Number(deuxiemeNombre)
} while (deuxiemeNombre == "" || deuxiemeNombre == null || isNaN(deuxiemeNombre));



// FONCTIONS D'OPERATIONS //

function addition(nombreA , nombreB){ 
    let operation = nombreA + nombreB;

    
    alert("voici le résultat: " + operation);
 };

 

function multiplication(nombreA , nombreB){ 
    let operation = nombreA * nombreB;

    
    alert("voici le résultat: " + operation);
 };

 function soustraction(nombreA , nombreB){ 
    let operation = nombreA - nombreB;

    
    alert("voici le résultat: " + operation);
    
 };

 function division(nombreA , nombreB){ 
    let operation = nombreA / nombreB;

   

    
    alert("voici le résultat: " + operation);
 };




 // SWITCH POUR APPELER FONCTION //

 switch (choix) {
     case "1" :
         addition(premierNombre , deuxiemeNombre);
     break;
     case "2" :
         multiplication(premierNombre , deuxiemeNombre);
     break;
          
     case "3" :
         soustraction(premierNombre , deuxiemeNombre);
    break; 
          
     case "4" : 
         division(premierNombre , deuxiemeNombre);
     break;   
         
     default:
         alert("une érreur est survenue")
         break;
 }




