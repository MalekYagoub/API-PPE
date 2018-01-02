const express = require ('express');
const router = express.Router();
const mysqlConnexion = require('../../sql/connexion');

router.get('/', (req, res, next) => {
	mysqlConnexion.query('select * from technicien', (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.get('/:idTechnicien', (req, res, next) => {
	const idTechnicien = req.params.idTechnicien;
	mysqlConnexion.query('select * from contrat where idTechnicien = ' + idTechnicien, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.post('/connexion', (req, res, next) => { // CONNEXION
	const email = req.body.email;
	const mdp = req.body.mdp;
	if (email && mdp) {
		mysqlConnexion.query('select * from technicien where email = ' + "'" + email + "'" + ' and mdp = ' + "'" + mdp + "'", (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).json({
					code: "no",
					message: "Erreur lors de la connexion",
					err
				});
			}
			if (data.length > 0) {
				res.status(200).json({
					code: "ok",
					data
				});
			} else {
				res.status(500).json({
					code: "no",
					message: "Mauvais identifiants",
					data
				});
			}
		});
	} else {
		res.status(500).json({
			code: "no",
			message: "Entrez des identifiants"
		});
	}
});

module.exports = router;