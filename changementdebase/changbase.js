function convertir() {
    // Récupérer les valeurs des champs
    const nombreDepart = document.getElementById("nombredepart").value;
    const choixBase = document.getElementById("choixbase").value;

    // Vérifier si le champ est vide
    if (!nombreDepart) {
        alert("Veuillez entrer un nombre.");
        return;
    }

    // Convertir selon la base choisie en appelant les fonctions existantes
    if (choixBase === "1") { // Base 2
        base2a10();
        base2a16();
    } else if (choixBase === "2") { // Base 10
        base10a2();
        base10a16();
    } else if (choixBase === "3") { // Base 16
        base16a10();
        base16a2();
    } else {
        alert("Conversion non prise en charge.");
    }
}

// Fonction pour base 2 vers base 16
function base2a16() {
    const nombreDepart = document.getElementById("nombredepart").value;
    const nombreEnBase16 = parseInt(nombreDepart, 2).toString(16).toUpperCase();
    if (isNaN(parseInt(nombreDepart, 2))) {
        alert("Veuillez entrer un nombre valide en base 2.");
    } else {
        document.getElementById("resultatAffichage2").value = nombreEnBase16;
    }
}

// Fonction pour base 2 vers base 10
function base2a10() {
    const nombreDepart = document.getElementById("nombredepart").value;
    const nombreEnBase10 = parseInt(nombreDepart, 2);
    if (isNaN(nombreEnBase10)) {
        alert("Veuillez entrer un nombre valide en base 2.");
    } else {
        document.getElementById("resultatAffichage1").value = nombreEnBase10;
    }
}

// Fonction pour base 10 vers base 16
function base10a16() {
    const nombreDepart = document.getElementById("nombredepart").value;
    const nombreEnBase16 = parseInt(nombreDepart, 10).toString(16).toUpperCase();
    if (isNaN(parseInt(nombreDepart, 10))) {
        alert("Veuillez entrer un nombre valide en base 10.");
    } else {
        document.getElementById("resultatAffichage2").value = nombreEnBase16;
    }
}

// Fonction pour base 16 vers base 10
function base16a10() {
    const nombreDepart = document.getElementById("nombredepart").value;
    const nombreEnBase10 = parseInt(nombreDepart, 16);
    if (isNaN(parseInt(nombreDepart, 16))) {
        alert("Veuillez entrer un nombre valide en base 16.");
    } else {
        document.getElementById("resultatAffichage1").value = nombreEnBase10;
    }
}

// Fonction pour base 10 vers base 2
function base10a2() {
    const nombreDepart = document.getElementById("nombredepart").value;
    const nombreEnBase2 = parseInt(nombreDepart, 10).toString(2);
    if (isNaN(parseInt(nombreDepart, 10))) {
        alert("Veuillez entrer un nombre valide en base 10.");
    } else {
        document.getElementById("resultatAffichage1").value = nombreEnBase2;
    }
}

// Fonction pour base 16 vers base 2
function base16a2() {
    const nombreDepart = document.getElementById("nombredepart").value;
    const nombreEnBase2 = parseInt(nombreDepart, 16).toString(2);
    if (isNaN(parseInt(nombreDepart, 16))) {
        alert("Veuillez entrer un nombre valide en base 16.");
    } else {
        document.getElementById("resultatAffichage2").value = nombreEnBase2;
    }
}
