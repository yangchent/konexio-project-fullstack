const express = require("express");
const app = express();
const cors = require("cors");
const countriesData = require("./countriesData.json");
const PORT = 3000;

app.use(cors());

/**
 * Créations des endpoints/routes
 */
app.get("/all", (req, res) => {
	// On renvoie toutes les données de tous les pays
	res.json({
		status: "success",
		data: countriesData,
	});
});

app.get("/:countryName", (req, res) => {
	// toLowerCase permet de mettre le string en minuscule pour effectuer la comparaison
	// avec la liste des pays
	const countryName = req.params.countryName.toLowerCase();

	// On filtre les données des pays pour récupérer juste l'objet
	// contenant le pays qui nous intéresse
	const countryData = countriesData.filter(
		(country) => country.name.toLowerCase() === countryName
	);

	res.json({
		status: "success",
		data: countryData,
	});
});
app.get("/capital/:capitalName", (req, res) => {
	const capitalName = req.params.capitalName.toLowerCase();
	const capitalData = countriesData.filter(
		(country) => country.capital.toLowerCase() === capitalName
	);
	res.json({
		status: "success",
		data: capitalData,
	});
});

/**
 * Démarrage du serveur
 */
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

