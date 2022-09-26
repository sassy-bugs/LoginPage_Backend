const mongoose = require('mongoose');
const Score = mongoose.model('scores');

module.exports = app => {
app.get('/score' , async(req, res) => {
    const { rUserName, rScore } = req.query;
     if(rUserName == null || rScore == null)
     {
        res.send("Invalid Credentials");
        return;
     }
     const date = new Date();
     var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
     offset= ISToffSet*60*1000;
     var ISTTime = new Date(date.getTime()+offset);
     var userScore = await Score.findOne({ username: rUserName });
     if(userScore == null){
        console.log('Saving score...');
         var newAccount =new Score({
            username: rUserName,
            score : rScore,
            lastAuthentication : ISTTime
                    
         });
         await newAccount.save();
         res.send(newAccount);
         return;
     } else {
            // userScore.score = rScore;
            // await userScore.save();
            res.send(rScore);
            //userScore.lastAuthentication = Date.now()
            console.log('Score already submitted');
            return;
     }
    //  res.send("Invalid Credentials");
    //     return;
});
}