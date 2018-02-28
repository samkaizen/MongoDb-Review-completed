const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const BookSchema = new Schema({
     title : String,
     pages : Number,
 
});

const AuthorSchema = new Schema({
     name : String,
     age : Number,
     // we expect the book to have a special Schema as well, this is how we nest Schemas in a relational way!
     books : [BookSchema]

});






const Author = mongoose.model('author', AuthorSchema );

module.exports = Author;




