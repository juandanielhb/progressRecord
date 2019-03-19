'use strict'

let express = require('express');
let technologyController = require('../controllers/technology.controller');

let api = express.Router();

api.post('/technology', technologyController.saveTechnology);
api.delete('/technology/:id', technologyController.removeTechnology);
api.get('/technologies', technologyController.getTechnologies);

module.exports = api;