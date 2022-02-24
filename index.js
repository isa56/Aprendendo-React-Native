const express = require('express');
const app = express();
const db = require('./config/db');
const consign = require('consign');

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app);


app.db = db;

// localhost:3000
app.listen(3000, () => {
    console.log("Backend funcionando");
});


/* *************** AULA RESUMO DE EXPRESS
const bodyParser = require('body-parser');

app.use(bodyParser.json());


// requisição / resposta
app.get('/', (req, res, next) => {
    console.log("Get 1");
    res.status(200).send("Meu backend");
    next();
})


app.get('/', (req, res) => {
    console.log("Get 2");
    res.status(200).send("Meu backend");
})

// localhost:3000/blabla/valor
app.get('/blabla/:valor', (req, res) => {
    console.log("blabla");
    res.status(200).send('Valor passado: ' + req.params.valor);
    next();
})

// localhost:3000/testequery?nome=Isadora
app.get('/testequery/:valor', (req, res) => {
    console.log("aobaa");
    res.status(200).send('Valor passado: ' + req.query.nome + " " + req.query.sobrenome);
})
*/