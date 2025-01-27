const express = require('express');
const app = express();

app.get('/', function (req, res) {
 // res.send('Hello, World!\n');
 res.send("This is version 3 of the app.' + '\n");
 
});
app.get('/mars', function (req, res) {
    res.send('Hello, Mars!\n');
  });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

module.exports = app;