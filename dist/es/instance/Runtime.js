"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRuntime = exports["default"] = void 0;
var runtime = Object.create({});
var setRuntime = exports.setRuntime = function setRuntime(object) {
  return Object.assign(runtime, object);
};
var _default = exports["default"] = function _default() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return object ? runtime[object] : runtime;
};
//# sourceMappingURL=Runtime.js.map