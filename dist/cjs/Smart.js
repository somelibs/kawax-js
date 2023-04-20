"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _includes2 = _interopRequireDefault(require("lodash/includes"));
var _pickBy2 = _interopRequireDefault(require("lodash/pickBy"));
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  _createClass(Smart, [{
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
      var props = (0, _pickBy2["default"])(statics, function (property, key) {
        return !(0, _includes2["default"])(EXCLUDE_STATIC, key);
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
  return Smart;
}();
_defineProperty(Smart, "defaults", false);
var _default = Smart;
exports["default"] = _default;