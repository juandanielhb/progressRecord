'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var personSchema = schema({
    name:String,
    surname:String,
    address:String,
    telephone:String,
    email:{type:String,unique:true},
    progress: {type: [schema.ObjectId], ref: 'Progress'},
});

module.exports = mongoose.model('Person', personSchema);