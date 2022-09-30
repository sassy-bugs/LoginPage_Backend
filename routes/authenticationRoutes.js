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
     const date = new Date();
     var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
     offset= ISToffSet*60*1000;
     var ISTTime = new Date(date.getTime()+offset);
     var userAccount = await Account.findOne({ username: rUsername });

     //create
   //   if(userAccount == null){
   //      console.log('Create new account...');
   //       var newAccount =new Account({
   //          username : rUsername,
   //          password : rPassword,

   //          lastAuthentication : true,
   //          lastAuth : ISTTime
   //       });
   //       await newAccount.save();
   //       res.send(newAccount);
   //       return;
   //   } 
   //   else 
   //   {

   //avoid login with correct creds
      res.send("Invalid Credentials");

      //allow login only
         // if(rUsername != userAccount.username || rPassword != userAccount.password){
         //    res.send("Invalid Credentials");
         //    return;
         // }
         // //
         // if(userAccount.lastAuthentication)
         // {
         //    if(rPassword == userAccount.password )
         //    {
         //       userAccount.lastAuthentication = false;
         //       userAccount.lastAuth = ISTTime;
         //       await userAccount.save();
         //       res.send(userAccount);
         //       console.log('Retrieving account...');
         //       return;
         //    }
         // }
         // else
         // {
         //    res.send("Invalid move");
         //    return;
         // }
         // eol;
     }
   //}   
   );
}

