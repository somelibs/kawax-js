"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _uuid = require("uuid");
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _Runtime2 = _interopRequireDefault(require("./instance/Runtime"));
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
var _select = _interopRequireDefault(require("./helpers/select"));
var _log = _interopRequireDefault(require("./helpers/log"));
var _excluded = ["success", "error", "log", "origin", "tracked", "safeguard", "cache"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var Action = /*#__PURE__*/function (_Smart) {
  function Action(_ref) {
    var _this;
    var _success = _ref.success,
      _error = _ref.error,
      log = _ref.log,
      origin = _ref.origin,
      tracked = _ref.tracked,
      safeguard = _ref.safeguard,
      _cache = _ref.cache,
      _context = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, Action);
    _this = _callSuper(this, Action, [_context]);
    _defineProperty(_this, "delegatedActions", []);
    _defineProperty(_this, "pendingPayload", function (data) {});
    _defineProperty(_this, "successPayload", function (data) {
      return function (success) {
        return success;
      };
    });
    _defineProperty(_this, "errorPayload", function (data) {
      return function (error) {
        return error;
      };
    });
    _defineProperty(_this, "payload", function (data) {
      return function (payload) {
        return payload;
      };
    });
    _defineProperty(_this, "pendingNotice", function (data) {
      return false;
    });
    _defineProperty(_this, "successNotice", function (data) {
      return function (success) {
        return false;
      };
    });
    _defineProperty(_this, "errorNotice", function (data) {
      return function (error) {
        return false;
      };
    });
    _defineProperty(_this, "notice", function (data) {
      return function (payload) {
        return false;
      };
    });
    _defineProperty(_this, "setStatus", function (status) {
      _this.status = status;
    });
    _defineProperty(_this, "export", function (action) {
      return action;
    });
    _defineProperty(_this, "aborted", false);
    _defineProperty(_this, "_export", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(payload) {
        var _this2, _this3, _this4, _this5;
        var _len,
          data,
          _key,
          parsedPayload,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              for (_len = _args.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                data[_key - 1] = _args[_key];
              }
              _context2.next = 3;
              return (_this2 = _this)._parsePayload.apply(_this2, [payload].concat(data));
            case 3:
              parsedPayload = _context2.sent;
              _context2.t0 = (_this3 = _this)["export"];
              _context2.t1 = _this3;
              _context2.t2 = _this.id;
              _context2.t3 = _this.log;
              _context2.t4 = _this.origin;
              _context2.t5 = _this.status;
              _context2.t6 = _this._tracked;
              _context2.t7 = _this._safeguard;
              _context2.t8 = _this.timestamp;
              _context2.t9 = _this.props.reducer || false;
              _context2.t10 = _this.props.type || _this._getType();
              _context2.next = 17;
              return (_this4 = _this)._parseNotice.apply(_this4, [payload].concat(data));
            case 17:
              _context2.t11 = _context2.sent;
              if (_context2.t11) {
                _context2.next = 20;
                break;
              }
              _context2.t11 = false;
            case 20:
              _context2.t12 = _context2.t11;
              _context2.next = 23;
              return (_this5 = _this)._parseContext.apply(_this5, [payload].concat(data));
            case 23:
              _context2.t13 = _context2.sent;
              if (_context2.t13) {
                _context2.next = 26;
                break;
              }
              _context2.t13 = {};
            case 26:
              _context2.t14 = _context2.t13;
              _context2.t15 = _this.constructor.name;
              _context2.t16 = parsedPayload;
              _context2.t17 = {
                id: _context2.t2,
                log: _context2.t3,
                origin: _context2.t4,
                status: _context2.t5,
                tracked: _context2.t6,
                safeguard: _context2.t7,
                timestamp: _context2.t8,
                reducer: _context2.t9,
                type: _context2.t10,
                notice: _context2.t12,
                context: _context2.t14,
                "class": _context2.t15,
                payload: _context2.t16
              };
              _context2.t18 = [_context2.t17].concat(data);
              return _context2.abrupt("return", _context2.t0.apply.call(_context2.t0, _context2.t1, _context2.t18));
            case 32:
            case "end":
              return _context2.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "_getType", function () {
      var snakeCase = _lodash["default"].snakeCase(_this.constructor.name);
      return "~".concat(_lodash["default"].toUpper(snakeCase));
    });
    _defineProperty(_this, "_resolve", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(callback, payload) {
        var _len2,
          data,
          _key2,
          shallow,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              for (_len2 = _args2.length, data = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                data[_key2 - 2] = _args2[_key2];
              }
              _context3.next = 3;
              return _resolve["default"].call.apply(_resolve["default"], [_this, callback].concat(data));
            case 3:
              shallow = _context3.sent;
              return _context3.abrupt("return", _resolve["default"].call(_this, shallow, payload));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee2);
      }));
      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "_getCachedPayload", function () {
      if (_this._cache) {
        for (var _len3 = arguments.length, data = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          data[_key3] = arguments[_key3];
        }
        var cache = _resolve["default"].call.apply(_resolve["default"], [_this, _this.cache].concat(data));
        if (cache && !_lodash["default"].isEmpty(cache)) {
          _this.setStatus('success');
          return cache;
        }
      }
      return false;
    });
    _defineProperty(_this, "_defineSetContext", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _len4,
        data,
        _key4,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            for (_len4 = _args4.length, data = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              data[_key4] = _args4[_key4];
            }
            _this.setContext = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this6;
              var context,
                action,
                _args3 = arguments;
              return _regeneratorRuntime().wrap(function _callee3$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    context = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                    _lodash["default"].extend(_this._context, context);
                    _context4.next = 4;
                    return (_this6 = _this)._export.apply(_this6, [{}].concat(data));
                  case 4:
                    action = _context4.sent;
                    return _context4.abrupt("return", _this._dispatch(action));
                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }, _callee3);
            }));
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee4);
    })));
    _defineProperty(_this, "_defineDispatchSuccess", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _len5,
        data,
        _key5,
        _args6 = arguments;
      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            for (_len5 = _args6.length, data = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              data[_key5] = _args6[_key5];
            }
            _this.dispatchSuccess = /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(payload) {
                var _this7;
                var action;
                return _regeneratorRuntime().wrap(function _callee5$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _this.setStatus('success');
                      _context6.next = 3;
                      return (_this7 = _this)._export.apply(_this7, [payload].concat(data));
                    case 3:
                      action = _context6.sent;
                      return _context6.abrupt("return", _this._dispatch(action));
                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee5);
              }));
              return function (_x4) {
                return _ref7.apply(this, arguments);
              };
            }();
          case 2:
          case "end":
            return _context7.stop();
        }
      }, _callee6);
    })));
    _defineProperty(_this, "_assertPromise", function (callback) {
      return function () {
        for (var _len6 = arguments.length, options = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          options[_key6] = arguments[_key6];
        }
        if (!_this.aborted || _this._safeguard) return _resolve["default"].call.apply(_resolve["default"], [_this, callback].concat(options));
        return false;
      };
    });
    _this.id = (0, _uuid.v4)();
    _this.onError = _error;
    _this.onSuccess = _success;
    _this.log = log || true;
    _this.origin = origin || false;
    _this._context = _context;
    _this._tracked = tracked || _this.props.tracked;
    _this._safeguard = safeguard || _this.props.safeguard;
    _this._cache = _this.props.cache || !!_cache;
    return _this;
  }
  _inherits(Action, _Smart);
  return _createClass(Action, [{
    key: "_parseContext",
    value: function () {
      var _parseContext2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var payload,
          _len7,
          data,
          _key7,
          parsedContext,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              payload = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              for (_len7 = _args7.length, data = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
                data[_key7 - 1] = _args7[_key7];
              }
              _context8.next = 4;
              return this._resolve.apply(this, [this.context, payload].concat(data));
            case 4:
              _context8.t0 = _context8.sent;
              if (_context8.t0) {
                _context8.next = 7;
                break;
              }
              _context8.t0 = {};
            case 7:
              parsedContext = _context8.t0;
              return _context8.abrupt("return", _lodash["default"].isPlainObject(this._context) ? _objectSpread(_objectSpread({}, parsedContext), this._context) : parsedContext);
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee7, this);
      }));
      function _parseContext() {
        return _parseContext2.apply(this, arguments);
      }
      return _parseContext;
    }()
  }, {
    key: "_parsePayload",
    value: function () {
      var _parsePayload2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(payload) {
        var _len8,
          data,
          _key8,
          _args8 = arguments;
        return _regeneratorRuntime().wrap(function _callee8$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              for (_len8 = _args8.length, data = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
                data[_key8 - 1] = _args8[_key8];
              }
              return _context9.abrupt("return", this._resolve.apply(this, [this.payload, payload].concat(data)) || false);
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee8, this);
      }));
      function _parsePayload(_x5) {
        return _parsePayload2.apply(this, arguments);
      }
      return _parsePayload;
    }()
  }, {
    key: "_parseNotice",
    value: function () {
      var _parseNotice2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var payload,
          notice,
          _len9,
          data,
          _key9,
          finalNotice,
          defaultMessage,
          _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              payload = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {};
              for (_len9 = _args9.length, data = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
                data[_key9 - 1] = _args9[_key9];
              }
              if (!(this.status === 'pending')) {
                _context10.next = 8;
                break;
              }
              _context10.next = 5;
              return this._resolve.apply(this, [this.pendingNotice, payload].concat(data));
            case 5:
              notice = _context10.sent;
              _context10.next = 18;
              break;
            case 8:
              if (!(this.status === 'error')) {
                _context10.next = 14;
                break;
              }
              _context10.next = 11;
              return this._resolve.apply(this, [this.errorNotice, payload].concat(data));
            case 11:
              notice = _context10.sent;
              _context10.next = 18;
              break;
            case 14:
              if (!(this.status === 'success')) {
                _context10.next = 18;
                break;
              }
              _context10.next = 17;
              return this._resolve.apply(this, [this.successNotice, payload].concat(data));
            case 17:
              notice = _context10.sent;
            case 18:
              _context10.next = 20;
              return this._resolve.apply(this, [this.notice, notice].concat(data));
            case 20:
              finalNotice = _context10.sent;
              defaultMessage = this.status === 'error' ? 'An error has occured.' : String();
              return _context10.abrupt("return", !notice && !finalNotice ? false : _objectSpread(_objectSpread({
                message: payload.message || defaultMessage
              }, notice), finalNotice));
            case 23:
            case "end":
              return _context10.stop();
          }
        }, _callee9, this);
      }));
      function _parseNotice() {
        return _parseNotice2.apply(this, arguments);
      }
      return _parseNotice;
    }()
  }, {
    key: "run",
    value: function run() {
      var _this8 = this;
      for (var _len10 = arguments.length, data = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        data[_key10] = arguments[_key10];
      }
      this._setSafeguard();
      this.timestamp = Date.now();
      return function (dispatch, getState) {
        _this8._getState = getState;
        _this8._dispatch = dispatch;
        _this8._defineGetState();
        _this8._defineSetContext.apply(_this8, data);
        _this8._defineDispatchSuccess.apply(_this8, data);
        new Promise(/*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(success) {
            var cache, payload, action;
            return _regeneratorRuntime().wrap(function _callee10$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.prev = 0;
                  _this8._bindActionsCreators.apply(_this8, data);
                  _context11.next = 4;
                  return _this8._bindResources.apply(_this8, data);
                case 4:
                  _context11.next = 6;
                  return _this8._dispatchPending.apply(_this8, data);
                case 6:
                  cache = _this8._getCachedPayload.apply(_this8, data);
                  _context11.t0 = cache;
                  if (_context11.t0) {
                    _context11.next = 12;
                    break;
                  }
                  _context11.next = 11;
                  return _this8._processPayload.apply(_this8, data);
                case 11:
                  _context11.t0 = _context11.sent;
                case 12:
                  payload = _context11.t0;
                  _context11.next = 15;
                  return _this8._export.apply(_this8, [payload].concat(data));
                case 15:
                  action = _context11.sent;
                  _context11.next = 18;
                  return _this8._assertPromise(_this8._beforeDispatch).apply(void 0, [payload].concat(data));
                case 18:
                  _context11.next = 20;
                  return _this8._assertPromise(dispatch)(action);
                case 20:
                  if (!(_this8.status === 'success')) {
                    _context11.next = 25;
                    break;
                  }
                  _context11.next = 23;
                  return _this8._assertPromise(_this8.onSuccess).apply(void 0, [payload].concat(data));
                case 23:
                  _context11.next = 27;
                  break;
                case 25:
                  _context11.next = 27;
                  return _this8._assertPromise(_this8.onError).apply(void 0, [payload].concat(data));
                case 27:
                  _context11.next = 29;
                  return _this8._assertPromise(_this8._afterDispatch).apply(void 0, [payload].concat(data));
                case 29:
                  _this8._removeSafeguard();
                  success();
                  _context11.next = 39;
                  break;
                case 33:
                  _context11.prev = 33;
                  _context11.t1 = _context11["catch"](0);
                  _log["default"].error(_context11.t1);
                  _this8.setStatus('error');
                  _this8._removeSafeguard();
                  return _context11.abrupt("return", _context11.t1);
                case 39:
                case "end":
                  return _context11.stop();
              }
            }, _callee10, null, [[0, 33]]);
          }));
          return function (_x6) {
            return _ref8.apply(this, arguments);
          };
        }());
        return _this8.id;
      };
    }
  }, {
    key: "_defineGetState",
    value: function _defineGetState() {
      var _this9 = this;
      this.getState = function () {
        for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          args[_key11] = arguments[_key11];
        }
        var path = args.length > 1 ? args : args[0];
        var state = _this9._getState();
        return (0, _select["default"])(state, path);
      };
    }
  }, {
    key: "_dispatchPending",
    value: function () {
      var _dispatchPending2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _len12,
          data,
          _key12,
          pendingPayload,
          action,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              this.setStatus('pending');
              for (_len12 = _args11.length, data = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                data[_key12] = _args11[_key12];
              }
              pendingPayload = this._resolve.apply(this, [this.pendingPayload, {}].concat(data));
              _context12.next = 5;
              return this._export.apply(this, [pendingPayload].concat(data));
            case 5:
              action = _context12.sent;
              this._dispatch(action);
            case 7:
            case "end":
              return _context12.stop();
          }
        }, _callee11, this);
      }));
      function _dispatchPending() {
        return _dispatchPending2.apply(this, arguments);
      }
      return _dispatchPending;
    }()
  }, {
    key: "_bindResources",
    value: function () {
      var _bindResources2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _this10 = this;
        var _len13,
          data,
          _key13,
          resources,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function _callee12$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              for (_len13 = _args12.length, data = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                data[_key13] = _args12[_key13];
              }
              resources = _resolve["default"].call.apply(_resolve["default"], [this, this.props.resources].concat(data));
              _lodash["default"].each(resources, function (resource, key) {
                if (typeof resource === 'function') {
                  _this10[key] = function (options) {
                    for (var _len14 = arguments.length, override = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
                      override[_key14 - 1] = arguments[_key14];
                    }
                    return resource(options, _objectSpread(_objectSpread(_objectSpread({
                      actionId: _this10.id,
                      type: _this10.constructor.type
                    }, _this10.context), _lodash["default"].last(data)), override));
                  };
                }
              });
            case 3:
            case "end":
              return _context13.stop();
          }
        }, _callee12, this);
      }));
      function _bindResources() {
        return _bindResources2.apply(this, arguments);
      }
      return _bindResources;
    }()
  }, {
    key: "_bindActionsCreators",
    value: function _bindActionsCreators() {
      var _this11 = this;
      for (var _len15 = arguments.length, ownData = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        ownData[_key15] = arguments[_key15];
      }
      var actionCreators = _resolve["default"].call.apply(_resolve["default"], [this, this.constructor.actionCreators].concat(ownData));
      _lodash["default"].each(actionCreators, function (action, key) {
        if (typeof action === 'function') {
          _this11[key] = function () {
            for (var _len16 = arguments.length, data = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
              data[_key16] = arguments[_key16];
            }
            return new Promise(/*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(success, error) {
                var actionInstance;
                return _regeneratorRuntime().wrap(function _callee13$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      actionInstance = action({
                        origin: _this11.origin || _this11.constructor.name,
                        tracked: _this11._tracked || false,
                        safeguard: _this11._safeguard || false,
                        success: success,
                        error: error
                      });
                      _this11.delegatedActions.push(actionInstance);
                      actionInstance.setState.apply(actionInstance, data);
                      actionInstance.run.apply(actionInstance, data)(_this11._dispatch, _this11._getState);
                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee13);
              }));
              return function (_x7, _x8) {
                return _ref9.apply(this, arguments);
              };
            }());
          };
        }
      });
    }
  }, {
    key: "_processPayload",
    value: function () {
      var _processPayload2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var _len17,
          data,
          _key17,
          call,
          payload,
          _args14 = arguments;
        return _regeneratorRuntime().wrap(function _callee14$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              for (_len17 = _args14.length, data = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
                data[_key17] = _args14[_key17];
              }
              if (!(typeof this.call === 'function')) {
                _context15.next = 20;
                break;
              }
              _context15.prev = 2;
              _context15.next = 5;
              return this.call.apply(this, data);
            case 5:
              call = _context15.sent;
              _context15.next = 8;
              return (0, _resolve["default"])(call);
            case 8:
              payload = _context15.sent;
              this.setStatus('success');
              return _context15.abrupt("return", this._resolve.apply(this, [this.successPayload, payload].concat(data)));
            case 13:
              _context15.prev = 13;
              _context15.t0 = _context15["catch"](2);
              if (_context15.t0 instanceof Error) _log["default"].error(_context15.t0);
              this.setStatus('error');
              return _context15.abrupt("return", this._resolve.apply(this, [this.errorPayload, _context15.t0].concat(data)));
            case 18:
              _context15.next = 22;
              break;
            case 20:
              if (!(this.call !== undefined)) {
                _context15.next = 22;
                break;
              }
              return _context15.abrupt("return", this.call);
            case 22:
              return _context15.abrupt("return", this._processSuccess({}, data));
            case 23:
            case "end":
              return _context15.stop();
          }
        }, _callee14, this, [[2, 13]]);
      }));
      function _processPayload() {
        return _processPayload2.apply(this, arguments);
      }
      return _processPayload;
    }()
  }, {
    key: "_processSuccess",
    value: function () {
      var _processSuccess2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(payload, data) {
        return _regeneratorRuntime().wrap(function _callee15$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              this.setStatus('success');
              return _context16.abrupt("return", this._resolve.apply(this, [this.successPayload, payload].concat(_toConsumableArray(data))));
            case 2:
            case "end":
              return _context16.stop();
          }
        }, _callee15, this);
      }));
      function _processSuccess(_x9, _x10) {
        return _processSuccess2.apply(this, arguments);
      }
      return _processSuccess;
    }()
  }, {
    key: "_processError",
    value: function () {
      var _processError2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(payload) {
        var _len18,
          data,
          _key18,
          _args16 = arguments;
        return _regeneratorRuntime().wrap(function _callee16$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              this.setStatus('error');
              for (_len18 = _args16.length, data = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
                data[_key18 - 1] = _args16[_key18];
              }
              return _context17.abrupt("return", this._resolve.apply(this, [this.errorPayload, payload].concat(data)));
            case 3:
            case "end":
              return _context17.stop();
          }
        }, _callee16, this);
      }));
      function _processError(_x11) {
        return _processError2.apply(this, arguments);
      }
      return _processError;
    }()
  }, {
    key: "_beforeDispatch",
    value: function () {
      var _beforeDispatch2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(payload) {
        var _len19,
          data,
          _key19,
          _args17 = arguments;
        return _regeneratorRuntime().wrap(function _callee17$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _context18.prev = 0;
              for (_len19 = _args17.length, data = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
                data[_key19 - 1] = _args17[_key19];
              }
              if (!(this.status === 'success')) {
                _context18.next = 7;
                break;
              }
              _context18.next = 5;
              return this._resolve.apply(this, [this.beforeDispatch, payload].concat(data));
            case 5:
              _context18.next = 10;
              break;
            case 7:
              if (!(this.status === 'error')) {
                _context18.next = 10;
                break;
              }
              _context18.next = 10;
              return this._resolve.apply(this, [this.beforeRescue, payload].concat(data));
            case 10:
              _context18.next = 15;
              break;
            case 12:
              _context18.prev = 12;
              _context18.t0 = _context18["catch"](0);
              _log["default"].error(_context18.t0);
            case 15:
            case "end":
              return _context18.stop();
          }
        }, _callee17, this, [[0, 12]]);
      }));
      function _beforeDispatch(_x12) {
        return _beforeDispatch2.apply(this, arguments);
      }
      return _beforeDispatch;
    }()
  }, {
    key: "_afterDispatch",
    value: function () {
      var _afterDispatch2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(payload) {
        var _len20,
          data,
          _key20,
          _args18 = arguments;
        return _regeneratorRuntime().wrap(function _callee18$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              for (_len20 = _args18.length, data = new Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
                data[_key20 - 1] = _args18[_key20];
              }
              if (!(this.status === 'success')) {
                _context19.next = 6;
                break;
              }
              _context19.next = 4;
              return this._resolve.apply(this, [this.afterDispatch, payload].concat(data));
            case 4:
              _context19.next = 9;
              break;
            case 6:
              if (!(this.status === 'error')) {
                _context19.next = 9;
                break;
              }
              _context19.next = 9;
              return this._resolve.apply(this, [this.afterRescue, payload].concat(data));
            case 9:
            case "end":
              return _context19.stop();
          }
        }, _callee18, this);
      }));
      function _afterDispatch(_x13) {
        return _afterDispatch2.apply(this, arguments);
      }
      return _afterDispatch;
    }()
  }, {
    key: "_setSafeguard",
    value: function _setSafeguard() {
      if (this._safeguard) {
        window.addEventListener('beforeunload', this._windowSafeguard);
      }
    }
  }, {
    key: "_removeSafeguard",
    value: function _removeSafeguard() {
      if (this._safeguard) {
        window.removeEventListener('beforeunload', this._windowSafeguard);
      }
    }
  }, {
    key: "_windowSafeguard",
    value: function _windowSafeguard() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
      event.preventDefault();
      event.returnValue = 'Changes that you made may not be saved.';
      return event.returnValue;
    }
  }, {
    key: "abort",
    value: function abort() {
      this.aborted = true;
    }
  }], [{
    key: "bind",
    value: function bind(context) {
      var _this12 = this;
      return function () {
        for (var _len21 = arguments.length, data = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
          data[_key21] = arguments[_key21];
        }
        return new Promise(/*#__PURE__*/function () {
          var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(success, error) {
            var _Runtime, dispatch, getState, action;
            return _regeneratorRuntime().wrap(function _callee19$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
                case 0:
                  _Runtime = (0, _Runtime2["default"])('store'), dispatch = _Runtime.dispatch, getState = _Runtime.getState;
                  action = new _this12(_objectSpread({
                    success: success,
                    error: error
                  }, context));
                  action.setState.apply(action, data);
                  action.run.apply(action, data)(dispatch, getState);
                case 4:
                case "end":
                  return _context20.stop();
              }
            }, _callee19);
          }));
          return function (_x14, _x15) {
            return _ref10.apply(this, arguments);
          };
        }());
      };
    }
  }]);
}(_Smart2["default"]);
_defineProperty(Action, "actionCreators", {});
_defineProperty(Action, "type", false);
_defineProperty(Action, "safeguard", false);
_defineProperty(Action, "tracked", false);
_defineProperty(Action, "defaults", function (options) {
  return {
    context: options
  };
});
_defineProperty(Action, "reducer", false);
_defineProperty(Action, "cache", false);
var _default = exports["default"] = Action;
//# sourceMappingURL=Action.js.map