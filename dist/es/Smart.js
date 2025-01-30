"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var EXCLUDE_STATIC = ['export', 'build'];
var Smart = /*#__PURE__*/function () {
  function Smart(options) {
    _classCallCheck(this, Smart);
    _defineProperty(this, "state", {});
    this.props = this._defineProps();
    this._defineDetaults(options);
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return this.initialize.apply(this, [options].concat(args));
  }
  return _createClass(Smart, [{
    key: "initialize",
    value: function initialize() {
      return this;
    }
  }, {
    key: "setState",
    value: function setState() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      Object.assign(this.state, _resolve["default"].call.apply(_resolve["default"], [this, this.state].concat(args)));
      return this.state;
    }
  }, {
    key: "_defineProps",
    value: function _defineProps() {
      var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prototype = instance || Object.getPrototypeOf(this);
      var parent = Object.getPrototypeOf(prototype);
      var statics = prototype.constructor;
      var props = _lodash["default"].pickBy(statics, function (property, key) {
        return !_lodash["default"].includes(EXCLUDE_STATIC, key);
      });
      var inheritedProps = parent instanceof Smart ? this._defineProps(parent) : {};
      return _objectSpread(_objectSpread({}, inheritedProps), props);
    }
  }, {
    key: "_defineDetaults",
    value: function _defineDetaults(options) {
      var defaults = _resolve["default"].call(this, this.props.defaults, options, this.props);
      Object.assign(this, defaults);
    }
  }, {
    key: "_call",
    value: function _call() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this.setState.apply(this, args);
      return this.call ? _resolve["default"].call.apply(_resolve["default"], [this, this.call].concat(args)) : false;
    }
  }], [{
    key: "export",
    value: function _export() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var instance = _construct(this, args);
      return function () {
        return instance._call.apply(instance, arguments);
      };
    }
  }, {
    key: "build",
    value: function build(options) {
      var _this = this;
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      return function (context) {
        return _construct(_this, [_objectSpread(_objectSpread({}, options), context)].concat(args));
      };
    }
  }]);
}();
_defineProperty(Smart, "defaults", false);
var _default = exports["default"] = Smart;
//# sourceMappingURL=Smart.js.map