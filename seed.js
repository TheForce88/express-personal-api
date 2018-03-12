// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
 var db = require('./models');
 var new_project = {
   name: "Monument",
   description: "mock blog page",
   githubRepoUrl: "https://github.com/TheForce88/monument",
   deployedUrl: "https://github.com/TheForce88/monument",
   Screenshot: ""
 };

 db.Project.remove({}, function(err, books) {
   if(err) {
     console.log('Error occured in remove', err);
   } else {
     console.log('remove all books');

     db.Project.create()
   }
 })
