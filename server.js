// server.js
// where your node app starts
const express = require("express");
const app = express();
var cors = require('cors');
const https = require("https");
const fetch = require('node-fetch');
app.use(cors());

// our default array of api
const availableApi = [
  // "currentNews:- URL:: https://sardendu-news-feed-backend.glitch.me/currentNews",
  "API:- https://sardendu-news-feed-backend.glitch.me/latestNewsNY"
];

// make all the files in 'public' available
app.use(express.static("public"));

// routing
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// // send the default array of API to the webpage
// app.get("/currentNews", (request, response) => {
//   // express helps us take JS objects and send them as JSON
//   response.json('News will come soon')
//   // var url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-08&sortBy=publishedAt&apiKey=263ca21518db420e9e62552f3c034dcb';
//   //    fetch(url)
//   //   .then(res => {console.log(123 + JSON.stringify(res));response.json(res)})
//   //   .catch(err => console.error(err));
// });

// send the default array of API to the webpage
app.get("/availableAPI", (request, response) => {
  response.json(availableApi)
});

// send the latest news from New York Times
app.get("/latestNewsNY", (request, response) => {
  var url = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key='+ process.env.API_KEY;
    fetch(url)
    .then(result => result.json()) 
    .then(function(result) {
  response.json(result)
    })
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
