"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolve;
function resolve(reference) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  // eslint-disable-next-line babel/no-invalid-this
  if (typeof reference === 'function') return reference.call.apply(reference, [this].concat(args));
  return reference;
}