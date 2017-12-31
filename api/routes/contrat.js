const express = require ('express');
const router = express.Router();
const mysqlConnexion = require('../../sql/connexion');

router.get('/', (req, res, next) => {
	mysqlConnexion.query('select * from contrat', (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.get('/client/:idClient', (req, res, next) => {
	const idClient = req.params.idClient;
	mysqlConnexion.query('select * from contrat where idClient = ' + idClient, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.post('/', (req, res, next) => {
	const contrat = {
		departLocation: req.body.departLocation,
		finLocation: req.body.finLocation,
		montant: req.body.montant,
		idClient: req.body.idClient,
		idMateriel: req.body.idMateriel
	};
	if (contrat.departLocation && contrat.finLocation && contrat.montant && contrat.idClient && contrat.idMateriel) {
		mysqlConnexion.query('INSERT INTO contrat (departLocation, finLocation, montant, idClient, idMateriel) values (' + "'" + contrat.departLocation + "'" + "," + "'" + contrat.finLocation + "'" + "," + "'" + contrat.montant + "'" + "," + "'" + contrat.idClient + "'" + "," + "'" + contrat.idMateriel + "')" , (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).json({err});
			}
			console.log('Contrat ajouté');
			res.status(201).json({
				message: "Contrat ajouté",
				data
			});
		});
	} else {
		res.status(500).json({
			message: "Données incorrect"
		});
	}
});

router.get('/:idContrat', (req, res, next) => {
	const idContrat = req.params.idContrat;
	mysqlConnexion.query('select * from contrat where idContrat = ' + idContrat, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

module.exports = router;