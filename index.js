var hyperstream = require('hyperstream');
var fs = require('fs');

module.exports = dom;

function dom(path) {
  return function *(next) {
    this.dom = {};
    yield next;
    var hs = hyperstream(this.dom);
    fs.createReadStream(path).pipe(hs);
    this.body = hs;
  }
}
