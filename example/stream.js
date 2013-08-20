var koa = require('koa');
var dom = require('..');
var fs = require('fs');

var app = koa();
var layout = dom(__dirname + '/layout.html');

app.use(layout);

app.use(function(next) {
  return function *() {
    yield next;
    this.dom['#foo'] = fs.createReadStream(__dirname + '/lipsum.txt');
    this.dom['#bar'] = fs.createReadStream(__dirname + '/lipsum.txt');
  }
});

app.listen(8000, function() {
  console.log('open http://localhost:8000/');
});