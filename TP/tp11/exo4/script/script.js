function genererCalendrier(premierJourIndex, mois, annee, options) {
    const nomsMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const joursSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    
    const nbJours = new Date(annee, mois, 0).getDate();
    
    const tailles = {
        petit: { font: '12px', padding: '5px', width: '220px' },
        moyen: { font: '16px', padding: '10px', width: '350px' },
        grand: { font: '20px', padding: '15px', width: '500px' }
    };
    const styleRef = tailles[options.taille];

    let html = `
    <div style="font-family: sans-serif; width: ${styleRef.width}; border: 2px solid #ddd; 
                background-color: ${options.couleurFond}; color: ${options.couleurTexte}; border-radius: 12px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
        <div style="text-align: center; font-weight: bold; padding: 15px; background: rgba(0,0,0,0.05); font-size: 1.2em;">
            ${nomsMois[mois - 1]} ${annee}
        </div>
        <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: ${styleRef.font};">
            <thead>
                <tr>${joursSemaine.map(j => `<th style="padding: ${styleRef.padding}; opacity: 0.7;">${j}</th>`).join('')}</tr>
            </thead>
            <tbody><tr>`;

    // Cases vides
    for (let i = 1; i < premierJourIndex; i++) {
        html += `<td></td>`;
    }

    let jourCourant = 1;
    let position = premierJourIndex;

    while (jourCourant <= nbJours) {
        html += `<td style="padding: ${styleRef.padding}; cursor: default; transition: background 0.2s;" 
                    onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)'" 
                    onmouseout="this.style.backgroundColor='transparent'">
                    ${jourCourant}
                 </td>`;
        
        if (position % 7 === 0 && jourCourant < nbJours) {
            html += '</tr><tr>';
        }
        jourCourant++;
        position++;
    }

    html += '</tr></tbody></table></div>';
    return html;
}

/* mise à jour automatique */
function actualiser() {
    const annee = parseInt(document.getElementById('annee').value);
    const mois = parseInt(document.getElementById('mois').value);
    
    // Calcul automatique du premier jour du mois (JS: 0=Dimanche, 1=Lundi...)
    // On convertit pour votre format (1=Lundi, 7=Dimanche)
    let dateInit = new Date(annee, mois - 1, 1);
    let premierJourIndex = dateInit.getDay(); 
    if (premierJourIndex === 0) premierJourIndex = 7; // Ajustement pour Dimanche

    const options = {
        taille: document.getElementById('taille').value,
        couleurFond: document.getElementById('couleurFond').value,
        couleurTexte: document.getElementById('couleurTexte').value
    };

    const resultat = genererCalendrier(premierJourIndex, mois, annee, options);
    document.getElementById('render-zone').innerHTML = resultat;
}

// Premier affichage au chargement
actualiser();

// oui cette fois ci j'ai utilisé l'ia pour faire le js faute de temps. je peux pas le cacher c'est flagrant 