/*
Valeurs d'entrées: 
    surface au sol (m2)
    épaisseur de dalle (0.15m - 0.35m)

Constantes :
    dossage ciment : 350kg/m2
    capacité camion : 9m3
    prix untitaire béton : 91€ HT/m3
    frais transport : 140€ HT/livraison
    TVA : 20%

Valeur sortantes : 
    Volume réel béton (m2)
    Nombre de camions : (arrondi au supérieur)
    Quanité totale (Tonnes(T))
    Montant total HT 
    Montant total TTC
*/

// let surface, epaisseur;

function DevisLafarge() {
    // Récupération directe des valeurs numériques
    const surface = parseFloat(document.getElementById('surface').value) || 0;
    const epaisseurCm = parseFloat(document.getElementById('epaisseur').value) || 0;

    // gestion d'erreur
    if (epaisseurCm < 15 || epaisseurCm > 35) {
        alert("L'épaisseur doit être comprise entre 15 et 35 cm.");
        return;
    }
    const epaisseurM = epaisseurCm / 100; 

    // Constantes
    const CAPACITE_CAMION = 9; 
    const DOSAGE_CIMENT = 350; 
    const PRIX_M3_HT = 91; 
    const PRIX_TRANSPORT_HT = 140;
    const TVA = 1.20;

    // Calculs
    const volume_theorique = surface * epaisseurM;
    const nb_camions = Math.ceil(volume_theorique / CAPACITE_CAMION);
    const volume_livre = nb_camions * CAPACITE_CAMION;

    const ciment_tonne = (volume_livre * DOSAGE_CIMENT) / 1000;
    const prix_totalHT = (volume_livre * PRIX_M3_HT) + (nb_camions * PRIX_TRANSPORT_HT);
    const prix_totalTTC = prix_totalHT * TVA;

    // Affichage (Assurez-vous que ces ID existent dans votre HTML)
    document.getElementById('volNet').textContent = volume_theorique.toFixed(2) + " m³";
    document.getElementById('nbCamions').textContent = nb_camions;
    document.getElementById('volLivre').textContent = volume_livre + " m³";
    document.getElementById('poidsCiment').textContent = ciment_tonne.toFixed(2) + " t";
    document.getElementById('totalHT').textContent = prix_totalHT.toFixed(2) + " €";
    document.getElementById('totalTTC').textContent = prix_totalTTC.toFixed(2) + " €";

    document.getElementById('resultat').style.display = 'block';
}
