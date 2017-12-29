const express = require ('express');
const router = express.Router();
const mysqlConnexion = require('../../sql/connexion');

router.get('/', (req, res, next) => {
	mysqlConnexion.query('select * from materiel', (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.get('/typeMateriel/:idTypeMateriel', (req, res, next) => {
	const idTypeMateriel = req.params.idTypeMateriel;
	mysqlConnexion.query('select * from materiel where idTypeMateriel = ' + idTypeMateriel, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.post('/', (req, res, next) => {
	const materiel = {
		montantCaution: req.body.montantCaution,
		idTypeMateriel: req.body.idTypeMateriel,
		libelle: req.body.libelle
	};
	if (materiel.libelle && materiel.montantCaution) {
		mysqlConnexion.query('INSERT INTO materiel (montantCaution, idTypeMateriel, libelle) values (' + "'" + materiel.montantCaution + "'" + "," + "'" + materiel.idTypeMateriel + "'" + "," + "'" + materiel.libelle + "'" + ")" , (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).json({err});
			}
			res.status(201).json({
				message: "Matériel ajouté",
				data
			});
		});
	} else {
		res.status(500).json({
			message: "Entrez des identifiants"
		});
	}
});

router.get('/:idMateriel', (req, res, next) => {
	const idMateriel = req.params.idMateriel;
	mysqlConnexion.query('select * from materiel where idMateriel = ' + idMateriel, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.patch('/:idMateriel', (req, res, next) => {
	const idMateriel = req.params.idMateriel;
	mysqlConnexion.query('select * from materiel where idMateriel = ' + idMateriel, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		} else {
			const nbJoursLoues = req.body.nbJoursLoues || data[0].nbJoursLoues;
			const montantCaution = req.body.montantCaution || data[0].montantCaution;
			const idTypeMateriel = req.body.idTypeMateriel || data[0].idTypeMateriel;
			const idContrat = req.body.idContrat || data[0].idContrat;
			const libelle = req.body.libelle || data[0].libelle;
			mysqlConnexion.query("update materiel set nbJoursLoues = " + nbJoursLoues + ", montantCaution = " + "'" + montantCaution + "', idTypeMateriel = " + "'" + idTypeMateriel + "', idContrat = " + "'" + idContrat + "', libelle = " + "'" + libelle + "' where idMateriel = " + idMateriel, (err, data) => {
				if (err) {
					console.log(err);
					res.status(500).json(err);
				}
				res.status(200).json({
					message: "matériel avec l'id " + idMateriel + " modifié.",
					data
				});
			});
		}
	});
});

router.delete('/:idMateriel', (req, res, next) => {
	const idMateriel = req.params.idMateriel;
	mysqlConnexion.query('delete from materiel where idMateriel = ' + idMateriel, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json({
			message: "matériel avec l'id " + idMateriel + " supprimé.",
			data
		});
	});
});


module.exports = router;