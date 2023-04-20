"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _compact2 = _interopRequireDefault(require("lodash/compact"));
var _find2 = _interopRequireDefault(require("lodash/find"));
var _map2 = _interopRequireDefault(require("lodash/map"));
var _mapValues2 = _interopRequireDefault(require("lodash/mapValues"));
var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));
var _last2 = _interopRequireDefault(require("lodash/last"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _each2 = _interopRequireDefault(require("lodash/each"));
var _includes2 = _interopRequireDefault(require("lodash/includes"));
var _filter2 = _interopRequireDefault(require("lodash/filter"));
var _first2 = _interopRequireDefault(require("lodash/first"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _Smart2 = _interopRequireDefault(require("../Smart"));
var _Runtime = _interopRequireDefault(require("../instance/Runtime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
var argsToArray = function argsToArray() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return (0, _isArray2["default"])((0, _first2["default"])(keys)) ? (0, _first2["default"])(keys) : keys;
};
var ActionStack = /*#__PURE__*/function (_Smart) {
  _inherits(ActionStack, _Smart);
  var _super = _createSuper(ActionStack);
  function ActionStack() {
    var _this;
    _classCallCheck(this, ActionStack);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "keys", {});
    _defineProperty(_assertThisInitialized(_this), "stack", []);
    _defineProperty(_assertThisInitialized(_this), "persisted", []);
    return _this;
  }
  _createClass(ActionStack, [{
    key: "push",
    value: function push(_ref) {
      var id = _ref.id,
        key = _ref.key,
        instance = _ref.instance;
      this.stack.push({
        id: id,
        key: key,
        instance: instance
      });
    }
  }, {
    key: "watch",
    value: function watch(key, id) {
      this.push({
        id: id,
        key: key
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.stack = force ? [] : (0, _filter2["default"])(this.stack, function (item) {
        return (0, _includes2["default"])(_this2.persisted, item.key);
      });
    }
  }, {
    key: "clearExcept",
    value: function clearExcept() {
      var _this3 = this;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var preserve = argsToArray(args);
      this.stack = (0, _filter2["default"])(this.stack, function (item) {
        return (0, _includes2["default"])(_this3.persisted, item.key) || (0, _includes2["default"])(preserve, item.key);
      });
    }
  }, {
    key: "clearSome",
    value: function clearSome() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      var actions = argsToArray(args);
      this.stack = (0, _filter2["default"])(this.stack, function (item) {
        return !(0, _includes2["default"])(actions, item.key);
      });
    }
  }, {
    key: "clearOnChange",
    value: function clearOnChange() {
      var _this4 = this;
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keys = argsToArray(args);
      (0, _each2["default"])(this.keys, function (value, key) {
        if (!(0, _isEmpty2["default"])(_this4.keys) && value !== keys[key]) {
          _this4.clear(true);
        }
      });
      this.keys = keys;
    }
  }, {
    key: "persist",
    value: function persist() {
      var _this$persisted;
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var keys = argsToArray(args);
      (_this$persisted = this.persisted).push.apply(_this$persisted, keys);
    }
  }, {
    key: "find",
    value: function find(key) {
      var map = this.groups();
      return map[key] || [];
    }
  }, {
    key: "findLast",
    value: function findLast() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var stack = key ? this.find(key) : this.own();
      return (0, _last2["default"])(stack);
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var stack = key ? this.find(key) : this.own();
      return (0, _filter2["default"])(stack, function (action) {
        return action && action.status === 'error';
      });
    }
  }, {
    key: "getLastError",
    value: function getLastError() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var action = this.findLast(key);
      return action && action.status === 'error' ? action.payload : false;
    }
  }, {
    key: "isError",
    value: function isError() {
      var _this5 = this;
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      var keys = argsToArray(args);
      var success;
      (0, _each2["default"])(keys, function (key) {
        var actions = _this5.find(key);
        (0, _each2["default"])(actions, function (action) {
          success = success === false ? success : action && action.status === 'error';
        });
      });
      return !!success;
    }
  }, {
    key: "isSuccess",
    value: function isSuccess() {
      var _this6 = this;
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      var keys = argsToArray(args);
      var success;
      (0, _each2["default"])(keys, function (key) {
        var actions = _this6.find(key);
        (0, _each2["default"])(actions, function (action) {
          success = success === false ? success : action && action.status === 'success';
        });
      });
      return !!success;
    }
  }, {
    key: "lastSucceeded",
    value: function lastSucceeded() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      var keys = argsToArray(args);
      return this.lastOf(keys, 'success');
    }
  }, {
    key: "isDone",
    value: function isDone() {
      var _this7 = this;
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      var keys = argsToArray(args);
      var done;
      (0, _each2["default"])(keys, function (key) {
        var actions = _this7.find(key);
        (0, _each2["default"])(actions, function (action) {
          done = done === false ? done : !(!action || action.status === 'pending');
        });
      });
      return !!done;
    }
  }, {
    key: "wasDoneOnce",
    value: function wasDoneOnce() {
      var _this8 = this;
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      var keys = argsToArray(args);
      var done;
      (0, _each2["default"])(keys, function (key) {
        var actions = _this8.find(key);
        var keyDone;
        (0, _each2["default"])(actions, function (action) {
          keyDone = keyDone || !(!action || action.status === 'pending');
        });
        done = done === false ? done : keyDone;
      });
      return !!done;
    }
  }, {
    key: "isPending",
    value: function isPending() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      var keys = argsToArray(args);
      return this.anyOf(keys, 'pending');
    }
  }, {
    key: "anyOf",
    value: function anyOf() {
      var _this9 = this;
      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var status = arguments.length > 1 ? arguments[1] : undefined;
      var anyOf = false;
      (0, _each2["default"])(keys, function (key) {
        var actions = _this9.find(key);
        (0, _each2["default"])(actions, function (action) {
          anyOf = anyOf || !!(action && action.status === status);
        });
      });
      return !!anyOf;
    }
  }, {
    key: "lastOf",
    value: function lastOf() {
      var _this10 = this;
      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var status = arguments.length > 1 ? arguments[1] : undefined;
      var lastOf;
      (0, _each2["default"])(keys, function (key) {
        var action = (0, _last2["default"])(_this10.find(key));
        lastOf = lastOf === false ? lastOf : action && action.status === status;
      });
      return !!lastOf;
    }
  }, {
    key: "any",
    value: function any(status) {
      var any = false;
      var actions = this.own();
      (0, _each2["default"])(actions, function (action) {
        any = any || !!(action && action.status === status);
      });
      return !!any;
    }
  }, {
    key: "groups",
    value: function groups() {
      var store = (0, _Runtime["default"])('store');
      var state = store.getInternalState();
      var actions = state.actions;
      var groups = (0, _groupBy2["default"])(this.stack, 'key');
      return (0, _mapValues2["default"])(groups, function (stack) {
        return (0, _map2["default"])(stack, function (item) {
          var stackId = item.id;
          return (0, _find2["default"])(actions, function (action) {
            return stackId === action.id;
          });
        });
      });
    }
  }, {
    key: "own",
    value: function own() {
      var Store = (0, _Runtime["default"])('store');
      var state = Store.getInternalState();
      var actions = state.actions;
      var map = (0, _map2["default"])(this.stack, function (item) {
        var stackId = item.id;
        return (0, _find2["default"])(actions, function (action) {
          return stackId === action.id;
        });
      });
      return (0, _compact2["default"])(map);
    }
  }, {
    key: "all",
    value: function all() {
      var Store = (0, _Runtime["default"])('store');
      var state = Store.getInternalState();
      return state.actions;
    }
  }, {
    key: "getMetaPer",
    value: function getMetaPer(key) {
      var action = this.findLast(key);
      if (action) {
        var Store = (0, _Runtime["default"])('store');
        var state = Store.getInternalState();
        var resources = state.resources;
        return (0, _find2["default"])(resources, function (meta) {
          return (0, _includes2["default"])(meta.actionIds, action.id);
        });
      }
    }
  }, {
    key: "getInstances",
    value: function getInstances(key) {
      var groups = (0, _groupBy2["default"])(this.stack, 'key');
      return (0, _isArray2["default"])(groups[key]) ? groups[key].map(function (item) {
        return item.instance;
      }) : [];
    }
  }, {
    key: "abort",
    value: function () {
      var _abort = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              (0, _each2["default"])(this.stack, function (_ref2) {
                var instance = _ref2.instance;
                if (instance) {
                  instance.abort();
                }
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function abort() {
        return _abort.apply(this, arguments);
      }
      return abort;
    }()
  }]);
  return ActionStack;
}(_Smart2["default"]);
var _default = ActionStack;
exports["default"] = _default;