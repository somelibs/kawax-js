"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _uuid = require("uuid");
var _queryString = _interopRequireDefault(require("query-string"));
var _cleanDeep = _interopRequireDefault(require("clean-deep"));
var _Smart2 = _interopRequireDefault(require("../Smart"));
var _log = _interopRequireDefault(require("../helpers/log"));
var _resolve = _interopRequireDefault(require("../helpers/resolve"));
var _promiseAll = _interopRequireDefault(require("../helpers/promiseAll"));
var _CallThrottler = _interopRequireDefault(require("./CallThrottler"));
var _Runtime = _interopRequireDefault(require("../instance/Runtime"));
var _excluded = ["context"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _awaitAsyncGenerator(e) { return new _OverloadYield(e, 0); }
function _wrapAsyncGenerator(e) { return function () { return new AsyncGenerator(e.apply(this, arguments)); }; }
function AsyncGenerator(e) { var r, t; function resume(r, t) { try { var n = e[r](t), o = n.value, u = o instanceof _OverloadYield; Promise.resolve(u ? o.v : o).then(function (t) { if (u) { var i = "return" === r ? "return" : "next"; if (!o.k || t.done) return resume(i, t); t = e[i](t).value; } settle(n.done ? "return" : "normal", t); }, function (e) { resume("throw", e); }); } catch (e) { settle("throw", e); } } function settle(e, n) { switch (e) { case "return": r.resolve({ value: n, done: !0 }); break; case "throw": r.reject(n); break; default: r.resolve({ value: n, done: !1 }); } (r = r.next) ? resume(r.key, r.arg) : t = null; } this._invoke = function (e, n) { return new Promise(function (o, u) { var i = { key: e, arg: n, resolve: o, reject: u, next: null }; t ? t = t.next = i : (r = t = i, resume(e, n)); }); }, "function" != typeof e["return"] && (this["return"] = void 0); }
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, AsyncGenerator.prototype.next = function (e) { return this._invoke("next", e); }, AsyncGenerator.prototype["throw"] = function (e) { return this._invoke("throw", e); }, AsyncGenerator.prototype["return"] = function (e) { return this._invoke("return", e); };
function _OverloadYield(e, d) { this.v = e, this.k = d; }
var throttler = new _CallThrottler["default"]();
var ResourceCall = /*#__PURE__*/function (_Smart) {
  function ResourceCall() {
    var _this;
    _classCallCheck(this, ResourceCall);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ResourceCall, [].concat(args));
    _defineProperty(_this, "getContext", function () {
      var _this$options = _this.options,
        context = _this$options.context,
        resource = _objectWithoutProperties(_this$options, _excluded);
      return _objectSpread(_objectSpread({}, context), {}, {
        resource: resource
      });
    });
    _defineProperty(_this, "responseParser", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(response, body) {
        var _this$options2, responseParser, collection, responseTransform, metaParser, entityParser, schema, context, payload, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this$options2 = _this.options, responseParser = _this$options2.responseParser, collection = _this$options2.collection, responseTransform = _this$options2.responseTransform, metaParser = _this$options2.metaParser, entityParser = _this$options2.entityParser, schema = _this$options2.schema;
              context = _this.getContext();
              payload = (0, _resolve["default"])(responseParser, response, body, context) || body;
              if (!collection) {
                _context.next = 9;
                break;
              }
              _context.next = 6;
              return _this.collectionParser(payload);
            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;
            case 9:
              _context.t0 = payload;
            case 10:
              data = _context.t0;
              data = responseTransform ? _this.transform(data, responseTransform) : data;
              if (!(response.ok === true)) {
                _context.next = 23;
                break;
              }
              if (!entityParser) {
                _context.next = 19;
                break;
              }
              _context.next = 16;
              return _this.switchParser(data);
            case 16:
              _context.t1 = _context.sent;
              _context.next = 20;
              break;
            case 19:
              _context.t1 = data;
            case 20:
              data = _context.t1;
              data = !_lodash["default"].isEmpty(schema) ? _this.schemaParser(data) : data;
              if (collection && metaParser) _this.metaParser(payload, data);
            case 23:
              return _context.abrupt("return", data);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "serializeRequestBody", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(payload) {
        var parsedPayload, key;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              parsedPayload = {};
              for (key in payload) {
                if (_lodash["default"].isPlainObject(payload[key])) {
                  parsedPayload[key] = JSON.stringify(payload[key]);
                } else {
                  parsedPayload[key] = payload[key];
                }
              }
              return _context2.abrupt("return", parsedPayload);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "buildRequest", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(payload) {
        var _this$options3, method, headers, allowCors, credentials, formData, context, parsedHeaders, requestOptions, parsedPayload;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this$options3 = _this.options, method = _this$options3.method, headers = _this$options3.headers, allowCors = _this$options3.allowCors, credentials = _this$options3.credentials, formData = _this$options3.formData;
              context = _this.getContext();
              parsedHeaders = (0, _resolve["default"])(headers, context);
              requestOptions = {
                method: method,
                credentials: credentials,
                headers: new Headers(parsedHeaders),
                cors: allowCors ? 'cors' : 'no-cors'
              };
              if (!(method !== 'GET' && method !== 'HEAD')) {
                _context3.next = 9;
                break;
              }
              _context3.next = 7;
              return _this.requestPayloadParser(payload);
            case 7:
              parsedPayload = _context3.sent;
              if (_lodash["default"].isPlainObject(parsedPayload) && !formData) {
                requestOptions.body = JSON.stringify(parsedPayload);
                requestOptions.headers.append('Content-Type', 'application/json');
              } else if (formData) {
                requestOptions.body = _this.toFormData(parsedPayload);
              } else {
                requestOptions.body = parsedPayload;
              }
            case 9:
              return _context3.abrupt("return", requestOptions);
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "parseUrl", function (urlPointer) {
      var context = _this.getContext();
      var url = (0, _resolve["default"])(urlPointer, context);
      if (_lodash["default"].isArray(url)) {
        return _lodash["default"].compact(url).join('/');
      }
      return url;
    });
    _defineProperty(_this, "requestUrl", function (baseUrl, path) {
      var parsedBaseUri = _this.parseUrl(baseUrl);
      var parsedPath = _this.parseUrl(path);
      var urlArray = _lodash["default"].compact([parsedBaseUri, parsedPath]);
      return urlArray.join('/').replace(/([^:]\/)\/+/g, '$1') || '/';
    });
    _defineProperty(_this, "mock", function (_ref4) {
      var body = _ref4.body;
      var mock = _this.options.mock;
      var context = _this.getContext();
      var parsedBody = JSON.parse(body);
      var parsedMock = (0, _resolve["default"])(mock, parsedBody, context);
      var mockedBody = _lodash["default"].isPlainObject(parsedMock) ? parsedMock : parsedBody;
      return {
        ok: true,
        body: _objectSpread({
          id: (0, _uuid.v4)()
        }, mockedBody)
      };
    });
    _defineProperty(_this, "requestProcessor", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(payload) {
        var _this$options4, baseUrl, path, mock, expiry, cache, method, parsedUrl, url, searchParams, pagination, params, requestOptions, shadow, request;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this$options4 = _this.options, baseUrl = _this$options4.baseUrl, path = _this$options4.path, mock = _this$options4.mock, expiry = _this$options4.expiry, cache = _this$options4.cache, method = _this$options4.method;
              parsedUrl = _this.requestUrl(baseUrl, path);
              url = new URL(parsedUrl);
              searchParams = _queryString["default"].parse(url.search);
              pagination = _this.getRequestPaginator();
              params = _this.getRequestParams();
              _context4.next = 8;
              return _this.buildRequest(payload);
            case 8:
              requestOptions = _context4.sent;
              if (!mock) {
                _context4.next = 11;
                break;
              }
              return _context4.abrupt("return", _this.mock(requestOptions));
            case 11:
              if (params || pagination) {
                url.search = new URLSearchParams(_objectSpread(_objectSpread(_objectSpread({}, searchParams), pagination), params));
              }
              shadow = throttler.match(_objectSpread(_objectSpread({}, requestOptions), {}, {
                url: url.toString()
              }));
              if (!shadow) {
                _context4.next = 18;
                break;
              }
              _this.uniqueId = shadow.id;
              _context4.next = 17;
              return shadow.promise;
            case 17:
              return _context4.abrupt("return", shadow.request);
            case 18:
              request = method === 'GET' && expiry && cache !== false ? _this.cachedFetch(url, requestOptions, expiry) : fetch(url, requestOptions);
              _this.uniqueId = throttler.push(request, _objectSpread(_objectSpread({}, requestOptions), {}, {
                url: url.toString()
              }));
              return _context4.abrupt("return", request);
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "responseProcessor", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(response) {
        var _this$options5, mock, noContent, body;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this$options5 = _this.options, mock = _this$options5.mock, noContent = _this$options5.noContent;
              if (noContent) {
                _context5.next = 11;
                break;
              }
              if (!mock) {
                _context5.next = 6;
                break;
              }
              _context5.t0 = response.body;
              _context5.next = 9;
              break;
            case 6:
              _context5.next = 8;
              return _this.readBodyStream(response);
            case 8:
              _context5.t0 = _context5.sent;
            case 9:
              body = _context5.t0;
              return _context5.abrupt("return", _this.responseParser(response, body));
            case 11:
              return _context5.abrupt("return", false);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "call", /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(payload) {
        var body, error;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _this.process(payload);
            case 3:
              body = _context6.sent;
              _context6.next = 6;
              return _this.postProcess('success', body, payload);
            case 6:
              throttler.clear(_this.uniqueId);
              return _context6.abrupt("return", body);
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](0);
              if (_context6.t0 instanceof Error) _log["default"].error(_context6.t0);
              _context6.next = 15;
              return _this.exceptionParser(_context6.t0);
            case 15:
              error = _context6.sent;
              _context6.next = 18;
              return _this.postProcess('error', error, payload);
            case 18:
              throttler.clear(_this.uniqueId);
              throw error;
            case 20:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 10]]);
      }));
      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }());
    return _this;
  }
  _inherits(ResourceCall, _Smart);
  return _createClass(ResourceCall, [{
    key: "switchParser",
    value: function () {
      var _switchParser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
        var _this2 = this;
        var collection, entities;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              collection = this.options.collection;
              if (!(collection === true)) {
                _context7.next = 4;
                break;
              }
              entities = data.map(function (entity) {
                return _this2.entityParser(entity);
              });
              return _context7.abrupt("return", (0, _promiseAll["default"])(entities));
            case 4:
              return _context7.abrupt("return", this.entityParser(data, this.options));
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function switchParser(_x8) {
        return _switchParser.apply(this, arguments);
      }
      return switchParser;
    }()
  }, {
    key: "entityParser",
    value: function () {
      var _entityParser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(entity) {
        var entityParser, context, parsedEntity;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              entityParser = this.options.entityParser;
              context = this.getContext();
              _context8.prev = 2;
              _context8.next = 5;
              return (0, _resolve["default"])(entityParser, entity, context);
            case 5:
              parsedEntity = _context8.sent;
              return _context8.abrupt("return", parsedEntity);
            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](2);
              _log["default"].error(_context8.t0);
              return _context8.abrupt("return", null);
            case 13:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[2, 9]]);
      }));
      function entityParser(_x9) {
        return _entityParser.apply(this, arguments);
      }
      return entityParser;
    }()
  }, {
    key: "collectionParser",
    value: function () {
      var _collectionParser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(payload) {
        var collectionParser;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              collectionParser = this.options.collectionParser;
              if (!collectionParser) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return", (0, _resolve["default"])(collectionParser, payload));
            case 3:
              return _context9.abrupt("return", payload);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function collectionParser(_x10) {
        return _collectionParser.apply(this, arguments);
      }
      return collectionParser;
    }()
  }, {
    key: "metaParser",
    value: function metaParser(originalPayload, parsedData) {
      var _this$options6 = this.options,
        baseUrl = _this$options6.baseUrl,
        path = _this$options6.path,
        metaParser = _this$options6.metaParser,
        responseTransform = _this$options6.responseTransform,
        uniqueId = _this$options6.uniqueId;
      var context = this.getContext();
      var parsedMeta = (0, _resolve["default"])(metaParser, originalPayload || {});
      var requestUrl = this.requestUrl(baseUrl, path);
      if (context) {
        var store = (0, _Runtime["default"])('store');
        store._dispatch({
          type: "@@RESOURCE_CALL[".concat(uniqueId, "]"),
          payload: {
            resourceId: uniqueId,
            url: requestUrl,
            sort: context.sort,
            order: context.order,
            search: context.search,
            actionId: context.actionId,
            itemIds: _lodash["default"].map(parsedData, function (entity) {
              return entity.id;
            }),
            meta: responseTransform ? this.transform(parsedMeta, responseTransform) : parsedMeta
          }
        });
      }
    }
  }, {
    key: "schemaParser",
    value: function schemaParser(data) {
      var _this$options7 = this.options,
        schema = _this$options7.schema,
        schemaParser = _this$options7.schemaParser;
      var context = this.getContext();
      return schemaParser ? schemaParser(data, schema, context) : data;
    }
  }, {
    key: "exceptionParser",
    value: function exceptionParser(exception) {
      return _objectSpread({
        code: exception.code || 0,
        status: exception.status || 'javascript_error',
        message: exception.message || 'Oops, something went wrong'
      }, exception);
    }
  }, {
    key: "httpErrorParser",
    value: function httpErrorParser(response) {
      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var payload = _lodash["default"].isObject(body) ? body : {};
      var responseTransform = this.options.responseTransform;
      var error = this.options.errorParser(_objectSpread({
        code: payload.code || response.status,
        status: payload.status || _lodash["default"].snakeCase(response.statusText),
        message: payload.message || response.statusText
      }, responseTransform ? this.transform(body, responseTransform) : body));
      return error;
    }
  }, {
    key: "readBodyStream",
    value: function () {
      var _readBodyStream = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(response) {
        var body, shadow, reader, status;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              shadow = throttler.find(this.uniqueId);
              if (!(shadow && shadow.body)) {
                _context10.next = 3;
                break;
              }
              return _context10.abrupt("return", shadow.body);
            case 3:
              reader = _lodash["default"].lowerCase(this.options.reader);
              _context10.prev = 4;
              _context10.t0 = reader;
              _context10.next = _context10.t0 === 'json' ? 8 : _context10.t0 === 'formdata' ? 12 : _context10.t0 === 'arraybuffer' ? 16 : _context10.t0 === 'blob' ? 20 : _context10.t0 === 'text' ? 24 : 28;
              break;
            case 8:
              _context10.next = 10;
              return response.json();
            case 10:
              body = _context10.sent;
              return _context10.abrupt("break", 32);
            case 12:
              _context10.next = 14;
              return response.formData();
            case 14:
              body = _context10.sent;
              return _context10.abrupt("break", 32);
            case 16:
              _context10.next = 18;
              return response.arrayBuffer();
            case 18:
              body = _context10.sent;
              return _context10.abrupt("break", 32);
            case 20:
              _context10.next = 22;
              return response.blob();
            case 22:
              body = _context10.sent;
              return _context10.abrupt("break", 32);
            case 24:
              _context10.next = 26;
              return response.text();
            case 26:
              body = _context10.sent;
              return _context10.abrupt("break", 32);
            case 28:
              _context10.next = 30;
              return response.text();
            case 30:
              body = _context10.sent;
              return _context10.abrupt("break", 32);
            case 32:
              throttler.set(this.uniqueId, {
                body: body
              });
              _context10.next = 39;
              break;
            case 35:
              _context10.prev = 35;
              _context10.t1 = _context10["catch"](4);
              status = response.status;
              throw new Error("Unexpected content: Could not parse ".concat(reader, " (status: ").concat(status, ")"));
            case 39:
              return _context10.abrupt("return", body);
            case 40:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[4, 35]]);
      }));
      function readBodyStream(_x11) {
        return _readBodyStream.apply(this, arguments);
      }
      return readBodyStream;
    }()
  }, {
    key: "toFormData",
    value: function toFormData(payload) {
      var data = new FormData();
      _lodash["default"].each(payload, function (value, key) {
        data.append(key, value);
      });
      return data;
    }
  }, {
    key: "requestPayloadParser",
    value: function () {
      var _requestPayloadParser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(payload) {
        var parsedPayload, _this$options8, payloadParser, requestTransform, context;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _this$options8 = this.options, payloadParser = _this$options8.payloadParser, requestTransform = _this$options8.requestTransform;
              context = this.getContext();
              if (!payloadParser) {
                _context11.next = 8;
                break;
              }
              _context11.next = 5;
              return (0, _resolve["default"])(payloadParser, payload, context);
            case 5:
              parsedPayload = _context11.sent;
              _context11.next = 11;
              break;
            case 8:
              _context11.next = 10;
              return this.serializeRequestBody(payload);
            case 10:
              parsedPayload = _context11.sent;
            case 11:
              if (requestTransform) parsedPayload = this.transform(parsedPayload, requestTransform);
              return _context11.abrupt("return", (0, _cleanDeep["default"])(parsedPayload));
            case 13:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function requestPayloadParser(_x12) {
        return _requestPayloadParser.apply(this, arguments);
      }
      return requestPayloadParser;
    }()
  }, {
    key: "transform",
    value: function transform(payload, predicate) {
      var parsedPayload = _lodash["default"].isArray(payload) ? [] : {};
      for (var key in payload) {
        var nextKey = predicate(key);
        if (_lodash["default"].isPlainObject(payload[key])) {
          parsedPayload[nextKey] = this.transform(payload[key], predicate);
        } else {
          parsedPayload[nextKey] = payload[key];
        }
      }
      return parsedPayload;
    }
  }, {
    key: "postProcess",
    value: function () {
      var _postProcess = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(status, body, payload) {
        var options, _this$options9, onSuccess, onError;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              options = this.options;
              _this$options9 = this.options, onSuccess = _this$options9.onSuccess, onError = _this$options9.onError;
              if (!(onSuccess && status === 'success')) {
                _context12.next = 7;
                break;
              }
              _context12.next = 5;
              return onSuccess(body, {
                payload: payload,
                options: options
              });
            case 5:
              _context12.next = 10;
              break;
            case 7:
              if (!(onError && status === 'error')) {
                _context12.next = 10;
                break;
              }
              _context12.next = 10;
              return onError(body, {
                payload: payload,
                options: options
              });
            case 10:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function postProcess(_x13, _x14, _x15) {
        return _postProcess.apply(this, arguments);
      }
      return postProcess;
    }()
  }, {
    key: "getRequestPaginator",
    value: function getRequestPaginator() {
      var paginate = this.options.paginate;
      var context = this.getContext();
      var pagination = (0, _resolve["default"])(paginate);
      return pagination || (context ? (0, _cleanDeep["default"])({
        sort: _lodash["default"].snakeCase(context.sort),
        order: context.order,
        page: context.page
      }) : false);
    }
  }, {
    key: "parseFilters",
    value: function parseFilters() {
      var context = this.getContext();
      var rawFilter = this.options.filter;
      var filters = (0, _resolve["default"])(rawFilter, context);
      var parsedFilters = this.transform(filters, _lodash["default"].snakeCase);
      return _lodash["default"].pickBy(parsedFilters, _lodash["default"].identity);
    }
  }, {
    key: "getRequestParams",
    value: function getRequestParams() {
      var context = this.getContext();
      var filters = this.parseFilters();
      if (context) {
        var search = context.search;
        return search ? _objectSpread({
          search: search
        }, filters) : filters;
      }
      return filters;
    }
  }, {
    key: "cachedFetch",
    value: function () {
      var _cachedFetch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(url, options, expiry) {
        var cacheKey, cached, whenCached, age, _response, response, contentType, responseClone, content;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              cacheKey = url;
              cached = global.sessionStorage.getItem(cacheKey);
              whenCached = global.sessionStorage.getItem("".concat(cacheKey, ":ts"));
              if (!(cached !== null && whenCached !== null)) {
                _context13.next = 10;
                break;
              }
              age = Date.now() - whenCached;
              if (!(age < expiry)) {
                _context13.next = 8;
                break;
              }
              _response = new Response(new Blob([cached]));
              return _context13.abrupt("return", Promise.resolve(_response));
            case 8:
              global.sessionStorage.removeItem(cacheKey);
              global.sessionStorage.removeItem("".concat(cacheKey, ":ts"));
            case 10:
              _context13.next = 12;
              return fetch(url, options);
            case 12:
              response = _context13.sent;
              if (!(response.status === 200)) {
                _context13.next = 24;
                break;
              }
              contentType = response.headers.get('Content-Type');
              if (!(contentType && contentType.match(/application\/json/i))) {
                _context13.next = 24;
                break;
              }
              _context13.next = 18;
              return response.clone();
            case 18:
              responseClone = _context13.sent;
              _context13.next = 21;
              return responseClone.text();
            case 21:
              content = _context13.sent;
              global.sessionStorage.setItem(cacheKey, content);
              global.sessionStorage.setItem("".concat(cacheKey, ":ts"), Date.now());
            case 24:
              return _context13.abrupt("return", response);
            case 25:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function cachedFetch(_x16, _x17, _x18) {
        return _cachedFetch.apply(this, arguments);
      }
      return cachedFetch;
    }()
  }, {
    key: "defaultHook",
    value: function defaultHook(request, parser, payload) {
      return _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var response;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return request(payload);
            case 2:
              response = _context14.sent;
              _context14.next = 5;
              return parser(response);
            case 5:
              return _context14.abrupt("return", _context14.sent);
            case 6:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }))();
    }
  }, {
    key: "process",
    value: function () {
      var _process = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(payload) {
        var hook, context, request, parser, requestHook, generator, responseProcessor, response, bodyProcessor, body, parsedBodyProcessor, parsedBody;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              hook = this.options.hook;
              context = this.getContext();
              request = this.requestProcessor;
              parser = this.responseProcessor;
              requestHook = hook || this.defaultHook;
              _context15.next = 7;
              return requestHook(request, parser, payload, context);
            case 7:
              generator = _context15.sent;
              _context15.next = 10;
              return generator.next();
            case 10:
              responseProcessor = _context15.sent;
              _context15.next = 13;
              return responseProcessor.value;
            case 13:
              response = _context15.sent;
              _context15.next = 16;
              return generator.next(response);
            case 16:
              bodyProcessor = _context15.sent;
              _context15.next = 19;
              return bodyProcessor.value;
            case 19:
              body = _context15.sent;
              _context15.next = 22;
              return generator.next(body);
            case 22:
              parsedBodyProcessor = _context15.sent;
              _context15.next = 25;
              return parsedBodyProcessor.value;
            case 25:
              parsedBody = _context15.sent;
              if (response.ok) {
                _context15.next = 28;
                break;
              }
              throw this.httpErrorParser(response, parsedBody);
            case 28:
              return _context15.abrupt("return", parsedBody);
            case 29:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function process(_x19) {
        return _process.apply(this, arguments);
      }
      return process;
    }()
  }]);
}(_Smart2["default"]);
_defineProperty(ResourceCall, "defaults", function (options) {
  return {
    options: options
  };
});
var _default = exports["default"] = ResourceCall;
//# sourceMappingURL=ResourceCall.js.map