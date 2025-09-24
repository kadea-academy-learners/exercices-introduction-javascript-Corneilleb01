
// 1. Salaire mensuel
let salaireMensuel = 500;

// 2. Loyer (30% du salaire)
let loyer = salaireMensuel * 0.30;

// 3. Nourriture (20% du salaire)
let nourriture = salaireMensuel * 0.20;

// 4. Transport (10% du salaire)
let transport = salaireMensuel * 0.10;

// 5. Autres dépenses (50 + 25)
let autresDepenses = 50;
autresDepenses = autresDepenses + 25;

// 6. Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;

// 7. Reste
let reste = salaireMensuel - totalDepenses;

// 8. Vérification budget
if (reste >= 100) {
    console.log("Budget bien géré");
} else {
    console.log("Attention, budget serré");
}

// 9. Ajouter loisirs (15% du salaire)
let loisirs = salaireMensuel * 0.15;
totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

// 10. Pourcentages
let pourcentageLoyer = (loyer / salaireMensuel) * 100;
let pourcentageNourriture = (nourriture / salaireMensuel) * 100;
let pourcentageTransport = (transport / salaireMensuel) * 100;
let pourcentageAutres = (autresDepenses / salaireMensuel) * 100;
let pourcentageLoisirs = (loisirs / salaireMensuel) * 100;

console.log("Salaire Mensuel :", salaireMensuel);
console.log("Loyer :", loyer, "(", pourcentageLoyer, "% )");
console.log("Nourriture :", nourriture, "(", pourcentageNourriture, "% )");
console.log("Transport :", transport, "(", pourcentageTransport, "% )");
console.log("Autres Dépenses :", autresDepenses, "(", pourcentageAutres, "% )");
console.log("Loisirs :", loisirs, "(", pourcentageLoisirs, "% )");
console.log("Total Dépenses :", totalDepenses);
console.log("Reste :", reste);

// 11. Augmentation de 10% du salaire
salaireMensuel = salaireMensuel * 1.10;

// Recalculer toutes les valeurs
loyer = salaireMensuel * 0.30;
nourriture = salaireMensuel * 0.20;
transport = salaireMensuel * 0.10;
loisirs = salaireMensuel * 0.15;
totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

// 12. Vérifier si dépenses > 90%
if (totalDepenses > (salaireMensuel * 0.90)) {
    console.log("Dépenses trop élevées, réduisez vos charges");
} else {
    console.log("Budget sous contrôle après augmentation");
}

console.log("Nouveau salaire :", salaireMensuel);
console.log("Total Dépenses :", totalDepenses);
console.log("Reste :", reste);

