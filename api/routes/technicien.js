const express = require ('express');
const router = express.Router();
const mysqlConnexion = require('../../sql/connexion');
const sha1 = require('sha1');

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

router.post('/inscription', (req, res, next) => { // INSCRIPTION
	const nom = req.body.nom;
	const prenom = req.body.prenom;
	const telephone = req.body.telephone;
	const email = req.body.email;
	const mdp = sha1(req.body.mdp);
	if (nom && prenom && telephone && email && mdp) {
		mysqlConnexion.query('insert into technicien (nom, prenom, telephone, email, mdp) values (' + "'" + nom + "','" + prenom + "','" + telephone + "','" + email + "','" + mdp + "')", (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).json({
					code: "no",
					message: "Erreur lors de l'inscription",
					err
				});
			} else {
				res.status(201).json({
					message: "Technicien ajouté",
					data
				});
			}
		})
	}
});

router.post('/connexion', (req, res, next) => { // CONNEXION
	const email = req.body.email;
	const mdp = sha1(req.body.mdp);
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