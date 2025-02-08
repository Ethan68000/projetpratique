<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $host = '127.0.0.1';
    $port = 3306;
    $db = 'math';
    $user = 'root';
    $pass = '';
    $charset = 'utf8mb4';

    $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    // Récupération des données envoyées
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $identifiant = $_POST['identifiant'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $mdp = $_POST['mdp'];
    //$mdp = password_hash($_POST['mdp'], PASSWORD_BCRYPT); // Hachage du mot de passe

    // Vérifier si l'identifiant ou l'email existent déjà
    $stmt = $pdo->prepare("SELECT id FROM utilisateurs WHERE identifiant = ? OR email = ?");
    $stmt->execute([$identifiant, $email]);
    
    if ($stmt->fetch()) {
        echo "Erreur : Identifiant ou email déjà utilisé.";
        exit;
    }

    // Insertion des données
    $sql = "INSERT INTO utilisateurs (nom, prenom, identifiant, email, telephone, mdp) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $success = $stmt->execute([$nom, $prenom, $identifiant, $email, $telephone, $mdp]);

    if ($success) {
        echo "Inscription réussie !";
    } else {
        echo "Erreur lors de l'inscription.";
    }
}
?>
