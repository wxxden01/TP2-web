// 1. Définition de la Map (Base de données locale)
const definitions = new Map([
    ["php", {
        title: "PHP",
        text: "Un langage de scripts généraliste et Open Source, spécialement conçu pour le développement d'applications web.",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
    }],
    ["wikipedia", {
        title: "Wikipédia",
        text: "Une encyclopédie multilingue, universelle et librement diffusée sur le web.",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
    }],
    ["javascript", {
        title: "JavaScript",
        text: "Un langage de programmation de scripts principalement employé dans les pages web interactives.",
        img: "" // Pas d'image pour celui-ci
    }]
]);

const popup = document.getElementById('popup');
const popTitle = document.getElementById('pop-title');
const popText = document.getElementById('pop-text');
const popImg = document.getElementById('pop-img');

// 2. Gestion des événements
document.querySelectorAll('.has-definition').forEach(item => {
    
    item.addEventListener('mouseenter', (e) => {
        const ref = item.getAttribute('data-ref');
        const data = definitions.get(ref);

        if (data) {
            // Remplissage du contenu
            popTitle.textContent = data.title;
            popText.textContent = data.text;
            
            if (data.img) {
                popImg.src = data.img;
                popImg.style.display = "block";
            } else {
                popImg.style.display = "none";
            }

            // Positionnement
            const rect = item.getBoundingClientRect();
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.style.top = `${rect.bottom + window.scrollY + 10}px`;
            
            // Affichage
            popup.style.display = 'block';
        }
    });

    item.addEventListener('mouseleave', () => {
        popup.style.display = 'none';
    });
});