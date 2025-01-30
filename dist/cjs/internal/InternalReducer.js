"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _Reducer2 = _interopRequireDefault(require("../Reducer"));
var _excluded = ["props"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var InternalReducer = /*#__PURE__*/function (_Reducer) {
  function InternalReducer() {
    var _this;
    _classCallCheck(this, InternalReducer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, InternalReducer, [].concat(args));
    _defineProperty(_this, "clearAction", function (state, _ref) {
      var origin = _ref.payload;
      return _this.removeItem(function (action) {
        return action.origin === origin;
      });
    });
    _defineProperty(_this, "state", _this.match({
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
  _inherits(InternalReducer, _Reducer);
  return _createClass(InternalReducer, [{
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
      var pageNo = _lodash["default"].get(payload, 'meta.currentPage');
      var url = payload.url && _lodash["default"].snakeCase(payload.url);
      var sort = payload.sort && _lodash["default"].snakeCase(payload.sort);
      var order = payload.order && _lodash["default"].snakeCase(payload.order);
      var search = payload.search && _lodash["default"].snakeCase(payload.search);
      var resourceMap = _lodash["default"].compact([payload.resourceId, url, sort, order, search]);
      var resourceKey = resourceMap.join('#');
      if (pageNo) {
        return _defineProperty({}, resourceKey, {
          actionIds: [payload.actionId],
          totalPages: _lodash["default"].get(payload, 'meta.totalPages'),
          pages: _defineProperty({}, pageNo, {
            itemIds: payload.itemIds,
            timestamp: _lodash["default"].get(payload, 'meta.timestamp')
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
}(_Reducer2["default"]);
_defineProperty(InternalReducer, "applyEmbeddedReducer", false);
_defineProperty(InternalReducer, "initialState", {
  actions: [],
  router: [],
  resources: {}
});
var _default = exports["default"] = InternalReducer;
//# sourceMappingURL=InternalReducer.js.map