"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
exports.__esModule = true;
exports["default"] = Component;
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _mapValues2 = _interopRequireDefault(require("lodash/mapValues"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _reject2 = _interopRequireDefault(require("lodash/reject"));
var _omit2 = _interopRequireDefault(require("lodash/omit"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));
var _pickBy2 = _interopRequireDefault(require("lodash/pickBy"));
var _assign2 = _interopRequireDefault(require("lodash/assign"));
var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));
var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));
var _each2 = _interopRequireDefault(require("lodash/each"));
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
var _map2 = _interopRequireDefault(require("lodash/map"));
var _compact2 = _interopRequireDefault(require("lodash/compact"));
var _includes2 = _interopRequireDefault(require("lodash/includes"));
var _omitBy2 = _interopRequireDefault(require("lodash/omitBy"));
var _keys2 = _interopRequireDefault(require("lodash/keys"));
var _uniq2 = _interopRequireDefault(require("lodash/uniq"));
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Component(Pure) {
  if (!Pure.prototype.isReactComponent) (0, _warning["default"])(Pure, 'should be a class based React Component');
  var persistActionStack = Pure.persistActionStack || false;

  /* -------------------------------------------------------------------------------------------- *\
  |*                                          Instance                                            *|
  \* -------------------------------------------------------------------------------------------- */

  var instanceKeys = [];
  var composedProps = ['instanceKey', 'select', 'actions', 'dispatch', 'children', 'ownActions', 'ownClassNames'];
  function updateComposedProps(props) {
    composedProps = (0, _uniq2["default"])([].concat(composedProps, (0, _keys2["default"])(props)));
    return composedProps;
  }

  /* -------------------------------------------------------------------------------------------- *\
  |*                                         Pure props                                           *|
  \* -------------------------------------------------------------------------------------------- */

  Pure.prototype.getPureProps = function getPureProps() {
    return (0, _omitBy2["default"])(this.props, function (value, key) {
      return (0, _includes2["default"])(composedProps, key);
    });
  };
  Pure.prototype.getForwardProps = function getForwardProps() {
    /* eslint-disable-next-line react/forbid-foreign-prop-types */
    var ownProps = (0, _keys2["default"])(Pure.propTypes);
    return (0, _omitBy2["default"])(this.props, function (value, key) {
      return (0, _includes2["default"])(ownProps, key) || (0, _includes2["default"])(composedProps, key);
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
    return (0, _compact2["default"])([Pure[key] || {}].concat((0, _map2["default"])(Pure.mixins, function (mixin) {
      return (0, _isObject2["default"])(mixin.props) && mixin.props[key];
    })));
  }
  function resolveStaticWithMixins(key) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var resolved = {};
    var staticMap = aggregateStaticWithMixins(key);
    (0, _each2["default"])(staticMap, function (mixin) {
      var mixinResult = _resolve["default"].call(componentInstance, mixin, options);
      Object.assign(resolved, mixinResult);
    });
    return resolved;
  }
  function bindMixin(mixin) {
    if ((0, _isFunction2["default"])(mixin)) return mixin.bind(componentInstance);
    if ((0, _isObject2["default"])(mixin) && !(0, _isUndefined2["default"])(mixin.call)) {
      return function () {
        (0, _assign2["default"])(mixin, componentInstance);
        return mixin.call.apply(mixin, arguments);
      };
    }
    return mixin;
  }
  function getMixins() {
    var mixins = {};
    if (Pure.mixins) {
      (0, _each2["default"])(Pure.mixins, function (mixin, key) {
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
    _clearActionStack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var keys,
        store,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            keys = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : actionStack.keys;
            store = (0, _Runtime3["default"])('store');
            actionStack = (0, _pickBy2["default"])(actionStack, /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(instance, key) {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(0, _includes2["default"])(keys, key)) {
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
    var _class;
    return _class = /*#__PURE__*/function (_React$Component) {
      _inherits(Wrapper, _React$Component);
      var _super = _createSuper(Wrapper);
      function Wrapper() {
        var _this;
        _classCallCheck(this, Wrapper);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "instanceKey", "".concat(displayName, "Component").concat((0, _uniqueId2["default"])()));
        return _this;
      }
      _createClass(Wrapper, [{
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
          if (!(0, _isEmpty2["default"])(contextToProps) || Pure.propsToContext) {
            return /*#__PURE__*/_react["default"].createElement(_Context["default"].Consumer, null, function (context) {
              prevContext = context;
              var contextProps = resolveStaticWithMixins('contextToProps', {
                context: context,
                ownProps: ownProps
              });
              updateComposedProps(contextProps);
              if (!(0, _isEmpty2["default"])(contextProps)) {
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
      return Wrapper;
    }(_react["default"].Component), _defineProperty(_class, "displayName", "Wrapper(".concat(displayName, ")")), _class;
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
    (0, _each2["default"])(selectors, function (selector, key) {
      var _native = !!(0, _includes2["default"])(specialChars, key[0]);
      var newKey = !_native ? "&".concat(key) : key;
      if ((0, _isPlainObject2["default"])(selector) && !_native) {
        mappedSelectors[newKey] = mapSelectors(selector);
      } else {
        mappedSelectors[key] = selector;
      }
    });
    return mappedSelectors;
  }
  function mapNestedStyle(stylesheet) {
    (0, _each2["default"])(stylesheet, function (item, selectorKey) {
      var selectors = item._definition;
      stylesheet[selectorKey]._definition = mapSelectors(selectors, true);
    });
    return stylesheet;
  }
  function getCssClasses(props, state) {
    if ((0, _isFunction2["default"])(Pure.css) || uniqClassName === false) {
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
    return (0, _omit2["default"])(props, omitted);
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
    _inherits(PureReflection, _React$Component2);
    var _super2 = _createSuper(PureReflection);
    function PureReflection() {
      var _this2;
      _classCallCheck(this, PureReflection);
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      _this2 = _super2.call.apply(_super2, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this2), "state", {
        initialized: false
      });
      _defineProperty(_assertThisInitialized(_this2), "getClassNames", function (currentClassNames) {
        /* eslint-disable react/prop-types */
        var current = currentClassNames ? currentClassNames.split(' ') : false;
        var currentClass = current ? (0, _reject2["default"])(current, function (i) {
          return i === previousClassName;
        }) : false;
        var computedClass = getCssClasses(_this2.fullProps, _this2.state) || false;
        var uniq = (0, _uniq2["default"])([].concat(currentClass, computedClass));
        return (0, _classnames["default"])((0, _compact2["default"])(uniq));
      });
      _defineProperty(_assertThisInitialized(_this2), "componentDidUpdate", function () {
        _this2.mapCssClasses();
      });
      _defineProperty(_assertThisInitialized(_this2), "componentDidMount", function () {
        _this2.mapCssClasses();
      });
      return _this2;
    }
    _createClass(PureReflection, [{
      key: "mapCssClasses",
      value: function mapCssClasses() {
        /* eslint-disable react/no-find-dom-node */
        if (Pure.className || Pure.css) {
          var className = this.fullProps.className;
          var cssClasses = getCssClasses(this.fullProps, this.state);
          var fiber = (0, _get2["default"])(componentInstance, '_reactInternalFiber');
          var sibling = (0, _get2["default"])(fiber, 'child.sibling');
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
        var _componentWillUnmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    return PureReflection;
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
    return (0, _mapValues2["default"])(actionConstructors, function (actionConstructor, key) {
      if ((0, _isFunction2["default"])(actionConstructor)) {
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
      var ownActions = (0, _isEmpty2["default"])(actions) ? {} : actions.own();
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
    if ((0, _isFunction2["default"])(dispatchToProps)) {
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
    return (0, _isEqual2["default"])(next, prev);
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