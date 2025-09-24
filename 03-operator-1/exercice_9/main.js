// Total du patrimoine
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

let totalPatrimoine = maison + terrains + liquidites;

// --- Première catégorie : enfants (75%) ---
let partEnfants = totalPatrimoine * 0.75; // 75%
let partParEnfant = partEnfants / 3; // 3 parts (Paul, Marie, Alain)

// Paul
let partPaul = partParEnfant;

// Marie
let partMarie = partParEnfant;

// Alain (décédé, ses enfants partagent sa part)
let partAlain = partParEnfant;
let partEric = partAlain / 2;
let partClaire = partAlain / 2;

// --- Deuxième catégorie : conjoint + frères (25%) ---
let partConjointFreres = totalPatrimoine * 0.25; // 25%
let partParMembre = partConjointFreres / 3; // 3 parts (épouse, Joseph, Sarah)

// Madame MUKUNA (épouse)
let partMadame = partParMembre;

// Joseph (frère vivant)
let partJoseph = partParMembre;

// Sarah (nièce, représente Daniel)
let partSarah = partParMembre;

// --- Affichage ---
console.log("Répartition de l'héritage :");
console.log("Paul :", partPaul, "CDF");
console.log("Marie :", partMarie, "CDF");
console.log("Éric :", partEric, "CDF");
console.log("Claire :", partClaire, "CDF");
console.log("Madame MUKUNA :", partMadame, "CDF");
console.log("Joseph :", partJoseph, "CDF");
console.log("Sarah :", partSarah, "CDF");

