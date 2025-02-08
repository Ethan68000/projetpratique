document.getElementById("formInscription").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let identifiant = document.getElementById("identifiant").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;
    let mdp = document.getElementById("mdp").value;
    let confmdp = document.getElementById("Confirmationmdp").value;

    if (mdp !== confmdp) {
        document.getElementById("message").innerText = "Les mots de passe ne correspondent pas !";
        return;
    }

    let formData = new FormData();
    formData.append("nom", nom);
    formData.append("prenom", prenom);
    formData.append("identifiant", identifiant);
    formData.append("email", email);
    formData.append("telephone", telephone);
    formData.append("mdp", mdp);

    fetch("../sql.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("message").innerText = data;
    })
    .catch(error => {
        console.error("Erreur :", error);
    });
});
