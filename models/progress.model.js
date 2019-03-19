'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var progressSchema = schema({
    person:{type: schema.ObjectId, ref: 'Person'},
    technology:{type: schema.ObjectId, ref: 'Technology'},
    percentage:Number
});

module.exports = mongoose.model('Progress', progressSchema);