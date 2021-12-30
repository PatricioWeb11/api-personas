const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

module.exports = function(){
    // agrega nuevas personas
    router.post('/personas', personaController.nuevaPersona);

    // mostrar todas los personas
    router.get('/personas', personaController.mostrarPersonas);

    // muestra una persona en especifico
    router.get('/personas/:idPersona', personaController.mostrarPersona);

    // actualizar perssona
    router.put('/personas/:idPersona', personaController.actualizarPersona);

    // eliminar persona
    router.delete('/personas/:idPersona', personaController.eliminarPersona);

    return router;
}
