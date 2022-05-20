const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    email:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);