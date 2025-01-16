function premier() {
    const nombreatester = parseInt(document.getElementById("nombredepartpremier").value);
    if (isNaN(nombreatester) || nombreatester < 2) { //test si le nombre n'est pas correct ou plus petit que 2 car 1 c logique
        document.getElementById("resultat").innerText = "Veuillez entrer un nombre entier supérieur ou égal à 2.";
        return;
    }

    const nombrediminuer = Math.sqrt(nombreatester);
    let nombrepremieroupas = true; // On suppose que le nombre est premier au départ
    let explication = "";

    // Vérification de la divisibilité des nombres de 2 à la racine carrée
    for (let i = 2; i <= nombrediminuer; i++) {
        if (nombreatester % i === 0) {
            nombrepremieroupas = false;
            explication = `${nombreatester} = ${i} × ${nombreatester / i}`;
            break; // On peut arrêter dès qu'on trouve un diviseur
        }
    }

    /*a faire avec boucle while au moins il y a le choix
    let i = 2; // On commence à tester la divisibilité à partir de 2

    // Boucle while pour tester les diviseurs
    while (i <= nombrediminuer) {
        if (nombreatester % i === 0) {
            nombrepremieroupas = false;
            explication = `${nombreatester} = ${i} × ${nombreatester / i}`;
            break; // Arrêter dès qu'on trouve un diviseur
        }
        i++; //on ajoute 1 à i pour faire le test suivant
    }*/

    // Affichage du résultat
    if (nombrepremieroupas == true) {
        document.getElementById("resultat").innerText = `Le nombre ${nombreatester} est premier car il est divisible uniquement par 1 et lui-même.`;
    } else {
        document.getElementById("resultat").innerText = `Le nombre ${nombreatester} n'est pas premier car ${explication}.`;
    }
}

function nombreaquotientreste(){
    const nombreatester = parseInt(document.getElementById("nombredeparttest").value);
    const nombreadividante = parseInt(document.getElementById("quotient").value);

    // Division entière
    const b = Math.floor(nombreatester / nombreadividante);
    // Reste de la division
    const reste = nombreatester % nombreadividante;

    document.getElementById("resultat2").innerText = `Le nombre ${nombreatester} = ${b} * ${nombreadividante} + ${reste} `;

}
