var friends = require("../data/friends.js");

module.exports = function(app){

  app.get("/api/friends", function(req,res) {
    res.json(friends);
    });

  app.post("/api/friends", function(req, res){
    var newSurvey = req.body;
    var userScores = req.body.scores;
    var match;
    var leastDiff = 100;
      for (var i = 0; i < friends.length; i++){
        let totalDifference = 0;
        for (var j = 0; j < friends[i].scores.length; j++){
          totalDifference += Math.abs(parseInt(req.body.scores[j]) - parseInt(friends[i].scores[j]));
        }
        if (totalDifference < leastDiff){
          leastDiff = totalDifference;
          match = friends[i];
          console.log(match)
        }
      }
      // var sum = parsedScores.reduce(function(a, b) { return a + b; }, 0);
      // console.log("this is the sum " + sum);
      friends.push(newSurvey);
      // res.json(newSurvey);
      res.json(match);
    });

    app.get(friends, function(req, res){
     res.json(friends);
    });
};
