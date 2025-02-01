function congruencepetit() {
    let nbdepart = parseInt(document.getElementById("nombre").value);
    let modulo = parseInt(document.getElementById("modulo").value);
    let diviseur = Math.floor(nbdepart / modulo)
    let reste = nbdepart % modulo;
    resultat1.innerHTML = `<h4>${nbdepart} ≡ ${reste} [${modulo}]<br>Car ${nbdepart} = ${diviseur} * ${modulo} + ${reste} </h4>`;
}

function puissanceModulaire(base, exposant, mod) {
    let resultat = 1;
    base = base % mod; // Réduction initiale

    while (exposant > 0) {
        if (exposant % 2 === 1) {
            resultat = (resultat * base) % mod;
        }
        base = (base * base) % mod; // Carré de la base
        exposant = Math.floor(exposant / 2);
    }

    return resultat;
}

function congruencegrande() {
    let nbdepart2 = parseInt(document.getElementById("nombre2").value);
    let puissance = parseInt(document.getElementById("puissance").value);
    let modulo2 = parseInt(document.getElementById("modulo2").value);

    if (isNaN(nbdepart2) || isNaN(puissance) || isNaN(modulo2)) {
        document.getElementById("resultat2").innerHTML = "Veuillez entrer des nombres valides.";
        return;
    }

    let restepremier = nbdepart2 % modulo2;
    let reste2 = puissanceModulaire(nbdepart2, puissance, modulo2);
    let moins1modulo = modulo2 -1

    let puissance1 = null;
    let restechiffre = null;

    for (let i = 1; i <= modulo2; i++) {
        if (puissanceModulaire(restepremier, i, modulo2) === 1 || puissanceModulaire(restepremier, i, modulo2) === modulo2 - 1) {
            puissance1 = i;
            restechiffre = puissanceModulaire(restepremier, i, modulo2);
            break;
        }
    }

    let resultatHTML = `<h4>${nbdepart2}<sup>${puissance}</sup> ≡ ${reste2} [${modulo2}]<br> <br> Car on fait le raisonnement suivant : <br> ${nbdepart2} ≡ ${restepremier} [${modulo2}] <br> Ensuite on trouve une puissance de ${restepremier} qui a comme reste 1 ou ${moins1modulo} (-1) <br>`;
    if (puissance1 !== null) {
        resultatHTML += `${restepremier}<sup>${puissance1}</sup> ≡ ${restechiffre} [${modulo2}]`;
    } else {
        resultatHTML += `Aucune puissance trouvée vérifiant la condition.`;
    }

    let resultatpuissance1 = restepremier ** puissance1;
    let diviseur2 = Math.floor(resultatpuissance1 / modulo2)
    let puissancediviseur = Math.floor(puissance / puissance1);
    let restepuissancediviseur = puissance - (puissancediviseur * puissance1);
    let resultatpuissancefinal = restepremier ** restepuissancediviseur;
    
    resultatHTML += ` car ${restepremier}<sup>${puissance1}</sup> = ${resultatpuissance1} = ${modulo2} * ${diviseur2} + ${restechiffre} <br> ${nbdepart2}<sup>${puissance}</sup> ≡ ${restepremier}<sup>${puissance}</sup> ≡ ${restepremier} <sup> ${puissance1} * ${puissancediviseur} + ${restepuissancediviseur} </sup> 
    <br> ${nbdepart2}<sup>${puissance}</sup> ≡ (${restepremier} <sup> ${puissance1} </sup>)<sup> ${puissancediviseur}</sup> * ${restepremier} <sup> ${restepuissancediviseur}</sup>
    <br> ${nbdepart2}<sup>${puissance}</sup> ≡ (${restechiffre})<sup>${puissancediviseur}</sup> * ${resultatpuissancefinal} ≡${reste2}</h4>`;

    document.getElementById("resultat2").innerHTML = resultatHTML;
}

