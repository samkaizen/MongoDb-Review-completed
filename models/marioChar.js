const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// this Schema is ONLY REQUIRED by mongoose NOT mongodb

// create a Schema for the mario chars 
const marioCharSchema = new Schema({
    name : String,
    weight : Number,
});




// Now Let's create a model (the collection of records ) based on the Schema we lready defined for the Project

const MarioChar = mongoose.model('mariochar', marioCharSchema );
// the first arguemt here is the name of the model = mariochar(and this will be Automatically Pluralized by mongo Db when we see it it in the data base), the second arguemt being the Schema that the record will be based on 
// do not forget that the model  = set of records based on a Schema

// the last step is to export our module

module.exports = MarioChar;

// so the whole idea here is that model is just a contructor of other object = the records



