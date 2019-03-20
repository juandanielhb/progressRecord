'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var technologySchema = schema({
    name:{type: String, unique:true}, 
    category:String
});

module.exports = mongoose.model('Technology', technologySchema);