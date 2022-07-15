require('dotenv').config();

const express = require('express');

const configExpress = require('./config/express');

const app = express();

configExpress(app);

app.get('/', (req, res) => {
  res.send('Hello, response to GET request /');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
});
