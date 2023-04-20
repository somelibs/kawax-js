"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
var _reactRedux = require("react-redux");
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _Store = _interopRequireDefault(require("./Store"));
var _Router = _interopRequireDefault(require("./instance/Router"));
var _Context = _interopRequireDefault(require("./instance/Context"));
var _Runtime = require("./instance/Runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Core = /*#__PURE__*/function (_Smart) {
  _inherits(Core, _Smart);
  var _super = _createSuper(Core);
  function Core() {
    _classCallCheck(this, Core);
    return _super.apply(this, arguments);
  }
  _createClass(Core, [{
    key: "initialize",
    value: function initialize(env) {
      var htmlRoot = document.getElementById(this.htmlRoot) || document.body;
      var ReactContext = this._providerRenderer();
      (0, _reactDom.render)(ReactContext, htmlRoot);
    }
  }, {
    key: "_providerRenderer",
    value: function _providerRenderer() {
      return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
        store: this.store.internal
      }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
        store: this.store
      }, this._routerRenderer()));
    }
  }, {
    key: "_routerRenderer",
    value: function _routerRenderer() {
      var ReactRouter = this.router;
      if (this.withRouter === true) {
        return /*#__PURE__*/_react["default"].createElement(ReactRouter, {
          history: this.history,
          historyHook: this.historyHook
        }, /*#__PURE__*/_react["default"].createElement(this.root));
      }
      return /*#__PURE__*/_react["default"].createElement(this.root);
    }
  }], [{
    key: "init",
    value: function init() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _construct(this, args);
    }
  }]);
  return Core;
}(_Smart2["default"]);
_defineProperty(Core, "defaults", function (options) {
  return (0, _Runtime.setRuntime)(_objectSpread(_objectSpread({}, options), {}, {
    context: options.context || _Context["default"],
    name: options.name || 'App',
    history: options.history || undefined,
    historyHook: options.historyHook || undefined,
    htmlRoot: options.htmlRoot || false,
    reducer: options.reducer || function (state) {
      return state;
    },
    root: options.root || function () {
      return /*#__PURE__*/_react["default"].createElement('div', null, 'It works!');
    },
    router: options.router || _Router["default"],
    store: new _Store["default"]({
      name: options.name,
      reducer: options.reducer,
      customMiddlewares: options.customMiddlewares
    }),
    withRouter: options.withRouter !== false
  }));
});
var _default = Core;
exports["default"] = _default;