"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Component;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _warning = _interopRequireDefault(require("warning"));
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _classnames = _interopRequireDefault(require("classnames"));
var _aphrodite = require("./helpers/aphrodite");
var _Context = _interopRequireDefault(require("./instance/Context"));
var _Runtime3 = _interopRequireDefault(require("./instance/Runtime"));
var _ActionStack = _interopRequireDefault(require("./internal/ActionStack"));
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
var _select = _interopRequireDefault(require("./helpers/select"));
var _excluded = ["instanceKey"],
  _excluded2 = ["instanceKey"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Component(Pure) {
  if (!Pure.prototype.isReactComponent) (0, _warning["default"])(Pure, 'should be a class based React Component');
  var persistActionStack = Pure.persistActionStack || false;

  /* -------------------------------------------------------------------------------------------- *\
  |*                                          Instance                                            *|
  \* -------------------------------------------------------------------------------------------- */

  var instanceKeys = [];
  var composedProps = ['instanceKey', 'select', 'actions', 'dispatch', 'children', 'ownActions', 'ownClassNames'];
  function updateComposedProps(props) {
    composedProps = _lodash["default"].uniq([].concat(_toConsumableArray(composedProps), _toConsumableArray(_lodash["default"].keys(props))));
    return composedProps;
  }

  /* -------------------------------------------------------------------------------------------- *\
  |*                                         Pure props                                           *|
  \* -------------------------------------------------------------------------------------------- */

  Pure.prototype.getPureProps = function getPureProps() {
    return _lodash["default"].omitBy(this.props, function (value, key) {
      return _lodash["default"].includes(composedProps, key);
    });
  };
  Pure.prototype.getForwardProps = function getForwardProps() {
    /* eslint-disable-next-line react/forbid-foreign-prop-types */
    var ownProps = _lodash["default"].keys(Pure.propTypes);
    return _lodash["default"].omitBy(this.props, function (value, key) {
      return _lodash["default"].includes(ownProps, key) || _lodash["default"].includes(composedProps, key);
    });
  };

  /* -------------------------------------------------------------------------------------------- *\
  |*                                        Display Name                                          *|
  \* -------------------------------------------------------------------------------------------- */

  var displayName = Pure.name || 'Functionnal';

  /* -------------------------------------------------------------------------------------------- *\
  |*                                  Props, Context & Instance                                   *|
  \* -------------------------------------------------------------------------------------------- */

  var componentInstance;
  /* eslint-disable-next-line no-unused-vars */
  var prevProps = {};
  var prevContext = {};

  /* -------------------------------------------------------------------------------------------- *\
  |*                                            Mixins                                            *|
  \* -------------------------------------------------------------------------------------------- */

  function aggregateStaticWithMixins(key) {
    return _lodash["default"].compact([Pure[key] || {}].concat(_toConsumableArray(_lodash["default"].map(Pure.mixins, function (mixin) {
      return _lodash["default"].isObject(mixin.props) && mixin.props[key];
    }))));
  }
  function resolveStaticWithMixins(key) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var resolved = {};
    var staticMap = aggregateStaticWithMixins(key);
    _lodash["default"].each(staticMap, function (mixin) {
      var mixinResult = _resolve["default"].call(componentInstance, mixin, options);
      Object.assign(resolved, mixinResult);
    });
    return resolved;
  }
  function bindMixin(mixin) {
    if (_lodash["default"].isFunction(mixin)) return mixin.bind(componentInstance);
    if (_lodash["default"].isObject(mixin) && !_lodash["default"].isUndefined(mixin.call)) {
      return function () {
        _lodash["default"].assign(mixin, componentInstance);
        return mixin.call.apply(mixin, arguments);
      };
    }
    return mixin;
  }
  function getMixins() {
    var mixins = {};
    if (Pure.mixins) {
      _lodash["default"].each(Pure.mixins, function (mixin, key) {
        mixins[key] = bindMixin(mixin);
      });
    }
    return mixins;
  }

  /* -------------------------------------------------------------------------------------------- *\
  |*                                        Action Stack                                          *|
  \* -------------------------------------------------------------------------------------------- */

  /* eslint-disable-next-line no-mixed-operators */
  var actionStack = {};
  function getActionStack(instanceKey) {
    var key = persistActionStack === true ? '__persistent__' : instanceKey;
    actionStack[key] = actionStack[key] || new _ActionStack["default"]();
    return actionStack[key];
  }
  function clearActionStack() {
    return _clearActionStack.apply(this, arguments);
  }
  /* -------------------------------------------------------------------------------------------- *\
  |*                                           Wrapper                                            *|
  \* -------------------------------------------------------------------------------------------- */
  /* eslint-disable-next-line react/no-multi-comp */
  function _clearActionStack() {
    _clearActionStack = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var keys,
        store,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            keys = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : actionStack.keys;
            store = (0, _Runtime3["default"])('store');
            actionStack = _lodash["default"].pickBy(actionStack, /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(instance, key) {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!_lodash["default"].includes(keys, key)) {
                        _context2.next = 6;
                        break;
                      }
                      _context2.next = 3;
                      return instance.abort();
                    case 3:
                      store._dispatch({
                        type: '@@CLEAR_ACTION',
                        payload: key
                      });
                      _context2.next = 7;
                      break;
                    case 6:
                      return _context2.abrupt("return", true);
                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x, _x2) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _clearActionStack.apply(this, arguments);
  }
  var contextWrapper = function contextWrapper(component) {
    var _Wrapper;
    return _Wrapper = /*#__PURE__*/function (_React$Component) {
      function Wrapper() {
        var _this;
        _classCallCheck(this, Wrapper);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Wrapper, [].concat(args));
        _defineProperty(_this, "instanceKey", "".concat(displayName, "Component").concat(_lodash["default"].uniqueId()));
        return _this;
      }
      _inherits(Wrapper, _React$Component);
      return _createClass(Wrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          instanceKeys.push(this.instanceKey);
        }
      }, {
        key: "render",
        value: function render() {
          var ownProps = this.props;
          var instanceKey = this.instanceKey;
          var contextToProps = aggregateStaticWithMixins('contextToProps');
          if (!_lodash["default"].isEmpty(contextToProps) || Pure.propsToContext) {
            return /*#__PURE__*/_react["default"].createElement(_Context["default"].Consumer, null, function (context) {
              prevContext = context;
              var contextProps = resolveStaticWithMixins('contextToProps', {
                context: context,
                ownProps: ownProps
              });
              updateComposedProps(contextProps);
              if (!_lodash["default"].isEmpty(contextProps)) {
                return /*#__PURE__*/_react["default"].createElement(component, _objectSpread(_objectSpread(_objectSpread({}, contextProps), ownProps), {}, {
                  instanceKey: instanceKey
                }));
              }
              return /*#__PURE__*/_react["default"].createElement(component, _objectSpread(_objectSpread({}, ownProps), {}, {
                instanceKey: instanceKey
              }));
            });
          }
          return /*#__PURE__*/_react["default"].createElement(component, _objectSpread(_objectSpread({}, ownProps), {}, {
            instanceKey: instanceKey
          }));
        }
      }]);
    }(_react["default"].Component), _defineProperty(_Wrapper, "displayName", "Wrapper(".concat(displayName, ")")), _Wrapper;
  };

  /* -------------------------------------------------------------------------------------------- *\
  |*                                     CSS Helpers Vars                                         *|
  \* -------------------------------------------------------------------------------------------- */

  var defaultClassName = Pure.className || false;
  var previousClassName = false;
  var uniqClassName = false;
  function mapSelectors(selectors) {
    var applyWildcard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var specialChars = ['*', '&', ':', '@'];
    var mappedSelectors = {};
    _lodash["default"].each(selectors, function (selector, key) {
      var _native = !!_lodash["default"].includes(specialChars, key[0]);
      var newKey = !_native ? "&".concat(key) : key;
      if (_lodash["default"].isPlainObject(selector) && !_native) {
        mappedSelectors[newKey] = mapSelectors(selector);
      } else {
        mappedSelectors[key] = selector;
      }
    });
    return mappedSelectors;
  }
  function mapNestedStyle(stylesheet) {
    _lodash["default"].each(stylesheet, function (item, selectorKey) {
      var selectors = item._definition;
      stylesheet[selectorKey]._definition = mapSelectors(selectors, true);
    });
    return stylesheet;
  }
  function getCssClasses(props, state) {
    if (_lodash["default"].isFunction(Pure.css) || uniqClassName === false) {
      var componentStyle = (0, _resolve["default"])(Pure.css, props, state);
      if (componentStyle) {
        var className = Pure.name || 'Component';
        var stylesheet = _aphrodite.StyleSheet.create(_defineProperty({}, className, componentStyle));
        var styleWithNesting = mapNestedStyle(stylesheet);
        if (uniqClassName) previousClassName = uniqClassName;
        uniqClassName = (0, _aphrodite.css)(styleWithNesting[className]);
        return [defaultClassName, uniqClassName];
      }
      return [defaultClassName];
    }
    return [defaultClassName, uniqClassName];
  }

  /* -------------------------------------------------------------------------------------------- *\
  |*                                          Helpers                                             *|
  \* -------------------------------------------------------------------------------------------- */

  function omitProps(props) {
    var omitted = Pure.omitProps || ['staticContext'];
    return _lodash["default"].omit(props, omitted);
  }
  function getSelect(state) {
    return function helper() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _select["default"].apply(void 0, [state].concat(args));
    };
  }

  /* -------------------------------------------------------------------------------------------- *\
  |*                                      Component Wrapper                                       *|
  \* -------------------------------------------------------------------------------------------- */

  /* eslint-disable-next-line react/no-multi-comp */
  var PureReflection = /*#__PURE__*/function (_React$Component2) {
    function PureReflection() {
      var _this2;
      _classCallCheck(this, PureReflection);
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      _this2 = _callSuper(this, PureReflection, [].concat(args));
      _defineProperty(_this2, "state", {
        initialized: false
      });
      _defineProperty(_this2, "getClassNames", function (currentClassNames) {
        /* eslint-disable react/prop-types */
        var current = currentClassNames ? currentClassNames.split(' ') : false;
        var currentClass = current ? _lodash["default"].reject(current, function (i) {
          return i === previousClassName;
        }) : false;
        var computedClass = getCssClasses(_this2.fullProps, _this2.state) || false;
        var uniq = _lodash["default"].uniq([].concat(_toConsumableArray(currentClass), _toConsumableArray(computedClass)));
        return (0, _classnames["default"])(_lodash["default"].compact(uniq));
      });
      _defineProperty(_this2, "componentDidUpdate", function () {
        _this2.mapCssClasses();
      });
      _defineProperty(_this2, "componentDidMount", function () {
        _this2.mapCssClasses();
      });
      return _this2;
    }
    _inherits(PureReflection, _React$Component2);
    return _createClass(PureReflection, [{
      key: "mapCssClasses",
      value: function mapCssClasses() {
        /* eslint-disable react/no-find-dom-node */
        if (Pure.className || Pure.css) {
          var className = this.fullProps.className;
          var cssClasses = getCssClasses(this.fullProps, this.state);
          var fiber = _lodash["default"].get(componentInstance, '_reactInternalFiber');
          var sibling = _lodash["default"].get(fiber, 'child.sibling');
          var node = _reactDom["default"].findDOMNode(fiber.stateNode);
          if (node && (className || cssClasses)) {
            if (sibling) {
              var parent = node ? node.parentNode : false;
              if (parent) {
                this.classNames = this.getClassNames(parent.className);
                parent.className = this.classNames;
              }
            } else {
              this.classNames = this.getClassNames(node.className);
              node.className = this.classNames;
            }
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        var _componentWillUnmount = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var instanceKey;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(!persistActionStack === true)) {
                  _context.next = 4;
                  break;
                }
                instanceKey = this.props.instanceKey;
                _context.next = 4;
                return clearActionStack([instanceKey]);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function componentWillUnmount() {
          return _componentWillUnmount.apply(this, arguments);
        }
        return componentWillUnmount;
      }()
    }, {
      key: "computeContext",
      value: function computeContext(ownProps) {
        var _Runtime = (0, _Runtime3["default"])('store'),
          getState = _Runtime.getState;
        var state = getState();
        var select = getSelect(state);
        var mixins = getMixins();
        return resolveStaticWithMixins('propsToContext', {
          ownProps: ownProps,
          mixins: mixins,
          select: select
        });
      }
    }, {
      key: "renderComponent",
      value: function renderComponent() {
        var ownProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var ownClassNames = this.classNames || String();
        this.fullProps = _objectSpread(_objectSpread(_objectSpread({}, ownProps), this.props), {}, {
          ownClassNames: ownClassNames
        });
        return /*#__PURE__*/_react["default"].createElement(Pure, _objectSpread(_objectSpread({}, this.fullProps), {}, {
          ref: function ref(reference) {
            componentInstance = reference || componentInstance;
          }
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var ownProps = omitProps(this.props);
        if (Pure.propsToContext) {
          var propsToContext = this.computeContext(ownProps);
          if (propsToContext) {
            updateComposedProps(_objectSpread(_objectSpread({}, prevContext), propsToContext));
            return /*#__PURE__*/_react["default"].createElement(_Context["default"].Provider, {
              value: _objectSpread(_objectSpread({}, prevContext), propsToContext)
            }, this.renderComponent(ownProps));
          }
        }
        return this.renderComponent(ownProps);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        prevProps = props;
        return state;
      }
    }]);
  }(_react["default"].Component);
  /* -------------------------------------------------------------------------------------------- *\
  |*                                           Redux                                              *|
  \* -------------------------------------------------------------------------------------------- */
  _defineProperty(PureReflection, "displayName", "Component(".concat(displayName, ")"));
  // eslint-disable-next-line react/forbid-foreign-prop-types
  _defineProperty(PureReflection, "propTypes", Pure.propTypes);
  _defineProperty(PureReflection, "defaultProps", Pure.defaultProps);
  _defineProperty(PureReflection, "contextTypes", {
    store: _propTypes["default"].shape({
      getState: _propTypes["default"].func.isRequired,
      subscribe: _propTypes["default"].func.isRequired
    }),
    history: _propTypes["default"].shape({
      listen: _propTypes["default"].func.isRequired,
      location: _propTypes["default"].object.isRequired,
      push: _propTypes["default"].func.isRequired
    })
  });
  var bindedActionCreators = {};
  function createActions(actionConstructors, _ref) {
    var instanceKey = _ref.instanceKey,
      props = _objectWithoutProperties(_ref, _excluded);
    return _lodash["default"].mapValues(actionConstructors, function (actionConstructor, key) {
      if (_lodash["default"].isFunction(actionConstructor)) {
        return function () {
          var _Runtime2 = (0, _Runtime3["default"])('store'),
            getState = _Runtime2.getState,
            dispatch = _Runtime2.dispatch;
          var instance = actionConstructor({
            origin: instanceKey,
            tracked: true,
            props: props
          });
          var id = instance.run.apply(instance, arguments)(dispatch, getState);
          var actions = getActionStack(instanceKey);
          actions.push({
            id: id,
            key: key,
            instance: instance
          });
          return id;
        };
      }
    });
  }
  function bindActionCreators(_ref2) {
    var state = _ref2.state,
      actions = _ref2.actions,
      nextProps = _ref2.nextProps,
      select = _ref2.select;
    var actionCreators = Pure.actionCreators || {};
    var actionConstructors = (0, _resolve["default"])(actionCreators, {
      nextProps: nextProps
    }) || {};
    var actionsMap = createActions(actionConstructors, nextProps);
    updateComposedProps(actionsMap);
    return actionsMap;
  }
  function wrapStateToProps() {
    return function (state, _ref3) {
      var instanceKey = _ref3.instanceKey,
        props = _objectWithoutProperties(_ref3, _excluded2);
      var select = getSelect(state);
      var ownProps = omitProps(props);
      var mixins = getMixins();
      var actions = getActionStack(instanceKey);
      var stateProps = resolveStaticWithMixins('stateToProps', {
        state: state,
        actions: actions,
        ownProps: ownProps,
        mixins: mixins,
        select: select
      });
      updateComposedProps(stateProps);
      var ownActions = _lodash["default"].isEmpty(actions) ? {} : actions.own();
      var nextProps = _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {
        actions: actions,
        instanceKey: instanceKey,
        ownActions: ownActions
      });
      bindedActionCreators = bindActionCreators({
        state: state,
        actions: actions,
        nextProps: nextProps,
        select: select
      });
      return _objectSpread({
        actions: actions,
        instanceKey: instanceKey,
        ownActions: ownActions
      }, stateProps);
    };
  }
  function wrapDispatchToProps() {
    var dispatchToProps = Pure.dispatchToProps || {};
    if (_lodash["default"].isFunction(dispatchToProps)) {
      return function (dispatch, ownProps) {
        var actionCreators = bindedActionCreators;
        var plainActions = (0, _resolve["default"])(dispatchToProps, {
          dispatch: dispatch,
          ownProps: ownProps,
          actionCreators: actionCreators
        }) || {};
        var actions = _objectSpread(_objectSpread({}, actionCreators), plainActions);
        updateComposedProps(actions);
        return actions;
      };
    }
    return function (dispatch) {
      var actions = _objectSpread(_objectSpread({}, bindedActionCreators), dispatchToProps);
      updateComposedProps(actions);
      return actions;
    };
  }
  function mergeConnectProps() {
    return Pure.mergeConnectProps || null;
  }
  function getConnectOptions() {
    return Pure.connectOptions || {};
  }
  var mapStateToProps = wrapStateToProps();
  var mapDispatchToProps = wrapDispatchToProps();
  var mergeProps = mergeConnectProps();
  var options = getConnectOptions();

  /* -------------------------------------------------------------------------------------------- *\
  |*                                      Compose and Render                                      *|
  \* -------------------------------------------------------------------------------------------- */

  var strictCompare = function strictCompare(next, prev) {
    return prev === next;
  };
  var shallowCompare = function shallowCompare(next, prev) {
    return _lodash["default"].isEqual(next, prev);
  };
  var reduxConnect = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, _objectSpread({
    areStatesEqual: function areStatesEqual(next, prev) {
      return strictCompare(next, prev);
    },
    areStatePropsEqual: function areStatePropsEqual(next, prev) {
      return shallowCompare(next, prev);
    },
    areMergedPropsEqual: function areMergedPropsEqual(next, prev) {
      return shallowCompare(next, prev);
    }
  }, options));
  var component = (0, _redux.compose)(contextWrapper, reduxConnect)(PureReflection);

  /* -------------------------------------------------------------------------------------------- *\
  |*                                       Static helpers                                         *|
  \* -------------------------------------------------------------------------------------------- */

  component.clearActionStack = function () {
    clearActionStack();
  };
  return component;
}
//# sourceMappingURL=Component.js.map