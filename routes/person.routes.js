'use strict'

let express = require('express');
let personController = require('../controllers/person.controller');


let api = express.Router();

api.post('/register', personController.savePerson);


module.exports = api;