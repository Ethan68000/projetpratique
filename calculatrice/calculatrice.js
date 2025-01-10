var operande = 0;
var operation = 0;
var resultat; // Déclarez la variable sans l'initialiser

// Fonction pour initialiser la calculatrice
function init() {
    resultat = document.getElementById('resultat'); // Accéder à l'élément une fois le DOM chargé
}

function onClick_Nombre(chiffre) {
    if (resultat.value === "0") {
        resultat.value = chiffre; // Remplace 0 par le chiffre
    } else {
        resultat.value += chiffre; // Ajoute le chiffre à la valeur existante
    }
}

function reverse_onClick() {
    resultat.value = resultat.value * -1; // Inverse le signe
}

function addition_onClick() {
    operande = parseFloat(resultat.value); 
    operation = 1;
    resultat.value = "";
}

function soustraction_onClick() {
    operande = parseFloat(resultat.value);
    operation = 2;
    resultat.value = "";
}

function multiplication_onClick() {
    operande = parseFloat(resultat.value);
    operation = 3;
    resultat.value = "";
}

function division_onClick() {
    operande = parseFloat(resultat.value);
    operation = 4;
    resultat.value = "";
}

function egal_onClick() {
    var deuxiemeOperande = parseFloat(resultat.value);
    var total;
    switch(operation) {
        case 1:  // Addition
            total = operande + deuxiemeOperande;
            break;
        case 2:  // Soustraction
            total = operande - deuxiemeOperande;
            break;
        case 3:  // Multiplication
            total = operande * deuxiemeOperande;
            break;
        case 4:  // Division
        if (deuxiemeOperande == 0){
            total = "Impossible de diviser par 0"
        }
        else {
            total = operande / deuxiemeOperande;
        }
            break;
        default:
            total = deuxiemeOperande;
    }
    resultat.value = total;
}

function refresh_onClick() {
    resultat.value = "0"; // Réinitialise le champ de résultat à 0
}

// Ajoutez un gestionnaire d'événements pour exécuter init() lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', init);