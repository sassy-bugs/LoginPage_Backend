const mongoose = require('mongoose');
const { Schema } = mongoose;
const scoreSchema = new Schema({
    userID: String,
    score: Number,
    
});

mongoose.model('scores', scoreSchema);