"use strict";

exports.__esModule = true;
exports.setRuntime = exports["default"] = void 0;
var runtime = Object.create({});
var setRuntime = function setRuntime(object) {
  return Object.assign(runtime, object);
};
exports.setRuntime = setRuntime;
var _default = function _default() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return object ? runtime[object] : runtime;
};
exports["default"] = _default;