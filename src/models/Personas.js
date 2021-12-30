const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personasSchema = new Schema({
    nombre:{
        type: String,
        trim: true
    },
    apellido:{
        type: String,
        trim: true
    },
    edad:{
        type: String,
        trim: true
    },
});

module.exports = mongoose.model('Personas', personasSchema);