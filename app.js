const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.json());

const events = require("./event.js");
const review = require("./review.js");

app.get('/events', function(request, response) {
  response.json(events);
})

app.get('/review', function(request, response) {
  response.json(review;
});

app.post('/add', function(request, response) {
  events.push(request.body);
  response.json({
    "Success! Thank you for suggesting": request.body
  })
});

app.post('/newreview', function(request, response) {
  reviews.push(request.body);
  response.json({
    "Success! Thank you for leaving a review!"
  })
});


app.listen(process.env.PORT ||3000);
