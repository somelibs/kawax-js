"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ResourceCall", {
  enumerable: true,
  get: function get() {
    return _ResourceCall["default"];
  }
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _ResourceCall = _interopRequireDefault(require("./internal/ResourceCall"));
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
var _excluded = ["payload"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var Resource = /*#__PURE__*/function (_Smart) {
  function Resource() {
    var _this;
    _classCallCheck(this, Resource);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Resource, [].concat(args));
    _defineProperty(_this, "uniqueId", "".concat(_this.constructor.name, "#").concat(_lodash["default"].uniqueId()));
    _defineProperty(_this, "_getResolver", function (payload, base, runtime, context) {
      return function (key) {
        var call = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var parsedOption;
        var options = _objectSpread(_objectSpread(_objectSpread({}, context), runtime), {}, {
          payload: payload
        });
        var resolver = call ? _resolve["default"] : function (value) {
          return value;
        };
        var priorityStack = [runtime, context, base, _this.props];
        _lodash["default"].each(priorityStack, function (scope) {
          parsedOption = resolver(scope[key], options);
          if (!_lodash["default"].isUndefined(parsedOption)) return false;
        });
        return parsedOption;
      };
    });
    return _this;
  }
  _inherits(Resource, _Smart);
  return _createClass(Resource, [{
    key: "_optionsParser",
    value: function _optionsParser(resolver, base, runtime, context) {
      return {
        uniqueId: this.uniqueId,
        resourceName: this.constructor.name,
        mock: resolver('mock', false) || false,
        path: resolver('path', false),
        cache: resolver('cache') || true,
        baseUrl: resolver('baseUrl', false),
        method: resolver('method') || 'GET',
        allowCors: resolver('allowCors') || false,
        filter: resolver('filter', false) || false,
        formData: resolver('formData') || false,
        paginate: resolver('paginate', false) || false,
        credentials: resolver('credentials') || 'same-origin',
        headers: resolver('headers', false),
        reader: resolver('reader') || 'json',
        noContent: resolver('noContent') || false,
        collection: resolver('collection') || false,
        entityParser: resolver('entityParser', false) || false,
        payloadParser: resolver('payloadParser', false) || false,
        errorParser: resolver('errorParser', false) || function (payload) {
          return payload;
        },
        responseParser: resolver('responseParser', false) || function (response, body) {
          return body;
        },
        requestTransform: resolver('requestTransform') === false ? false : _lodash["default"].snakeCase,
        responseTransform: resolver('responseTransform') === false ? false : _lodash["default"].camelCase,
        collectionParser: resolver('collectionParser', false) || function (payload) {
          return payload.collection;
        },
        metaParser: resolver('metaParser', false) || function (payload) {
          return payload.pagination;
        },
        resourceClass: this.constructor.name || 'Resource',
        schemaParser: resolver('schemaParser', false) || false,
        schema: resolver('schema') || {},
        onSuccess: resolver('onSuccess', false) || false,
        onError: resolver('onError', false) || false,
        hook: resolver('hook', false) || false,
        debug: resolver('debug') || false,
        expiry: resolver('expiry') || false,
        context: _objectSpread(_objectSpread(_objectSpread({}, resolver('context')), context), runtime)
      };
    }
  }, {
    key: "define",
    value: function define() {
      var _this2 = this;
      var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          payload = _ref.payload,
          runtime = _objectWithoutProperties(_ref, _excluded);
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var resolver = _this2._getResolver(payload, base, runtime, context);
        var options = _this2._optionsParser(resolver, base, runtime, context);
        var resource = new _ResourceCall["default"](options);
        return resource.call(payload);
      };
    }
  }], [{
    key: "export",
    value: function _export() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _construct(this, args);
    }
  }]);
}(_Smart2["default"]);
var _default = exports["default"] = Resource;
//# sourceMappingURL=Resource.js.map