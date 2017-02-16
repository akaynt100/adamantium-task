var express = require('express')
var fs = require('fs');
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = express();
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/public/assets/json/data.json", function(req, res) {
  res.end(readJsonFileSync("/public/assets/json/data.json"))
})

app.get("/public/assets/json/details.json", function(req, res) {
  res.end(readJsonFileSync("/public/assets/json/details.json"))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})


function readJsonFileSync(filepath, encoding){

  if (typeof (encoding) == 'undefined'){
    encoding = 'utf8';
  }
  var file = fs.readFileSync(__dirname + '/' + filepath, encoding);
  return file;
}
