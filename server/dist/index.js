'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is just a fallback for now
_app2.default.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});

_app2.default.listen(process.env.PORT, function () {
  console.log('Running on localhost:' + process.env.PORT);
});