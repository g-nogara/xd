const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');
const cors = require('cors');

//routers
const deckRouter = require('../routes/deck-router');
const cartaRouter = require('../routes/carta-router');
const usuarioRouter = require('../routes/usuario-router');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Permitindo conexões de outras origens
app.use(cors());

//Configurando a conexão com banco de dados
mongoose.connect(variables.Database.connection, { useNewUrlParser: true });

//Configurando as rotas
app.use('/api/deck', deckRouter);
app.use('/api/produto', cartaRouter);
app.use('/api/usuario', usuarioRouter);


//Exportando nossa Api
module.exports = app;


// Api -> MIDDLEWARES -> Rotas -> Controller -> Repository -> Banco