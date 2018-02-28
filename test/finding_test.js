const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Finding Records' , ()=>{
    // because in the connectioon.js we made sure that the database is clean before each single test we have to lmake sure that we have some records in the dtabase to find !!
    // so thi sis why we use befireEach hook here
    let char;

    beforeEach((done)=>{
       char  = new MarioChar({
            name : 'Mario'
        });
        // Creaing a record to find !! becasue the database is empty before Each single test!!
        char.save().then(()=>{
        
            done();
        });
        


    });

// it() is for testing a SINGLE BLOCK of code 
    it('Finding Mario record from the Database', (done)=>{
        // finding methods are used on the Model it self Not On the instances (on the records ) this is in contast with the saving methods (saving a record)
       
        MarioChar.findOne({name : 'Mario'})
        .then(result =>{
            assert(result.name === 'Mario');
        });

        done();
        

    });

    it('Find a record By Id', (done)=>{
        // The whole IDEA here is To CHECK if there is a record called char! and if there is a record with that name it should have an id property so this is the whole idea here 
        // if ther is a record in the database with the the id of char go ahead and assert that there is one 
        // tthe _id is not defined in the Schema , However this id is Automatically given by Mongo every time we save a record to the DB!
       
        MarioChar.findOne({_id: char._id}).then(result =>{
            // we have ti stringify the results => this is monogoose requirement
            assert(result._id.toString() === char._id.toString());
            console.log(` the id of the record we found is :  ${char._id.toString()}  `  );
            // this is the id from the console : 5a968a8b05c9f61fb8437795
            // so YES we found a record that caled char and this is its id : 5a968a8b05c9f61fb8437795
        });
        done();
        

    });

  
});

