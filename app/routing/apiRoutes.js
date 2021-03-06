var allFriends = require('../data/friends.js');

module.exports = function(app){
  app.get('/api/friends', function(req,res){
    res.json(allFriends);
  });

  app.post('/api/friends', function(req,res){
    var newUser = req.body;
    var absoluteDiff = [];

    for(var i = 0; i < allFriends.length; i++) {
      var currentFriend = allFriends[i];
      var diffTotal = 0;

      for(var j=0; j<currentFriend.scores.length; j++){
        var currentDiff = Math.abs(parseInt(currentFriend.scores[j]) - parseInt(newUser.scores[j]));
        diffTotal+=currentDiff;
      }
      absoluteDiff[i] = diffTotal;
    }
    var bfFirstPotential = absoluteDiff[0];
    var bestFriend = 0;

    for(var k=0; k<absoluteDiff.length; k++){
      if(absoluteDiff[k] < bfFirstPotential){
        bestFriend = k;
      };
    };
    allFriends.push(newUser);
    res.json(allFriends[bestFriend]);

  });
};