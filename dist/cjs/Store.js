"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _redux = require("redux");
var _lodash = _interopRequireDefault(require("lodash"));
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _log = _interopRequireDefault(require("./helpers/log"));
var _InternalReducer = _interopRequireDefault(require("./internal/InternalReducer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var Store = /*#__PURE__*/function (_Smart) {
  function Store() {
    var _this;
    _classCallCheck(this, Store);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Store, [].concat(args));
    _defineProperty(_this, "pendingActions", []);
    _defineProperty(_this, "dispatch", function (action) {
      _this.internal.dispatch(action);
      return _this.main.dispatch(action);
    });
    _defineProperty(_this, "subscribe", function (listener) {
      return _this.main.subscribe(listener);
    });
    _defineProperty(_this, "replaceReducer", function (nextReducer) {
      return _this.main.replaceReducer(nextReducer);
    });
    _defineProperty(_this, "getState", function () {
      return _this.main.getState();
    });
    _defineProperty(_this, "getInternalState", function () {
      return _this.internal.getState();
    });
    _defineProperty(_this, "_dispatch", function (action) {
      return _this.internal.dispatch(action);
    });
    return _this;
  }
  _inherits(Store, _Smart);
  return _createClass(Store, [{
    key: "initialize",
    value: function initialize(_ref) {
      var reducer = _ref.reducer,
        name = _ref.name,
        customMiddlewares = _ref.customMiddlewares;
      this.internal = this._createInternalStore(name);
      this.main = this._createMainStore(customMiddlewares, reducer, name);
      if (__DEV__) Object.assign(this, {
        pendingActions: []
      });
    }
  }, {
    key: "_combineMiddleware",
    value: function _combineMiddleware(customMiddlewares) {
      return function (getDefaultMiddleware) {
        var defaultMiddleware = getDefaultMiddleware({
          serializableCheck: false
        });
        return defaultMiddleware.concat(customMiddlewares);
      };
    }
  }, {
    key: "_createInternalStore",
    value: function _createInternalStore(name) {
      var internalReducer = _InternalReducer["default"]["export"]();
      var customMiddlewares = this._getMiddlewares([], true);
      return (0, _toolkit.configureStore)({
        middleware: this._combineMiddleware(customMiddlewares),
        reducer: internalReducer,
        devTools: __DEV__
      });
    }
  }, {
    key: "_createMainStore",
    value: function _createMainStore() {
      var customMiddlewares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var reducer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.reducer;
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return (0, _toolkit.configureStore)({
        middleware: this._combineMiddleware(customMiddlewares),
        reducer: reducer,
        devTools: __DEV__
      });
    }
  }, {
    key: "_getComposer",
    value: function _getComposer() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var internal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (__DEV__ && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        return global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: internal ? "Kawax@".concat(name) : name,
          latency: 1000,
          maxAge: 25
        });
      }
      return _redux.compose;
    }
  }, {
    key: "_getMiddlewares",
    value: function _getMiddlewares() {
      var customMiddlewares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var internal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var middlewares = _lodash["default"].compact(_lodash["default"].concat(_reduxThunk["default"], customMiddlewares));
      if (__DEV__ && !internal) {
        middlewares.push(this._logger.bind(this));
      }
      return middlewares;
    }
  }, {
    key: "_withCustomLogger",
    value: function _withCustomLogger(next, action) {
      var duration = null;
      if (action.status === 'pending') {
        this.pendingActions.push({
          id: action.id,
          startTime: performance.now()
        });
      }
      var payload = next(action);
      if (action.status !== 'pending') {
        var _$remove = _lodash["default"].remove(this.pendingActions, function (pendingAction) {
            return pendingAction.id === action.id;
          }),
          _$remove2 = _slicedToArray(_$remove, 1),
          initialAction = _$remove2[0];
        duration = performance.now() - (initialAction ? initialAction.startTime : 0);
      }
      if (action.log) {
        var output = this._formatLog(action, duration);
        if (action.status === 'error') {
          _log["default"].error.apply(_log["default"], _toConsumableArray(output).concat(['Action:', action]));
        } else if (action.status === 'success') {
          _log["default"].debug.apply(_log["default"], _toConsumableArray(output).concat(['\n ', action]));
        }
      }
      return payload;
    }
  }, {
    key: "_withSimpleLogger",
    value: function _withSimpleLogger(next, action) {
      var output = this._formatLog(_objectSpread({
        status: 'success',
        "class": next.constructor.name
      }, action), false);
      var payload = next(action);
      _log["default"].debug.apply(_log["default"], _toConsumableArray(output).concat(['\n', action]));
      return payload;
    }
  }, {
    key: "_logger",
    value: function _logger() {
      var _this2 = this;
      return function (next) {
        return function (action) {
          if (__DEV__) {
            if (action.id && action.status) {
              return _this2._withCustomLogger(next, action);
            }
            return _this2._withSimpleLogger(next, action);
          }
          return next(action);
        };
      };
    }
  }, {
    key: "_isDarkModeEnabled",
    value: function _isDarkModeEnabled() {
      return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, {
    key: "_getStyle",
    value: function _getStyle(status) {
      var darkMode = this._isDarkModeEnabled();
      var isError = status === 'error';
      if (darkMode) {
        return isError ? 'color: #fd4146; font-weight: bold;' : 'color: white; font-weight: bold;';
      }
      return isError ? 'color: #ff443a; font-weight: bold;' : 'color: black; font-weight: bold;';
    }
  }, {
    key: "_formatLog",
    value: function _formatLog(action, duration) {
      var className = String(action["class"]);
      var header = String(action.type);
      var status = action.status ? "".concat(action.status) : 'no-status';
      var style = this._getStyle(action.status);
      var time = duration ? "".concat(duration >= 1000 ? "".concat((duration / 1000).toFixed(2), "s") : "".concat(duration.toFixed(0), "ms")) : 'synchronous';
      return action.status === 'error' ? ["".concat(className, ": ").concat(status, " (").concat(header, ") (").concat(time, ")")] : ["%c".concat(className, ": ").concat(status, " (").concat(header, ") (").concat(time, ")"), style];
    }
  }]);
}(_Smart2["default"]);
var _default = exports["default"] = Store;
//# sourceMappingURL=Store.js.map