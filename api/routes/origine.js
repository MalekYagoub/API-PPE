const express = require ('express');
const router = express.Router();
const mysqlConnexion = require('../../sql/connexion');

router.get('/', (req, res, next) => {
	mysqlConnexion.query('select * from origine', (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

router.get('/:idOrigine', (req, res, next) => {
	const idOrigine = req.params.idOrigine;
	mysqlConnexion.query('select * from origine where idOrigine = ' + idOrigine, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).json({err});
		}
		res.status(200).json(data);
	});
});

module.exports = router;