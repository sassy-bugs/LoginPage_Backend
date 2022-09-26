const mongoose = require('mongoose');
const { Schema } = mongoose;
const scoreSchema = new Schema({
    username: String,
    score: Number,
    
    lastAuthentication: Date,
});

mongoose.model('scores', scoreSchema);