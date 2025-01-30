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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Core = /*#__PURE__*/function (_Smart) {
  function Core() {
    _classCallCheck(this, Core);
    return _callSuper(this, Core, arguments);
  }
  _inherits(Core, _Smart);
  return _createClass(Core, [{
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
var _default = exports["default"] = Core;
//# sourceMappingURL=Core.js.map