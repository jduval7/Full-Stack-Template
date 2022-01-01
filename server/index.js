/* eslint-disable import/extensions */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const Save = require('../database/index.js').save;
const GetMyRecipes = require('../database/index.js').getMyRecipes;

const app = express();
app.use(express.json());

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  
});

app.get('/', (req, res) => {
  
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
