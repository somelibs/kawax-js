"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _identity2 = _interopRequireDefault(require("lodash/identity"));
var _pickBy2 = _interopRequireDefault(require("lodash/pickBy"));
var _compact2 = _interopRequireDefault(require("lodash/compact"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _each2 = _interopRequireDefault(require("lodash/each"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _lowerCase2 = _interopRequireDefault(require("lodash/lowerCase"));
var _snakeCase2 = _interopRequireDefault(require("lodash/snakeCase"));
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _map2 = _interopRequireDefault(require("lodash/map"));
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }
function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }
function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen["return"] && (this["return"] = void 0); }
_AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };
function _OverloadYield(value, kind) { this.v = value, this.k = kind; }
var throttler = new _CallThrottler["default"]();
var ResourceCall = /*#__PURE__*/function (_Smart) {
  _inherits(ResourceCall, _Smart);
  var _super = _createSuper(ResourceCall);
  function ResourceCall() {
    var _this;
    _classCallCheck(this, ResourceCall);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "getContext", function () {
      var _this$options = _this.options,
        context = _this$options.context,
        resource = _objectWithoutProperties(_this$options, _excluded);
      return _objectSpread(_objectSpread({}, context), {}, {
        resource: resource
      });
    });
    _defineProperty(_assertThisInitialized(_this), "responseParser", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response, body) {
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
              data = !(0, _isEmpty2["default"])(schema) ? _this.schemaParser(data) : data;
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
    _defineProperty(_assertThisInitialized(_this), "serializeRequestBody", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(payload) {
        var parsedPayload, key;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              parsedPayload = {};
              for (key in payload) {
                if ((0, _isPlainObject2["default"])(payload[key])) {
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
    _defineProperty(_assertThisInitialized(_this), "buildRequest", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(payload) {
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
              if ((0, _isPlainObject2["default"])(parsedPayload) && !formData) {
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
    _defineProperty(_assertThisInitialized(_this), "parseUrl", function (urlPointer) {
      var context = _this.getContext();
      var url = (0, _resolve["default"])(urlPointer, context);
      if ((0, _isArray2["default"])(url)) {
        return (0, _compact2["default"])(url).join('/');
      }
      return url;
    });
    _defineProperty(_assertThisInitialized(_this), "requestUrl", function (baseUrl, path) {
      var parsedBaseUri = _this.parseUrl(baseUrl);
      var parsedPath = _this.parseUrl(path);
      var urlArray = (0, _compact2["default"])([parsedBaseUri, parsedPath]);
      return urlArray.join('/').replace(/([^:]\/)\/+/g, '$1') || '/';
    });
    _defineProperty(_assertThisInitialized(_this), "mock", function (_ref4) {
      var body = _ref4.body;
      var mock = _this.options.mock;
      var context = _this.getContext();
      var parsedBody = JSON.parse(body);
      var parsedMock = (0, _resolve["default"])(mock, parsedBody, context);
      var mockedBody = (0, _isPlainObject2["default"])(parsedMock) ? parsedMock : parsedBody;
      return {
        ok: true,
        body: _objectSpread({
          id: (0, _uuid.v4)()
        }, mockedBody)
      };
    });
    _defineProperty(_assertThisInitialized(_this), "requestProcessor", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(payload) {
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
    _defineProperty(_assertThisInitialized(_this), "responseProcessor", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(response) {
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
    _defineProperty(_assertThisInitialized(_this), "call", /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(payload) {
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
  _createClass(ResourceCall, [{
    key: "switchParser",
    value: function () {
      var _switchParser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
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
      var _entityParser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(entity) {
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
      var _collectionParser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(payload) {
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
            itemIds: (0, _map2["default"])(parsedData, function (entity) {
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
      var payload = (0, _isObject2["default"])(body) ? body : {};
      var responseTransform = this.options.responseTransform;
      var error = this.options.errorParser(_objectSpread({
        code: payload.code || response.status,
        status: payload.status || (0, _snakeCase2["default"])(response.statusText),
        message: payload.message || response.statusText
      }, responseTransform ? this.transform(body, responseTransform) : body));
      return error;
    }
  }, {
    key: "readBodyStream",
    value: function () {
      var _readBodyStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(response) {
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
              reader = (0, _lowerCase2["default"])(this.options.reader);
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
      (0, _each2["default"])(payload, function (value, key) {
        data.append(key, value);
      });
      return data;
    }
  }, {
    key: "requestPayloadParser",
    value: function () {
      var _requestPayloadParser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(payload) {
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
      var parsedPayload = (0, _isArray2["default"])(payload) ? [] : {};
      for (var key in payload) {
        var nextKey = predicate(key);
        if ((0, _isPlainObject2["default"])(payload[key])) {
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
      var _postProcess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(status, body, payload) {
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
        sort: (0, _snakeCase2["default"])(context.sort),
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
      var parsedFilters = this.transform(filters, _snakeCase2["default"]);
      return (0, _pickBy2["default"])(parsedFilters, _identity2["default"]);
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
      var _cachedFetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(url, options, expiry) {
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
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
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
      var _process = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(payload) {
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
  return ResourceCall;
}(_Smart2["default"]);
_defineProperty(ResourceCall, "defaults", function (options) {
  return {
    options: options
  };
});
var _default = ResourceCall;
exports["default"] = _default;