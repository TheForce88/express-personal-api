// require express and other modules
var express = require('express'),
    app = express(),
    db = require('./models');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * PROFILE DATA *
 ************/

var profile = [
  {
    _id: 1,
    name: "Elaine",
    githubLink: "https://github.com/TheForce88",
    githubProfileImage: "https://github.com/TheForce88",
    personalSiteLink: "https://github.com/TheForce88",
    currentCity: "San Jose",
    pets: [ { name: "hershey", type: "dog", breed: "mutt" } ],
    hobbies: [ { name: "soccer", type: "sport" }, { name: "tennis", type: "sport"}, ]
  }
];

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://elainely.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function(req, res){
  console.log("I can see your profile!");
  res.json({
    _id: 1,
    name: "Elaine",
    githubLink: "https://github.com/TheForce88",
    githubProfileImage: "https://github.com/TheForce88",
    personalSiteLink: "https://github.com/TheForce88",
    currentCity: "San Jose",
    pets: [ { name: "hershey", type: "dog", breed: "mutt" } ],
    hobbies: [ { name: "soccer", type: "sport" }, { name: "tennis", type: "sport"}, ]
  });
});

app.get('/api/project', function(req, res) {
  let projectName = req.params.name;
  db.Project.find({ name: projectName })
    console.log("projects page up and running")
    .exec(function(err, succ) {
      if(err){return console.log(err);
      }
      res.json({ "project": succ });
    });
});

/**********
 * SERVER *
 **********/



// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
