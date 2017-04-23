var friends = require("../data/friends.js");

module.exports = function(app){
  app.get("/api/friends", function(req,res) {
    console.log("We hit this endpoint");
    res.json(friends);
    });
    app.post("/api/friends", function(req, res){
      var newSurvey = req.body;
      console.log(newSurvey);
      friends.push(newSurvey);
      res.json(newSurvey);
    });
    app.get(friends, function(req, res){
     res.json(friends);
   });

};
