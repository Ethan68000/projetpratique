function creationmatrice() {
    let nbligne = parseInt(document.getElementById("nombreligne").value);
    let nbcolonne = parseInt(document.getElementById("nombrecol").value);

    let matrice = [];

    for (let i = 0; i < nbligne; i++) {
        let ligne = [];
        for (let j = 0; j < nbcolonne; j++) {
            ligne.push(Math.floor(Math.random() * 201) - 100); // Génère un nombre aléatoire entre -100 et 100
        }
        matrice.push(ligne);
    }

    afficherMatricealeatoire(matrice);
}

function afficherMatricealeatoire(matrice) {
    let resultat = document.getElementById("resultatmatrice");
    resultat.innerHTML = matrice.map(ligne => ligne.join(", ")).join("<br>");
}

function demanderDimensions() {
    let operation = document.getElementById("operateurmatrice").value;
    let dimensionInput = document.getElementById("dimensionInput");

    dimensionInput.innerHTML = `
        <h4>Dimensions des matrices</h4>
        <label for="nombreligne1">Nombre de lignes (Matrice 1):</label>
        <input type="number" id="nombreligne1"><br>
        <label for="nombrecol1">Nombre de colonnes (Matrice 1):</label>
        <input type="number" id="nombrecol1"><br>
        <label for="nombreligne2">Nombre de lignes (Matrice 2):</label>
        <input type="number" id="nombreligne2"><br>
        <label for="nombrecol2">Nombre de colonnes (Matrice 2):</label>
        <input type="number" id="nombrecol2"><br>
        <button onclick="effectuerOperation(${operation})">Valider</button>
    `;
}

function effectuerOperation(operation) {
    let ligne1 = parseInt(document.getElementById("nombreligne1").value);
    let col1 = parseInt(document.getElementById("nombrecol1").value);
    let ligne2 = parseInt(document.getElementById("nombreligne2").value);
    let col2 = parseInt(document.getElementById("nombrecol2").value);

    // Vérification des dimensions
    if ((operation == 1 || operation == 2) && (ligne1 !== ligne2 || col1 !== col2)) {
        alert("Pour l'addition ou la soustraction, les dimensions des matrices doivent être identiques !");
        return;
    }
    if (operation == 3 && col1 !== ligne2) {
        alert("Pour la multiplication, le nombre de colonnes de la première matrice doit être égal au nombre de lignes de la deuxième matrice !");
        return;
    }

    // Générer les matrices
    let matrice1 = creationMatrice(ligne1, col1);
    let matrice2 = creationMatrice(ligne2, col2);

    // Effectuer l'opération
    let resultat = [];
    if (operation == 1) {
        resultat = additionMatrices(matrice1, matrice2);
    } else if (operation == 2) {
        resultat = soustractionMatrices(matrice1, matrice2);
    } else if (operation == 3) {
        resultat = multiplicationMatrices(matrice1, matrice2);
    }

    // Afficher le résultat
    afficherMatrice(resultat, "Résultat de l'opération");
}

function creationMatrice(nbligne, nbcolonne) {
    let matrice = [];
    for (let i = 0; i < nbligne; i++) {
        let ligne = [];
        for (let j = 0; j < nbcolonne; j++) {
            ligne.push(parseFloat(prompt(`Entrez le coefficient (${i + 1}, ${j + 1}) de la matrice:`)));
        }
        matrice.push(ligne);
    }
    return matrice;
}

function additionMatrices(matrice1, matrice2) {
    return matrice1.map((ligne, i) => ligne.map((val, j) => val + matrice2[i][j]));
}

function soustractionMatrices(matrice1, matrice2) {
    return matrice1.map((ligne, i) => ligne.map((val, j) => val - matrice2[i][j]));
}

function multiplicationMatrices(matrice1, matrice2) {
    let resultat = [];
    for (let i = 0; i < matrice1.length; i++) {
        let ligne = [];
        for (let j = 0; j < matrice2[0].length; j++) {
            let somme = 0;
            for (let k = 0; k < matrice1[0].length; k++) {
                somme += matrice1[i][k] * matrice2[k][j];
            }
            ligne.push(somme);
        }
        resultat.push(ligne);
    }
    return resultat;
}

function afficherMatrice(matrice, titre) {
    let resultat = document.getElementById("resultatmatrice2");
    resultat.innerHTML = `<h4>${titre}</h4>` + matrice.map(ligne => ligne.join(", ")).join("<br>");
}


