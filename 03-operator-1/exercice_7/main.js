// 1.variable ageEnfant 
let ageEnfant = 10; // exemple : l'enfant a 10 ans

// 2. Créer une variable agePere et lui assigner une valeur qui soit le double de l'âge de l'enfant
let agePere = ageEnfant * 2; // 10 * 2 = 20

// 3. Créer une variable ageMere et lui assigner une valeur qui correspond à l'âge du père moins 5
let ageMere = agePere - 5; // 20 - 5 = 15

// 4. Créer une variable ageGrandPere et lui assigner une valeur qui soit le double de l'âge de la mère plus la moitié de l'âge de l'enfant
let ageGrandPere = (ageMere * 2) + (ageEnfant / 2); 
// (15 * 2) + (10 / 2) = 30 + 5 = 35

// 5. Créer une variable ageOncle et lui assigner une valeur qui soit l'âge du père plus 10
let ageOncle = agePere + 10; // 20 + 10 = 30

//les résultats dans la console
console.log("Âge de l'enfant :", ageEnfant);
console.log("Âge du père :", agePere);
console.log("Âge de la mère :", ageMere);
console.log("Âge du grand-père :", ageGrandPere);
console.log("Âge de l'oncle :", ageOncle);

module.exports = {
    ageEnfant,
    ageGrandPere,
    ageMere,
    ageOncle,
    agePere,
}