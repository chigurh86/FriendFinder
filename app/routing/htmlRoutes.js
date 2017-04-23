var path = require("path");

module.exports = function (app) {
  // app use will default to the homepage if nowhere else matches
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,"/../public/survey.html"));
  });
};
