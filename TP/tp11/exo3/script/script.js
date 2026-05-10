const dateEvenement = new Date("Jan 1, 2027 00:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
const x = setInterval(function() {

    // Obtenir la date et l'heure actuelles
    const maintenant = new Date().getTime();

    // Calculer la distance entre maintenant et la date cible
    const distance = dateEvenement - maintenant;

    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((distance % (1000 * 60)) / 1000);

    // Affichage des résultats
    document.getElementById("days").innerText = jours;
    document.getElementById("hours").innerText = heures;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = secondes;

    // Si le compte à rebours est terminé
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "L'ÉVÈNEMENT A COMMENCÉ !";
    }
}, 1000);