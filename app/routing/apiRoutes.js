var friends = require('../data/friends.js');

module.exports = function(app){
  app.get('/api/friends', function(req,res){
    res.json(friends);
  });
  app.post('/api/friends', function(req,res){ 
    var userScores = req.body.scores;
    console.log (req.body.scores);

  });
};
