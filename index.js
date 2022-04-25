const Questionsquery = require('./server/server.js')
const express = require ('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.get('/qa/questions/:question_id', (req, res) => {
  Questionsquery().then((data) => {
    console.log('here is the data', data)
  })
  console.log(req.query);
  console.log(req.params);
  res.send('Hello World!');
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  console.log('this is second one', req.query);
  console.log('this is second one', req.params);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
