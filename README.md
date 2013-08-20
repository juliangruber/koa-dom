
# koa-dom

Dom templating for [koa](https://github.com/koajs/koa).

## Example

Given a layout file, make the app use it and set / stream html into dom selectors.

```js
var koa = require('koa');
var dom = require('koa-dom');
var fs = require('fs');

var app = koa();
var layout = dom(__dirname + '/layout.html');

app.use(layout);

app.use(function(next) {
  return function *() {
    yield next;
    this.dom['#foo'] = 'a sweet string';
    this.dom['#bar'] = fs.createReadStream(__dirname + '/lipsum.txt');
  }
});

app.listen(8000, function() {
  console.log('open http://localhost:8000/');
});
```

And the dom will be:

```html
<!-- ... -->
<span id="foo">a sweet string</span>
<span id="bar">Lorem ipsum dolor sit amet...</span>
<!-- ... -->
```

## API

### Dom(path)

A koa middleware that populates the context with `.dom`, an associative Array of dom selectors and strings / streams.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install koa-dom
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
