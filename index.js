const express = require ('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.get('/hi', (req, res) => {
  console.log('hit')
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})