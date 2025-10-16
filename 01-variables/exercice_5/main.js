// Fonction qui convertit Celsius en Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Exemple d'utilisation
let temperatureC = 25;
let temperatureF = celsiusToFahrenheit(temperatureC);
console.log(temperatureC + "°C équivaut à " + temperatureF + "°F");

// Export de la fonction pour pouvoir l'utiliser dans d'autres fichiers
module.exports = {
 celsiusToFahrenheit,
};
