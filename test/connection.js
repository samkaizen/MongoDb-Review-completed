//step 1 : autodescribing 
const mongoose  =  require('mongoose');

//USING ES6 Promises 
mongoose.Promise = global.Promise;


// we want to STOP MOCHA from running any Test before establishing the connection first to the DB so we will use a hook called before()
before((done)=>{
    //step 2 : connect to mongoDb

mongoose.connect('mongodb://localhost/test1');
// test1 is the database we want to connect to : if it exists go ahead and connect to it otherwise create one called test1

// step 3 : making connections
// 'open' and 'error' are a built-in event in mongoose

mongoose.connection.once('open', ()=>{
    console.log('Conenction has been made successfully !');
    done();
}).on('error', (error)=>console.log('connection error' , error));
    
});

// Dropping (DELETING ) the records before each single test so we Do not find copies of the same records over and over

beforeEach((done)=>{
    //before each single test (with mocha)  i want to delete all the records inside that collection called mariochars (in the marioCars.js the name was Not Plural => mariochar however the database is automatically pluralzing any single name of collections)
    mongoose.connection.collections.mariochars.drop(()=>{
        done();
    })

});