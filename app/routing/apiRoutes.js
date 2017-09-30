var allfriends = require('../data/friends.js');

module.exports = function(app){
  app.get('/api/friends', function(req,res){
    res.json(allfriends);
  });
  app.post('/api/friends', function(req,res){
    var bestFriend = 0;    
    var userScores = req.body.scores;
    var allScores = [];
    var absoluteDiff = 0;
  //   for(var i=0; i<friends.length; i++){
  //     for(var j=0; j<userScores.length; j++){
  //       absoluteDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j])));
  //     }
  //     allScores.push(absoluteDiff);
  //   }
  //   for(var i=0; i<allScores.length; i++){
  //     if(allScores[i] <= allScores[bestFriend]){
  //       bestFriend = i;
  //     }
  //   }
  //   var bfIdentified = friends[bestFriend];
  //   res.json(bfIdentified);
  //   friends.push(req.body);

  });
};