
const mongoose = require('mongoose');

function runDB (){
    
const connectionString = 'mongodb://localhost/react-shopping-cart';
mongoose.connect(connectionString,{
    useNewUrlparser: true,
    useUnifiedTopology: true
}).then(res => console.log('connection Done'));
}

module.exports = runDB