const mongoose = require('mongoose');

const databasename= "txtomatic"
const url  =`mongodb+srv://kartikeyasthana9:19043101006492@cluster0.rxnvxvb.mongodb.net/${databasename}?retryWrites=true&w=majority`

// connected to database
// shortcut - thenc
// async function- returns a promise 
mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;

// 1. Asynchronous - simultaneously
// 2. Synchronous - one by one task