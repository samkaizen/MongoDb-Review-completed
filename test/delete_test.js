const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Deleting Records' , ()=>{
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

    it('Delete One Record from the Database', (done)=>{
      
       
        MarioChar.findOneAndRemove({name: 'Mario'})
        .then(() =>{
            //Checking if there is still a record with the name of Mario
            MarioChar.findOne({name : 'Mario'})
            // If the first step is ok that means that ther is no record with the name of Mario!! =>we should get null 
          .then((result)=>{
                assert(result === null);
            })
        });
        done();
        

    });
    

  
});

