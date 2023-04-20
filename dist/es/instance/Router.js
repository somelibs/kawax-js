"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouter = require("react-router");
var _Component = _interopRequireDefault(require("../Component"));
var _History = _interopRequireDefault(require("./History"));
var _Runtime = _interopRequireDefault(require("./Runtime"));
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
var Router = /*#__PURE__*/function (_React$Component) {
  _inherits(Router, _React$Component);
  var _super = _createSuper(Router);
  function Router(props, state) {
    var _this;
    _classCallCheck(this, Router);
    _this = _super.call(this, props, state);
    var _this$props = _this.props,
      history = _this$props.history,
      historyHook = _this$props.historyHook;
    _this.toggleHistory = history.listen(function (location, action) {
      historyHook({
        location: location,
        action: action
      });
    });
    return _this;
  }
  _createClass(Router, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleHistory();
    }
  }, {
    key: "render",
    value: function render() {
      _reactRouter.Router.displayName = 'ReactRouter';
      return /*#__PURE__*/_react["default"].createElement(_reactRouter.Router, this.props);
    }
  }]);
  return Router;
}(_react["default"].Component);
_defineProperty(Router, "stateToProps", function (_ref) {
  var ownProps = _ref.ownProps;
  var Store = (0, _Runtime["default"])('store');
  var state = Store.getInternalState();
  return {
    events: state.router
  };
});
_defineProperty(Router, "actionCreators", function (_ref2) {
  var nextProps = _ref2.nextProps;
  var historyHook = nextProps.historyHook;
  return {
    historyHook: historyHook || false
  };
});
_defineProperty(Router, "dispatchToProps", function (_ref3) {
  var dispatch = _ref3.dispatch,
    actionCreators = _ref3.actionCreators;
  var historyHook = actionCreators.historyHook;
  return {
    historyHook: historyHook || function (payload) {
      return dispatch({
        type: '@@NAVIGATE',
        payload: payload
      });
    }
  };
});
_defineProperty(Router, "propTypes", {
  history: _propTypes["default"].object,
  historyHook: _propTypes["default"].func.isRequired
});
_defineProperty(Router, "defaultProps", {
  history: _History["default"]
});
_defineProperty(Router, "propsToContext", function (_ref4) {
  var ownProps = _ref4.ownProps;
  return {
    location: ownProps.history.location,
    history: ownProps.history
  };
});
var _default = (0, _Component["default"])(Router);
exports["default"] = _default;