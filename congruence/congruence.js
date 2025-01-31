function congruencepetit() {
    const nbdepart = parseInt(document.getElementById("nombre").value);
    const modulo = parseInt(document.getElementById("modulo").value);
    const reste = nbdepart % modulo;
    resultat1.innerHTML = `<h4>${nbdepart} ≡ ${reste} [${modulo}]</h4>`;
}