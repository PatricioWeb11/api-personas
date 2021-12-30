const Personas = require('../models/Personas');


// agregar un nuevo cliente
exports.nuevaPersona = async (req, res, next) => {
    const persona = new Personas(req.body);
    try {
        // almacenar el registro
        await persona.save();
        res.json({mensaje: 'Se agrego una nueva persona'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// mostrar todos los personas
exports.mostrarPersonas = async (req, res, next) => {
    try {
        const personas = await Personas.find({});
        res.json(personas);
    } catch (error) {
        console.log(error);
        next();
    }
}

// mostrar una persona
exports.mostrarPersona = async (req, res, next) => {
    try {
        const persona = await Personas.findById(req.params.idPersona);
        if(!persona){
            res.json({mensaje: 'Esa persona no esta registrada'});
            next();
        }else{
            res.json({persona});
        }
    } catch (error) {
        console.log(error);
        next();
    }
}

// actualizar una persona
exports.actualizarPersona = async (req, res, next) => {
    try {
        const persona = await Personas.findOneAndUpdate({_id: req.params.idPersona}, req.body, {
            new: true
        });
        res.json({mensaje: 'Persona actualizada con exito', persona});
    } catch (error) {
        console.log(error);
        next();
    }
}

// eliminar una persona
exports.eliminarPersona = async (req, res, next) => {
    try {
        await Personas.findOneAndDelete({_id: req.params.idPersona});
        res.json({mensaje: 'Persona eliminada con exito'});
    } catch (error) {
        console.log(error);
        next();
    }
}