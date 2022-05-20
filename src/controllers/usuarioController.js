const Usuario = require('../models/Usuario');

// mostrar todos los usuarios
exports.mostrarUsuarios = async (req, res, next) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        next();
    }
}

// mostrar un usuario
exports.mostrarUsuario = async (req, res, next) => {
    try {
        const usuario = await Usuario.findById(req.params.idUsuario);
        if(!usuario){
            res.json({mensaje: 'usuario no registrado'});
            next();
        }else{
            res.json({usuario});
        }
    } catch (error) {
        console.log(error);
        next();
    }
}

// agregar un nuevo usuario
exports.nuevoUsuario = async (req, res, next) => {
    const usuario = new Usuario(req.body);
    try {
        // almacenar el registro
        await usuario.save();
        res.json({mensaje: 'Se agrego un nuevo usuario'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// actualizar un usuario
exports.actualizarUsuario = async (req, res, next) => {
    try {
        const usuario = await Usuario.findOneAndUpdate({_id: req.params.idUsuario}, req.body, {
            new: true
        });
        res.json({mensaje: 'usuario actualizado con exito', usuario});
    } catch (error) {
        console.log(error);
        next();
    }
}

// eliminar un usuario
exports.eliminarUsuario = async (req, res, next) => {
    try {
        await Usuario.findOneAndDelete({_id: req.params.idUsuario});
        res.json({mensaje: 'usuario eliminado con exito'});
    } catch (error) {
        console.log(error);
        next();
    }
}