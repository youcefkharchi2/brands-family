const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques depuis le dossier courant
app.use(express.static(__dirname));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour la page des produits vedettes
app.get('/featured-products', (req, res) => {
  res.sendFile(path.join(__dirname, 'featured-products.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
  console.log(`Ouvrez http://localhost:${port} dans votre navigateur`);
});
