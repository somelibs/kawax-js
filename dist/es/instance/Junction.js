"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _component = _interopRequireDefault(require("@loadable/component"));
var _reactRouter = require("react-router");
var _Component = _interopRequireDefault(require("../Component"));
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
var Junction = /*#__PURE__*/function (_React$Component) {
  function Junction() {
    var _this;
    _classCallCheck(this, Junction);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Junction, [].concat(args));
    _defineProperty(_this, "state", {
      match: undefined
    });
    _defineProperty(_this, "setRef", function (route) {
      return function (reference) {
        if (reference) {
          _this.setState({
            route: route,
            location: _lodash["default"].get(reference, 'props.location'),
            match: _lodash["default"].get(reference, 'props.computedMatch')
          });
        }
      };
    });
    _defineProperty(_this, "renderComponent", function () {});
    _defineProperty(_this, "getFullPath", function (path) {
      var basePath = _this.props.basePath;
      return basePath ? "/".concat(basePath).concat(path) : path;
    });
    _defineProperty(_this, "renderWithProviders", function (screen, providers) {
      return function (props) {
        var renderer = /*#__PURE__*/_react["default"].createElement(screen, props);
        _lodash["default"].each(providers, function (Provider) {
          renderer = /*#__PURE__*/_react["default"].createElement(Provider, props, renderer);
        });
        return renderer;
      };
    });
    return _this;
  }
  _inherits(Junction, _React$Component);
  return _createClass(Junction, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var basePath = this.props.basePath;
      var match = this.state.match;
      var shouldUpdate = !_lodash["default"].isEqual(match, nextState.match) || !_lodash["default"].isEqual(basePath, nextProps.basePath);
      return shouldUpdate;
    }
  }, {
    key: "getScope",
    value: function getScope() {
      var _this$props = this.props,
        routes = _this$props.routes,
        scope = _this$props.scope;
      return routes.scope(scope);
    }
  }, {
    key: "getRoutes",
    value: function getRoutes() {
      var _this$props2 = this.props,
        routes = _this$props2.routes,
        scope = _this$props2.scope;
      return routes.draw(scope);
    }
  }, {
    key: "renderRoute",
    value: function renderRoute(route) {
      var key = "route-".concat(_lodash["default"].uniqueId());
      var fullPath = this.getFullPath(route.path);
      var screen = (0, _component["default"])(route.component);
      if (route.providers) {
        var providers = _lodash["default"].map(route.providers, function (provider) {
          return (0, _component["default"])(provider);
        });
        return /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
          key: key,
          path: fullPath,
          ref: this.setRef(route),
          render: this.renderWithProviders(screen, providers)
        });
      }
      return /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
        key: key,
        path: fullPath,
        component: screen,
        ref: this.setRef(route)
      });
    }
  }, {
    key: "renderRoutes",
    value: function renderRoutes() {
      var _this2 = this;
      var routes = this.getRoutes();
      return /*#__PURE__*/_react["default"].createElement(_reactRouter.Switch, null, _lodash["default"].map(routes, function (route) {
        return _this2.renderRoute(route);
      }));
    }
  }, {
    key: "renderWrapper",
    value: function renderWrapper() {
      var scope = this.getScope();
      var routes = this.renderRoutes();
      var _this$state = this.state,
        match = _this$state.match,
        location = _this$state.location,
        route = _this$state.route;
      if (scope.layout) {
        var Layout = (0, _component["default"])(scope.layout);
        return /*#__PURE__*/_react["default"].createElement(Layout, {
          location: location,
          match: match,
          route: route
        }, routes);
      }
      return routes;
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderWrapper();
    }
  }]);
}(_react["default"].Component);
_defineProperty(Junction, "propTypes", {
  scope: _propTypes["default"].string,
  basePath: _propTypes["default"].string,
  routes: _propTypes["default"].object.isRequired
});
_defineProperty(Junction, "defaultProps", {
  scope: undefined,
  basePath: undefined
});
var _default = exports["default"] = (0, _Component["default"])(Junction);
//# sourceMappingURL=Junction.js.map