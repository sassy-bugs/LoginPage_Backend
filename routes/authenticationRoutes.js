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

            lastAuthentication : true
         });
         await newAccount.save();
         res.send(newAccount);
         return;
     } 
     else 
     {
         if(rUsername != userAccount.username || rPassword != userAccount.password){
            res.send("Invalid Credentials");
            return;
         }
         //
         if(userAccount.lastAuthentication)
         {
            if(rPassword == userAccount.password )
            {
               userAccount.lastAuthentication = false;
               await userAccount.save();
               res.send(userAccount);
               console.log('Retrieving account...');
               return;
            }
         }
         else
         {
            res.send("Invalid move");
            return;
         }
     }
   }   
   );
}

