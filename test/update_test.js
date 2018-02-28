const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('updating Records' , ()=>{
    // because in the connectioon.js we made sure that the database is clean before each single test we have to lmake sure that we have some records in the dtabase to find !!
    // so thi sis why we use befireEach hook here
    let char;

    beforeEach((done)=>{
       char  = new MarioChar({
            name : 'Mario',
            weight : 50
        });
        // Creaing a record to find !! becasue the database is empty before Each single test!!
        char.save().then(()=>{
        
            done();
        });
        


    });

    it('Update One Record from the Database', (done)=>{
      
       
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name : 'Sammy'})
        .then(() =>{
            //Checking if there is still a record called char and if so we will asser that its name is Sammy Now
            // Notice that we can so the same with the following statement :
           // MarioChar.findOne({name: 'Mario'}) and this will have the same effect !!
             

            MarioChar.findOne({_id : char._id})
            // If the first step is ok that means that ther is no record with the name of Mario!! =>we should get null 
          .then((result)=>{
                assert(result.name === 'Sammy');
            });
        });
        done();
        

    });

                              // UPDATING OPERATORS SECTION :
    
    it('incrementing the weight of the records by one', (done)=>{
      
       // the empty {} is the fisrt arg means go ahead and grab all the records
        MarioChar.update({}, {$inc : {weight : 1}})
        .then(()=>{
            // becasue we only have one record called Mario in b4 each single test

             MarioChar.findOne({name : 'Mario'}).then(result =>{
                 assert(result.weight === 51 );
             });
        });

        done();
        

    });
    /*
    it('Multiplying  the weight of the records by 2', (done)=>{
      
        // the empty {} is the fisrt arg means go ahead and grab all the records
         MarioChar.update({}, {$mul : {weight : 2}})
         .then(()=>{
             // becasue we only have one record called Mario in b4 each single test
 
              MarioChar.findOne({name : 'Mario'}).then(result =>{
                  assert(result.weight === 100 );
              });
         });
 
         done();
         
 
     });
    
 */
/*
it('renaming a field', (done)=>{
      
    // the fied refers to the name, weight => those props we defined as configuration object of the Schema , in this example we rename the name property to be Pseudo Name
     MarioChar.update({}, {$rename : {name : 'Pseudo Name'}})
     .then(()=>{
         // becasue we only have one record called Mario in b4 each single test

          MarioChar.findOne({name : 'Mario'}).then(result =>{
              assert(result.name === 'Don Sam' );
          });
     });

     done();
     

 }); 
 it('set a value for a field', (done)=>{
      
    // this will have the same effect as MarioChar.update({},{name : 'THE HULK'})

     MarioChar.update({}, {$set : {name : 'THE HULK'}})
     .then(()=>{
         // becasue we only have one record called Mario in b4 each single test

          MarioChar.findOne({name : 'Mario'}).then(result =>{
              assert(result.name === 'THE HULK' );
              // wen we go to robomongo ctl + r we will see that the value of the name's field has been updated to be "THE HULK" 
          });
     });

     done();
     

 });

 
  */
});

