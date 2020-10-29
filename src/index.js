var express = require('express');
var cors = require('cors')
var app = express()
const logger = require('morgan')

app.use(cors())
app.use(logger('dev'))
app.get('/api', function (req, res) {
  res.send({ message: 'Hello World!!'});
});

app.get('/healthcheck', function (req, res) {
  res.send("test");
});

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});