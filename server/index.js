/* eslint-disable import/extensions */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
//imports the database connection for sql queries
//var db = require('../database-mysql');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());


app.post('/', (req, res) => {
  
});

app.get('/', function (req, res) {
  // SAMPLE query request from server to the db (SQL QUERY)
  // db.getAllUsers((err, results) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(results);
  //   }
  // });
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
