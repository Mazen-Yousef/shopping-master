const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/routes');
const orderRouter = require('./routes/orderRoutes');
const runDB = require('./confeg/db');




const app = express();

app.use(bodyParser.json());

app.use('/', productRouter);
app.use('/', orderRouter);



runDB();



app.listen(4000, () => {
    console.log('running on port 4000')
})


// orderModel





