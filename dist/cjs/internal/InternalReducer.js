"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _compact2 = _interopRequireDefault(require("lodash/compact"));
var _snakeCase2 = _interopRequireDefault(require("lodash/snakeCase"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _Reducer2 = _interopRequireDefault(require("../Reducer"));
var _excluded = ["props"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var InternalReducer = /*#__PURE__*/function (_Reducer) {
  _inherits(InternalReducer, _Reducer);
  var _super = _createSuper(InternalReducer);
  function InternalReducer() {
    var _this;
    _classCallCheck(this, InternalReducer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "clearAction", function (state, _ref) {
      var origin = _ref.payload;
      return _this.removeItem(function (action) {
        return action.origin === origin;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "state", _this.match({
      '.': {
        actions: _this.logAction
      },
      '@@CLEAR_ACTION': {
        actions: _this.clearAction
      },
      '@@ROUTER_EVENT': {
        router: _this.routerEvent
      },
      '@@RESOURCE_CALL': {
        resources: _this.mapResource
      }
    }));
    return _this;
  }
  _createClass(InternalReducer, [{
    key: "logAction",
    value: function logAction(state, _ref2) {
      var id = _ref2.id,
        type = _ref2.type,
        status = _ref2.status,
        origin = _ref2.origin,
        tracked = _ref2.tracked,
        timestamp = _ref2.timestamp,
        className = _ref2["class"],
        _ref2$context = _ref2.context,
        _ref2$context2 = _ref2$context === void 0 ? {} : _ref2$context,
        props = _ref2$context2.props,
        context = _objectWithoutProperties(_ref2$context2, _excluded);
      if (id && status && tracked) {
        return [{
          id: id,
          status: status,
          timestamp: timestamp,
          className: className,
          origin: origin,
          type: type,
          context: context
        }];
      }
    }
  }, {
    key: "mapResource",
    value: function mapResource(state, _ref3) {
      var payload = _ref3.payload;
      var pageNo = (0, _get2["default"])(payload, 'meta.currentPage');
      var url = payload.url && (0, _snakeCase2["default"])(payload.url);
      var sort = payload.sort && (0, _snakeCase2["default"])(payload.sort);
      var order = payload.order && (0, _snakeCase2["default"])(payload.order);
      var search = payload.search && (0, _snakeCase2["default"])(payload.search);
      var resourceMap = (0, _compact2["default"])([payload.resourceId, url, sort, order, search]);
      var resourceKey = resourceMap.join('#');
      if (pageNo) {
        return _defineProperty({}, resourceKey, {
          actionIds: [payload.actionId],
          totalPages: (0, _get2["default"])(payload, 'meta.totalPages'),
          pages: _defineProperty({}, pageNo, {
            itemIds: payload.itemIds,
            timestamp: (0, _get2["default"])(payload, 'meta.timestamp')
          })
        });
      }
    }
  }, {
    key: "routerEvent",
    value: function routerEvent(state, _ref5) {
      var payload = _ref5.payload;
      return payload;
    }
  }]);
  return InternalReducer;
}(_Reducer2["default"]);
_defineProperty(InternalReducer, "applyEmbeddedReducer", false);
_defineProperty(InternalReducer, "initialState", {
  actions: [],
  router: [],
  resources: {}
});
var _default = InternalReducer;
exports["default"] = _default;