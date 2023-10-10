// Create web server
// Create a route for /comment and return a JSON object
// Start the server on port 3000
// Test the route by visiting http://localhost:3000/comment

var express = require('express');
var app = express();

app.get('/comment', function(req, res) {
    res.json({ message: "Bears. Beets. Battlestar Galactica." });
});

app.listen(3000, function() {
    console.log("App is listening on port 3000.");
});