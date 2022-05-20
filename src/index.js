const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/usuario-jwt', {
    useNewUrlParser: true
});
// crear servidor
const app = express();

// habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar cors
app.use(cors());

// puerto
app.listen(3001, () => {
    console.log('Servidor ejecutandose en el puerto 3001');
});

// rutas 
app.use('/', routes());