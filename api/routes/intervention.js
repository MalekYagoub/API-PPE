const express = require ('express');
const router = express.Router();
const mysqlConnexion = require('../../sql/connexion');

router.get('/vueIntervention', (req, res, next) => {
	mysqlConnexion.query('select * from vueIntervention', (err, data) => {
		console.log("vue intervention");
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

// create view vueIntervention as select intervention.idIntervention, intervention.dateHeureIntervention, intervention.tempsHeures, intervention.commentaire, technicien.prenom, technicien.nom, origine.libelle from [intervention] inner join technicien on intervention.idTechnicien = technicien.idTechnicien inner join origine on intervention.idOrigine = origine.idOrigine;

router.get('/:idIntervention', (req, res, next) => {
	const idIntervention = req.params.idIntervention;
	mysqlConnexion.query('select * from intervention where idIntervention = ' + idIntervention, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.get('/', (req, res, next) => {
	mysqlConnexion.query('select * from intervention', (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.post('/', (req, res, next) => {
	console.log(req.body);
	const intervention = {
		dateHeureIntervention: req.body.dateHeureIntervention,
		tempsHeures: req.body.tempsHeures,
		commentaire: req.body.commentaire,
		idTechnicien: req.body.idTechnicien,
		idContrat: req.body.idContrat,
		idOrigine: req.body.idOrigine
	};
	if (intervention.dateHeureIntervention && intervention.tempsHeures && intervention.commentaire && intervention.idTechnicien && intervention.idContrat && intervention.idOrigine) {
		mysqlConnexion.query('INSERT INTO intervention (dateHeureIntervention, tempsHeures, commentaire, idTechnicien, idContrat, idOrigine) values (' + "'" + intervention.dateHeureIntervention + "'" + "," + "'" + intervention.tempsHeures + "'" + "," + "'" + intervention.commentaire + "','" + intervention.idTechnicien + "','" + intervention.idContrat + "','" + intervention.idOrigine + "')" , (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).json({err});
			} else {
				res.status(201).json({
					message: "Matériel ajouté",
					data
				});
			}
		});
	} else {
		res.status(500).json({
			message: "Entrez des identifiants"
		});
	}
});

module.exports = router;
