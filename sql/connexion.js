const mysql = require('mysql');

const configMysql = require('./configMysql');

const connexion = mysql.createConnection({
	host: configMysql.host,
	user: configMysql.user,
	password: configMysql.password,
	database: configMysql.database
});

connexion.connect();


module.exports = connexion;