"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _remove4 = _interopRequireDefault(require("lodash/remove"));
var _concat2 = _interopRequireDefault(require("lodash/concat"));
var _compact2 = _interopRequireDefault(require("lodash/compact"));
var _redux = require("redux");
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _log = _interopRequireDefault(require("./helpers/log"));
var _InternalReducer = _interopRequireDefault(require("./internal/InternalReducer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var Store = /*#__PURE__*/function (_Smart) {
  _inherits(Store, _Smart);
  var _super = _createSuper(Store);
  function Store() {
    var _this;
    _classCallCheck(this, Store);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "pendingActions", []);
    _defineProperty(_assertThisInitialized(_this), "dispatch", function (action) {
      _this.internal.dispatch(action);
      return _this.main.dispatch(action);
    });
    _defineProperty(_assertThisInitialized(_this), "subscribe", function (listener) {
      return _this.main.subscribe(listener);
    });
    _defineProperty(_assertThisInitialized(_this), "replaceReducer", function (nextReducer) {
      return _this.main.replaceReducer(nextReducer);
    });
    _defineProperty(_assertThisInitialized(_this), "getState", function () {
      return _this.main.getState();
    });
    _defineProperty(_assertThisInitialized(_this), "getInternalState", function () {
      return _this.internal.getState();
    });
    _defineProperty(_assertThisInitialized(_this), "_dispatch", function (action) {
      return _this.internal.dispatch(action);
    });
    return _this;
  }
  _createClass(Store, [{
    key: "initialize",
    value: function initialize(_ref) {
      var reducer = _ref.reducer,
        name = _ref.name,
        customMiddlewares = _ref.customMiddlewares;
      this.internal = this._createInternalStore(name);
      this.main = this._createMainStore(customMiddlewares, reducer, name);
      if (process.env.NODE_ENV !== 'production') Object.assign(this, {
        pendingActions: []
      });
    }
  }, {
    key: "_createInternalStore",
    value: function _createInternalStore(name) {
      var enhancer = this._getEnhancer(name, true);
      var internalReducer = _InternalReducer["default"]["export"]();
      return (0, _redux.createStore)(internalReducer, false, enhancer);
    }
  }, {
    key: "_createMainStore",
    value: function _createMainStore(customMiddlewares) {
      var reducer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.reducer;
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var enhancer = this._getEnhancer(name, false, customMiddlewares);
      return (0, _redux.createStore)(reducer, false, enhancer);
    }
  }, {
    key: "_getEnhancer",
    value: function _getEnhancer(name) {
      var internal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var customMiddlewares = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var composer = this._getComposer(name, internal);
      var middlewares = this._getMiddlewares(customMiddlewares, internal);
      return composer(middlewares);
    }
  }, {
    key: "_getComposer",
    value: function _getComposer() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var internal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (process.env.NODE_ENV !== 'production' && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
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
      var middlewares = (0, _compact2["default"])((0, _concat2["default"])(_reduxThunk["default"], customMiddlewares));
      if (process.env.NODE_ENV !== 'production' && !internal) {
        middlewares.push(this._logger.bind(this));
      }
      return _redux.applyMiddleware.apply(void 0, middlewares);
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
        var _remove2 = (0, _remove4["default"])(this.pendingActions, function (pendingAction) {
            return pendingAction.id === action.id;
          }),
          _remove3 = _slicedToArray(_remove2, 1),
          initialAction = _remove3[0];
        duration = performance.now() - (initialAction ? initialAction.startTime : 0);
      }
      if (action.log) {
        var output = this._formatLog(action, duration);
        if (action.status === 'error') {
          _log["default"].error.apply(_log["default"], output.concat(['Action:', action]));
        } else if (action.status === 'success') {
          _log["default"].debug.apply(_log["default"], output.concat(['\n ', action]));
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
      _log["default"].debug.apply(_log["default"], output.concat(['\n', action]));
      return payload;
    }
  }, {
    key: "_logger",
    value: function _logger() {
      var _this2 = this;
      return function (next) {
        return function (action) {
          if (process.env.NODE_ENV !== 'production') {
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
  return Store;
}(_Smart2["default"]);
var _default = Store;
exports["default"] = _default;