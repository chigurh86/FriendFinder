var friends = require("../data/friends.js");

module.exports = function(app){
  app.get("/api/friends", function(req,res) {
    console.log("We hit this endpoint");
    res.json(friends);
    });
    app.post("/api/friends", function(req, res){
      var newSurvey = req.body;
      for(var i = 0; i < friends.length; i++){
        console.log(friends[i].scores);
        var userScores = friends[i].scores;

        totalDifference = 0;
        for (var j = 0; j < friends[i].scores[j]; j++) {
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
          console.log("use score "+ userScores[j]);
          console.log("each score " + friends[i].scores[j])
      }
    }

      console.log("total diff " + totalDifference);
      friends.push(newSurvey);
      res.json(newSurvey);
    });
    app.get(friends, function(req, res){
     res.json(friends);
   });

};
