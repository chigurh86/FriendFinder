var friends = require("../data/friends.js");

module.exports = function(app){
  app.get("/api/friends", function(req,res) {
    console.log("We hit this endpoint");
    res.json(friends);
    });
    app.post("/api/friends", function(req, res){
      var newSurvey = req.body;
      var parsedScores  = [];
      for (var j = 0; j < friends.length; j++){
        for(var i = 0; i < 10; i++){
          parsedScores.push(parseInt(friends[0].scores[i]));
          }
      }
// splitting the users


      var sum = parsedScores.reduce(function(a, b) { return a + b; }, 0);
      console.log("this is the sum " + sum);
        totalDifference = 0;

        console.log("these are parsed " + parsedScores);

      console.log("total diff " + totalDifference);
      friends.push(newSurvey);
      res.json(newSurvey);
    });
    app.get(friends, function(req, res){
     res.json(friends);
   });

};
