const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes');




const app = express();

app.use(bodyParser.json());

app.use('/', router);

const connectionString = 'mongodb://localhost/react-shopping-cart';
mongoose.connect(connectionString,{
    useNewUrlparser: true,
    useUnifiedTopology: true
}).then(res => console.log('connection Done'));





app.listen(4000, () => {
    console.log('running on port 4000')
})






