const mongoose = require('mongoose');
const Account = mongoose.model('accounts');

module.exports = app => {
app.get('/account' , async(req, res) => {
    const { rUsername, rPassword } = req.query;
     if(rUsername == null || rPassword == null)
     {
        res.send("Invalid Credentials");
        return;
     }
     var userAccount = await Account.findOne({ username: rUsername });
     if(userAccount == null){
        console.log('Create new account...');
         var newAccount =new Account({
            username : rUsername,
            password : rPassword,

            lastAuthentication : Date.now()
         });
         await newAccount.save();
         res.send(newAccount);
         return;
     } else {
        if(rPassword == userAccount.password){
            userAccount.lastAuthentication = Date.now();
            await userAccount.save();
            res.send(userAccount);
            console.log('Retrieving account...');
            return;
        }
     }
     res.send("Invalid Credentials");
        return;


    
});
}
