const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import des routes
const materielRoutes = require('./api/routes/materiel');
const clientRoutes = require('./api/routes/client');
const typeMaterielRoutes = require('./api/routes/typeMateriel');
const contratRoutes = require('./api/routes/contrat');

// Log toutes les req
app.use(morgan('dev'));

// Permet d'analyser les données des req
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Autorisation d'utiliser l'API partout
app.use(cors());

// Utilisation des routes
app.use('/materiels', materielRoutes);
app.use('/clients', clientRoutes);
app.use('/typeMateriel', typeMaterielRoutes);
app.use('/contrats', contratRoutes);

//Gestion des erreurs, ce middleware s'active si aucune des routes ne correspond
app.use((req, res, next) => {
	const error = new Error("Non reconnu");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;