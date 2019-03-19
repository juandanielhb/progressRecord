'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var technologySchema = schema({
    name:String,
    category:String
});

module.exports = mongoose.model('Technology', technologySchema);