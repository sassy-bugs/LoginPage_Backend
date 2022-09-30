const mongoose = require('mongoose');
const { Schema } = mongoose;
const accountSchema = new Schema({
    username: String,
    password: String,
    

    // lastAuthentication: Boolean,
    lastAuth: Date,
});

mongoose.model('accounts', accountSchema);