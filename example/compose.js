var koa = require('koa');
var compose = require('koa-compose');
var dom = require('..');

var app = koa();
var layout = dom(__dirname + '/layout.html');

function layout(fn) {
  return compose([layout, fn]);
}

app.use(layout(function(next) {
  return function *() {
    yield next;
    this.dom['#foo'] = 'bar';
    this.dom['#bar'] = 'baz';
  }
}));

app.listen(8000, function() {
  console.log('open http://localhost:8000/');
});