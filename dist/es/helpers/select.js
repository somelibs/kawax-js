"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = select;
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var argsToArray = function argsToArray() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return _lodash["default"].isArray(_lodash["default"].first(args)) ? _lodash["default"].first(args) : args;
};
var parsePathArray = function parsePathArray(args) {
  var paths = argsToArray(args);
  var parsedPath = [];
  _lodash["default"].each(paths, function (path) {
    parsedPath.push(_lodash["default"].isString(path) ? path.split('.') : path);
  });
  return _lodash["default"].flatten(parsedPath);
};
function match(source, selector) {
  return _lodash["default"].filter(source, function (item) {
    return _lodash["default"].isMatch(item, selector);
  });
}
function select(source) {
  var value = source;
  var currentPath = [];
  var primaryKey = 'id';
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var pathArray = parsePathArray(args);
  _lodash["default"].each(pathArray, function (selector) {
    currentPath.push(selector);
    if (_lodash["default"].isArray(value)) {
      if (_lodash["default"].isString(selector)) {
        value = _lodash["default"].find(value, function (item) {
          return item[primaryKey] === selector;
        });
      } else if (_lodash["default"].isPlainObject(selector)) {
        value = match(value, selector);
      }
    } else {
      value = value ? _lodash["default"].get(value, selector) : undefined;
    }
  });
  return value;
}
//# sourceMappingURL=select.js.map