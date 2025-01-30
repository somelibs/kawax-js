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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var Router = /*#__PURE__*/function (_React$Component) {
  function Router(props, state) {
    var _this;
    _classCallCheck(this, Router);
    _this = _callSuper(this, Router, [props, state]);
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
  _inherits(Router, _React$Component);
  return _createClass(Router, [{
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
var _default = exports["default"] = (0, _Component["default"])(Router);
//# sourceMappingURL=Router.js.map