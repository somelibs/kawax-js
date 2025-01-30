"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = exports.StyleSheet = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _noImportant = require("aphrodite/no-important");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _Aphrodite$extend = _noImportant.StyleSheet.extend([{
    selectorHandler: function selectorHandler(selector, baseSelector, generateSubtreeStyles) {
      var nestedTags = [];
      var selectors = selector.split(',');
      _lodash["default"].each(selectors, function (subselector, key) {
        if (selector[0] === '&') {
          var tag = key === 0 ? subselector.slice(1) : subselector;
          var nestedTag = generateSubtreeStyles("".concat(baseSelector, " ").concat(tag).replace(/ +(?= )/g, ''));
          nestedTags.push(nestedTag);
        }
      });
      return _lodash["default"].isEmpty(nestedTags) ? null : _lodash["default"].flattenDeep(nestedTags);
    }
  }]),
  StyleSheet = exports.StyleSheet = _Aphrodite$extend.StyleSheet,
  css = exports.css = _Aphrodite$extend.css;
//# sourceMappingURL=aphrodite.js.map