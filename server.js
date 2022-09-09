const express = require('express');
// console.log(express);
const keys = require('./config/keys.js');

const app = express();
//setup DB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

//setup Model
require('./model/Account');

//setup the Routes
require('./routes/authenticationRoutes')(app);

app.listen(keys.port, () => {
    console.log("Listening on "+ keys.port);
});