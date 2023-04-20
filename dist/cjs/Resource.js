"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));
var _each2 = _interopRequireDefault(require("lodash/each"));
var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));
var _snakeCase2 = _interopRequireDefault(require("lodash/snakeCase"));
var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _ResourceCall = _interopRequireDefault(require("./internal/ResourceCall"));
exports.ResourceCall = _ResourceCall["default"];
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
var _excluded = ["payload"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var Resource = /*#__PURE__*/function (_Smart) {
  _inherits(Resource, _Smart);
  var _super = _createSuper(Resource);
  function Resource() {
    var _this;
    _classCallCheck(this, Resource);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "uniqueId", "".concat(_this.constructor.name, "#").concat((0, _uniqueId2["default"])()));
    _defineProperty(_assertThisInitialized(_this), "_getResolver", function (payload, base, runtime, context) {
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
        (0, _each2["default"])(priorityStack, function (scope) {
          parsedOption = resolver(scope[key], options);
          if (!(0, _isUndefined2["default"])(parsedOption)) return false;
        });
        return parsedOption;
      };
    });
    return _this;
  }
  _createClass(Resource, [{
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
        requestTransform: resolver('requestTransform') === false ? false : _snakeCase2["default"],
        responseTransform: resolver('responseTransform') === false ? false : _camelCase2["default"],
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
  return Resource;
}(_Smart2["default"]);
var _default = Resource;
exports["default"] = _default;