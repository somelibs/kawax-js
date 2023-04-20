"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extend2 = _interopRequireDefault(require("lodash/extend"));
var _remove2 = _interopRequireDefault(require("lodash/remove"));
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _find2 = _interopRequireDefault(require("lodash/find"));
var _uuid = require("uuid");
var _Smart2 = _interopRequireDefault(require("../Smart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var CallThrottler = /*#__PURE__*/function (_Smart) {
  _inherits(CallThrottler, _Smart);
  var _super = _createSuper(CallThrottler);
  function CallThrottler() {
    var _this;
    _classCallCheck(this, CallThrottler);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "stack", []);
    return _this;
  }
  _createClass(CallThrottler, [{
    key: "match",
    value: function match(call) {
      var payload = JSON.stringify(call);
      var match = (0, _find2["default"])(this.stack, function (item) {
        return (0, _isEqual2["default"])(item.payload, payload);
      });
      if (match && call.method === 'GET') {
        match.instances += 1;
        return match;
      }
      return false;
    }
  }, {
    key: "push",
    value: function push(request, call) {
      var resolver;
      var id = (0, _uuid.v4)();
      var instances = 1;
      var payload = JSON.stringify(call);
      var promise = new Promise(function (resolveCall) {
        resolver = resolveCall;
      });
      this.stack.push({
        id: id,
        promise: promise,
        request: request,
        resolver: resolver,
        payload: payload,
        instances: instances
      });
      return id;
    }
  }, {
    key: "clear",
    value: function clear(id) {
      var match = (0, _find2["default"])(this.stack, function (item) {
        return item.id === id;
      });
      if (match) {
        match.resolver(true);
        if (match.instances === 1) {
          (0, _remove2["default"])(this.stack, function (item) {
            return item.id === id;
          });
        } else {
          match.instances -= 1;
        }
      }
    }
  }, {
    key: "set",
    value: function set(id, data) {
      var match = (0, _find2["default"])(this.stack, function (item) {
        return item.id === id;
      });
      if (match) {
        (0, _extend2["default"])(match, data);
      }
    }
  }, {
    key: "find",
    value: function find(id) {
      var match = (0, _find2["default"])(this.stack, function (item) {
        return item.id === id;
      });
      return match;
    }
  }]);
  return CallThrottler;
}(_Smart2["default"]);
var _default = CallThrottler;
exports["default"] = _default;