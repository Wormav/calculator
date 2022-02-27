class Personnage {
    constructor(pseudo , classe , sante , attaque , niveau){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
    };


    evoluer(){
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
    };

    verifierSante(){
        if(this.sante < 0 || this.sante == 0){
            this.sante = 0;
            console.log(this.pseudo + " a perdu !")
        };
    };

    get informations(){
        console.log([this.pseudo] + " " +(this.classe) + " a " + [this.sante] + " points de vie et est au niveau " + [this.niveau]);
    };
};

class Magicien extends Personnage {
     gandalf = new Personnage("Ganfalf" , "magicien" , 170 , 90);
     
     attaquer(personnage){
         personnage.sante -= this.attaque;
         console.log(this.gandalf.pseudo + " attaque " + [personnage.pseudo] + " en lançant un sort " + ([this.gandalf.attaque] + " dégâts" ));

         this.evoluer();
         this.verifierSante;
     };

     attaquer(personnage){
         personnage.sante -= this.attaque;
         console.log(this.gandalf.pseudo + " attaque " + [personnage.pseudo] + " en lançant un sort " + ([this.gandalf.attaque] + " dégâts" ));

         this.evoluer();
         this.verifierSante;
     };

     
     coupSpecial(personnage){
         personnage.sante -= this.attaque * 5;
         console.log(this.gandalf.pseudo + " attaque " + [personnage.pseudo] + " en lançant un sort " + ([this.gandalf.attaque *5] + " dégâts" ));

         this.evoluer();
         this.verifierSante();
     }
}