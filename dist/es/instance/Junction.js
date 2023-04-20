"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _map2 = _interopRequireDefault(require("lodash/map"));
var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));
var _each2 = _interopRequireDefault(require("lodash/each"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _component = _interopRequireDefault(require("@loadable/component"));
var _reactRouter = require("react-router");
var _Component = _interopRequireDefault(require("../Component"));
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
var Junction = /*#__PURE__*/function (_React$Component) {
  _inherits(Junction, _React$Component);
  var _super = _createSuper(Junction);
  function Junction() {
    var _this;
    _classCallCheck(this, Junction);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      match: undefined
    });
    _defineProperty(_assertThisInitialized(_this), "setRef", function (route) {
      return function (reference) {
        if (reference) {
          _this.setState({
            route: route,
            location: (0, _get2["default"])(reference, 'props.location'),
            match: (0, _get2["default"])(reference, 'props.computedMatch')
          });
        }
      };
    });
    _defineProperty(_assertThisInitialized(_this), "renderComponent", function () {});
    _defineProperty(_assertThisInitialized(_this), "getFullPath", function (path) {
      var basePath = _this.props.basePath;
      return basePath ? "/".concat(basePath).concat(path) : path;
    });
    _defineProperty(_assertThisInitialized(_this), "renderWithProviders", function (screen, providers) {
      return function (props) {
        var renderer = /*#__PURE__*/_react["default"].createElement(screen, props);
        (0, _each2["default"])(providers, function (Provider) {
          renderer = /*#__PURE__*/_react["default"].createElement(Provider, props, renderer);
        });
        return renderer;
      };
    });
    return _this;
  }
  _createClass(Junction, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var basePath = this.props.basePath;
      var match = this.state.match;
      var shouldUpdate = !(0, _isEqual2["default"])(match, nextState.match) || !(0, _isEqual2["default"])(basePath, nextProps.basePath);
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
      var key = "route-".concat((0, _uniqueId2["default"])());
      var fullPath = this.getFullPath(route.path);
      var screen = (0, _component["default"])(route.component);
      if (route.providers) {
        var providers = (0, _map2["default"])(route.providers, function (provider) {
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
      return /*#__PURE__*/_react["default"].createElement(_reactRouter.Switch, null, (0, _map2["default"])(routes, function (route) {
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
  return Junction;
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
var _default = (0, _Component["default"])(Junction);
exports["default"] = _default;