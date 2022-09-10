const mongoose = require('mongoose');
const Score = mongoose.model('scores');

module.exports = app => {
app.get('/score' , async(req, res) => {
    const { rUserID, rScore } = req.query;
     if(rUserID == null || rScore == null)
     {
        res.send("Invalid Credentials");
        return;
     }
     var userScore = await Score.findOne({ userID: rUserID });
     if(userScore == null){
        console.log('Saving score...');
         var newAccount =new Score({
            userID: rUserID,
            score : rScore,
         });
         await newAccount.save();
         res.send(newAccount);
         return;
     } else {
            userScore.score = rScore;
            await userScore.save();
            res.send(userScore);
            console.log('Updating data...');
            return;
     }
    //  res.send("Invalid Credentials");
    //     return;
});
}