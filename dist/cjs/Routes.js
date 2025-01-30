"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Routes = /*#__PURE__*/function (_Smart) {
  function Routes() {
    _classCallCheck(this, Routes);
    return _callSuper(this, Routes, arguments);
  }
  _inherits(Routes, _Smart);
  return _createClass(Routes, [{
    key: "initialize",
    value: function initialize() {
      var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._mount = (0, _resolve["default"])(routes) || {};
    }
  }, {
    key: "scope",
    value: function scope(_scope) {
      if (_scope) {
        var node = this._getNode();
        var match = null;
        var routes = node.routes;
        var paths = _scope.split('/');
        _lodash["default"].each(paths, function (path) {
          var next = _lodash["default"].find(routes, {
            path: path
          });
          if (next) {
            match = next;
            routes = next.routes;
          } else {
            match = null;
          }
        });
        return match;
      }
    }
  }, {
    key: "draw",
    value: function draw(scope) {
      var node = scope ? this._getNode(scope) : this._mount;
      return this._parseNode(node, scope);
    }
  }, {
    key: "extends",
    value: function _extends(scope) {
      var node = this.scope(scope);
      return node.routes;
    }
  }, {
    key: "_parseNode",
    value: function _parseNode(node, scope) {
      var parentProviders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var parentContext = arguments.length > 3 ? arguments[3] : undefined;
      var routes = (0, _resolve["default"])(node.routes, this);
      var context = _objectSpread(_objectSpread({}, parentContext), node.context);
      var providers = _lodash["default"].compact([].concat(_toConsumableArray(parentProviders), [node.provider]));
      var subRoutes = _lodash["default"].flatten(this._mapNode(routes, scope, providers, context));
      var currentRoute = this._getRoute(node, scope, providers, context, true);
      return _lodash["default"].compact([].concat(_toConsumableArray(_lodash["default"].flatten(subRoutes)), [currentRoute]));
    }
  }, {
    key: "_mapNode",
    value: function _mapNode(routes, scope) {
      var _this = this;
      var providers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return _lodash["default"].map(routes, function (node, key) {
        if (node.routes) {
          return _this._parseNode(node, "".concat(scope, "/").concat(node.path), providers, context);
        }
        return _this._getRoute(node, scope, providers, context);
      });
    }
  }, {
    key: "_getScopedPath",
    value: function _getScopedPath(path, scope) {
      return scope ? "".concat(scope, "/").concat(path) : path;
    }
  }, {
    key: "_getRoute",
    value: function _getRoute(route, scope) {
      var providers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var node = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      return route.component && _lodash["default"].pickBy(_objectSpread(_objectSpread({}, route), {}, {
        path: "/".concat(node ? scope : this._getScopedPath(route.path, scope)),
        providers: !_lodash["default"].isEmpty(providers) && providers,
        component: route.component || false,
        resource: route.resource || false,
        context: context
      }), _lodash["default"].identity);
    }
  }, {
    key: "_getNode",
    value: function _getNode() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return scope ? this.scope(scope) : this._mount;
    }
  }]);
}(_Smart2["default"]);
var _default = exports["default"] = Routes;
//# sourceMappingURL=Routes.js.map