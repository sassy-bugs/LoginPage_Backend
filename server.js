require("dotenv").config();
const express = require('express');
// console.log(express);
//const keys = require('./config/keys.js');
const PORT = process.env.PORT || 13756;

const app = express();
//setup DB
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

//setup Model
require('./model/Account');
require('./model/Score');

//setup the Routes
require('./routes/authenticationRoutes')(app);
require('./routes/scoreRoutes')(app);

app.listen(PORT, () => {
    console.log("Listening on "+ PORT);
});