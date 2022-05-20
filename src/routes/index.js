const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

module.exports = function () {
    // mostrar todos los usuarios
    router.get('/usuarios', usuarioController.mostrarUsuarios);

    // muestra un usuario en especifico
    router.get('/usuarios/:idUsuario', usuarioController.mostrarUsuario);

    // agrega nuevos usuarios
    router.post('/usuarios', usuarioController.nuevoUsuario);

    // actualizar usuario
    router.put('/usuarios/:idUsuario', usuarioController.actualizarUsuario);

    // eliminar usuario
    router.delete('/usuarios/:idUsuario', usuarioController.eliminarUsuario);

    return router;
}
