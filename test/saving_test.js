const assert = require('assert');
const MarioChar = require('../models/marioChar');


describe('Saving Records' , ()=>{

   const savingRecs = ()=>{
       
    it('Saves some records to the Database', (done)=>{
       
        
        const char  = new MarioChar({
            name : 'Mario',
            weight : 77,
            // if we add other properties here this will Throw NO ERROR whatsoever by Mocha , bUT oNTHE DATABASE those new properties WILL NOT SHOW UP Simply!!
        });
        // saving the record with mongoose : this is async in nature
        char.save().then(()=>{
            // After saving our record we want Now assert that the record has been saved successfully 
            assert(char.isNew === false);
            // if the char.isNew === false that means that the record is not new anymore and it has been saved to DB
            // now we can run npm run test
         
            //done();
    });
    const char2  = new MarioChar({
        name : 'Luigi',
        weight : 99,

    });
    // saving the record with mongoose : this is async in nature
    char2.save().then(()=>{
        // After saving our record we want Now assert that the record has been saved successfully 
        assert(char2.isNew === false);
        // if the char.isNew === false that means that the record is not new anymore and it has been saved to DB
        // now we can run npm run test
     
        done();
});
     

});
   }
   savingRecs();


    
});

