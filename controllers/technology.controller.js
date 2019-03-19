'use strict'
let { ITEMS_PER_PAGE } = require('../config');

// let moment = require('moment');
let Technology = require('../models/technology.model');

function saveTechnology(req, res) {
    let params = req.body;
    let technology = new Technology();

    technology.name = params.name;
    technology.category = params.category;

    technology.save((err, technologyStored) => {
        if (err) return res.status(500).send({ message: 'Error en la petición. No se pudo almacenar la tecnología' });

        if (!technologyStored) return res.status(404).send({ message: 'No se almaceno la tecnología' });

        return res.status(200).send({ technology: technologyStored });

    });

}

function getTechnologies(req, res){
    
    Technology.find({}, (err, technologies) => {
        if(err) return res.status(500).send({ message: 'Error en la petición. No se pudieron consultar todas las tecnologías' });

        if (!technologies) return res.status(404).send({ message: 'No se encontraron tecnologías' });

        return res.status(200).send({ technologies });        
    })
}

function removeTechnology(req, res){
    let techid = req.params.id;
    
    Technology.findByIdAndRemove(techid, (err, technologyRemoved) => {

        if(err) return res.status(500).send({ message: `Error en la petición. No se pudo eliminar`});

        if (!technologyRemoved) return res.status(404).send({ message: 'No se encontro la tecnología a eliminar' });

        return res.status(200).send({ technology: technologyRemoved });        
    })
}


module.exports = {
    saveTechnology,
    removeTechnology,
    getTechnologies
}