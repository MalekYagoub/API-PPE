const express = require ('express');
const router = express.Router();
const mysqlConnexion = require('../../sql/connexion');

router.get('/', (req, res, next) => {
	mysqlConnexion.query('select * from typeMateriel', (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.get('/:idTypeMateriel', (req, res, next) => {
	const idTypeMateriel = req.params.idTypeMateriel;
	mysqlConnexion.query('select * from typeMateriel where idTypeMateriel = ' + idTypeMateriel, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.post('/', (req, res, next) => {
	const designationtypeMateriel = req.body.designation;
	if (designationtypeMateriel) {
		mysqlConnexion.query('insert into typeMateriel (designation) values (' + "'" + designationtypeMateriel + "')"  , (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).json({err});
			}
			res.status(200).json({
				message: "Type de matériel ajouté.",
				data});
		});
	} else {
		res.status(500).json({
			message: "Entrez des identifiants"
		});
	}
});


module.exports = router;