// On récupère les éléments du DOM
const form = document.getElementById('visiteForm');
const tableBody = document.querySelector('#tableauVisiteurs tbody');

// On écoute la validation du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const etude = document.getElementById('etude').value;

    // Création d'une nouvelle ligne (tr)
    const nouvelleLigne = document.createElement('tr');

    // Ajout des cellules (td) avec les données
    nouvelleLigne.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${etude}</td>
    `;

    // On ajoute la ligne au corps du tableau
    tableBody.appendChild(nouvelleLigne);

    // On vide le formulaire pour la personne suivante
    form.reset();
});