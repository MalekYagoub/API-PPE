const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Serveur sur le port: ' + port);
});