var koa = require('koa');
var dom = require('..');

var app = koa();
var layout = dom(__dirname + '/layout.html');

app.use(layout);

app.use(function(next) {
  return function *() {
    yield next;
    this.dom['#foo'] = 'bar';
    this.dom['#bar'] = 'baz';
  }
});

app.listen(8000, function() {
  console.log('open http://localhost:8000/');
});