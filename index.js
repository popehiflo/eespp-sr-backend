require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, response to GET request /');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
});
