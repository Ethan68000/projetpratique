const listepremier = [1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
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

function premiermultiple() {
    // Récupérer la valeur de l'input
    const nombreDepart = parseInt(document.getElementById("nombredepartpremiermul").value);

    // Vérifier si l'entrée est valide
    if (isNaN(nombreDepart) || nombreDepart < 1) {
        document.getElementById("resultat").innerText = "Veuillez entrer un nombre entier positif.";
        return;
    }

    // Initialisation des variables
    let nombre = nombreDepart;
    const facteurs = [];

    // Trouver les facteurs premiers
    for (let diviseur = 2; diviseur <= nombre; diviseur++) {
        while (nombre % diviseur === 0) {
            facteurs.push(diviseur);
            nombre = nombre / diviseur;
        }
    }

    // Afficher le résultat
    const resultat = facteurs.join(" * ");
    document.getElementById("resultat3").innerText = `${nombreDepart} = ${resultat}`;
}

function nbrecommun() {
    // Récupérer les valeurs des inputs
    const nombre1 = parseInt(document.getElementById("nombre1").value);
    const nombre2 = parseInt(document.getElementById("nombre2").value);

    // Vérifier si les entrées sont valides
    if (isNaN(nombre1) || isNaN(nombre2) || nombre1 < 1 || nombre2 < 1) {
        document.getElementById("resultat4").innerText = "Veuillez entrer deux nombres entiers positifs.";
        return;
    }

    // Trouver le PGCD (Plus Grand Commun Diviseur) en utilisant l'algorithme d'Euclide
    let a = nombre1;
    let b = nombre2;

    while (b !== 0) {
        const reste = a % b;
        a = b;
        b = reste;
    }

    // Afficher le résultat
    document.getElementById("resultat4").innerText = `Le plus grand diviseur commun de ${nombre1} et ${nombre2} est ${a}.`;
}