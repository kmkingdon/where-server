const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const app = express();


app.use(cors());
app.use(bodyParser.json());

const questions = require("./question.js");
const advanced = require("./advancedSearch.js");

app.get('/questions', function(request, response) {
  response.json(questions);
})

app.get('/advanced', function(request, response) {
  response.json(advanced);
});

function mergeData(questions, advanced) {
  let questionArray = Object.values(questions)[0];
  let advancedArray= Object.values(advanced)[0];
  let mergedArray= [];
  questionArray.forEach(function(item, i) {
    mergedArray.push(Object.assign(item, advancedArray[i]))
  })
  return mergedArray;
}

let mergedArray= mergeData(questions, advanced);

app.get('/merged', function(request, response) {
    response.json(mergedArray);
});

let suggestions = [];

app.post('/suggestions', function(request, response) {
  suggestions.push(request.body);
  response.json({
    "Success! Thank you for suggesting": request.body
  })
});

app.get('/suggestions', function(request, response) {
  response.json(suggestions);
});


app.listen(process.env.PORT ||3000);

module.exports= {
  mergeData
}
