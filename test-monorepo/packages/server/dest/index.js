"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var next = require('next');

var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev: dev
});
var handle = app.getRequestHandler();
app.prepare().then(function () {
  var server = (0, _express.default)();
  server.get('/detail/:id', function (req, res) {
    var actualPage = '/post';
    var queryParams = {
      title: req.params.id
    };
    app.render(req, res, actualPage, queryParams);
  });
  server.get('*', function (req, res) {
    return handle(req, res);
  });
  server.listen(3000, function (err) {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
}).catch(function (ex) {
  console.error(ex.stack);
  process.exit(1);
});
//# sourceMappingURL=index.js.map