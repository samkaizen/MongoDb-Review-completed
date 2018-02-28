const mongoose = require('mongoose');
const assert = require('assert');
const Author = require('../models/Author');

describe('Nesting records' , ()=>{

    beforeEach((done)=>{
 
        // we want to clean y=up this very collection befire each single test as we already done with the mariochars colelction
        mongoose.connection.collections.authors.drop(()=>{
            done();
        })

    })
   


    it(' Creating an author with sub-document', (done)=>{
      
         let pat= new Author({
             name : 'Patrick',
              books : [
                  {title : 'Name of Wind', pages : 500}
              ]
         });

         pat.save().then(()=>{

            assert (!pat.isNew);
            done();

         })

         


        });
        it('Push a new Books into the array', (done)=>{
      
            let pat= new Author({
                name : 'Patrick',
                 books : [
                     {title : 'Name of Wind', pages : 500}
                 ]
            });
   
            pat.save().then(()=>{
   
               Author.findOne({name :'Patrick'}).then((record)=>{
                //Pushing a new Object to the array of books
                record.books.push({title : "The Wise man's Madness", pages : 555});
                //saving the new record
                record.save().then(()=>{
                   assert(record.books.length === 2);
                   done();
                   // we can do so like this as well => but this is lil bit longer
                   /*
                    Author.findOne({name : 'Patrick'}).then(result=>{
                        assert(result.books.length === 2);
                        done();
                    });
                    */
                });
               
                    
               });
   
            });
   
            
   
   
           });
           
        

    });



