var express = require('express');
app = express();

app.get('/', function (req, res) {
  response = 'This is version 3 of the app.' + '\n';
  res.send(response);
});

app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

app.get('/mars2', function(req, res) {
  res.send('Hello Jhonatan!\n');
});

app.get('/jhonatan', function(req, res) {
  res.send('Hello Jhonatan Urbina Tolentino!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

