'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var personSchema = schema({
    name:String,
    surname:String,
    address:String,
    telephone:String,
    email:String,
    skills: [
        {
           technology:{
               type:schema.ObjectId, 
               ref: 'Technology'
            },
            percentage:Number
        }
    ]

});

     


module.exports = mongoose.model('Person', personSchema);