// 1. Liste des images (tu peux les encoder en Base64 pour plus de sécurité)
const imageSources = [
    "./assets/images/img_1.jpg", "./assets/images/img_2.jpg",
    "./assets/images/img_3.jpg", "./assets/images/img_4.jpg",
    "./assets/images/img_5.jpg", "./assets/images/img_6.jpg",
    "./assets/images/img_7.jpg", "./assets/images/img_8.jpg",
    "./assets/images/img_9.jpg", "./assets/images/img_10.jpg"
];

// On double le tableau pour les paires et on mélange
const deck = [...imageSources, ...imageSources].sort(() => Math.random() - 0.5);

const board = document.getElementById('cards');
const secretMap = new WeakMap(); // La "boîte noire" pour stocker les sources

deck.forEach((src) => {
    // Création de la structure de la carte
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="faces">
            <div class="recto"></div> <!-- Vide par défaut ! -->
            <div class="verso">
                <img src="./assets/images/back/back_card.png" alt="Dos">
            </div>
        </div>
    `;

    // On lie l'image à la carte dans la WeakMap (invisible dans le DOM)
    secretMap.set(card, src);

    card.addEventListener('click', function() {
        flipCard(this);
    });

    board.appendChild(card);
});

function flipCard(cardElement) {
    const recto = cardElement.querySelector('.recto');
    const imageCachee = secretMap.get(cardElement);

    // On n'injecte l'image que SI la carte est retournée
    if (!recto.innerHTML) {
        recto.innerHTML = `<img src="${imageCachee}" class="img-card">`;
    }
    
    cardElement.classList.add('flipped'); // Ajoute ta classe CSS d'animation
}