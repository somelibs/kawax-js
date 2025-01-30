"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
var _excluded = ["depth"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
function ReducerDelegate(instance) {
  this._reduce = function (state, action) {
    return instance.call(state, action);
  };
}
function ForceAssignment(callback) {
  this._reduce = function (current, path) {
    return callback(current, path);
  };
}
var Reducer = /*#__PURE__*/function (_Smart) {
  function Reducer() {
    var _this;
    _classCallCheck(this, Reducer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Reducer, [].concat(args));
    _defineProperty(_this, "unionKey", 'id');
    _defineProperty(_this, "onPending", function (pointer) {
      return function (state, action) {
        return _this._matchWithStatus(['pending'], pointer)(state, action);
      };
    });
    _defineProperty(_this, "onSuccess", function (pointer) {
      return function (state, action) {
        return _this._matchWithStatus(['success'], pointer)(state, action);
      };
    });
    _defineProperty(_this, "onError", function (pointer) {
      return function (state, action) {
        return _this._matchWithStatus(['error'], pointer)(state, action);
      };
    });
    _defineProperty(_this, "onDone", function (pointer) {
      return function (state, action) {
        return _this._matchWithStatus(['success', 'error'], pointer)(state, action);
      };
    });
    _defineProperty(_this, "matchPending", function (map) {
      return _this.onPending(_this.match(map));
    });
    _defineProperty(_this, "matchSuccess", function (map) {
      return _this.onSuccess(_this.match(map));
    });
    _defineProperty(_this, "matchError", function (map) {
      return _this.onError(_this.match(map));
    });
    _defineProperty(_this, "matchDone", function (map) {
      return _this.onDone(_this.match(map));
    });
    _defineProperty(_this, "replace", function (next) {
      return _this.shallow(next, -1);
    });
    _defineProperty(_this, "assign", function (state, _ref) {
      var payload = _ref.payload;
      return payload;
    });
    _defineProperty(_this, "assignItem", function (state, _ref2) {
      var payload = _ref2.payload;
      return _lodash["default"].isArray(state) ? [payload] : payload;
    });
    _defineProperty(_this, "removeItem", function (predicate) {
      return _this._forceAssign(function (current) {
        _lodash["default"].remove(current, predicate);
        return current;
      });
    });
    _defineProperty(_this, "mergeBy", function (unionKey, next) {
      return function (prev, action) {
        return _this._forceAssign(function (current, path) {
          return _this._parseArray(prev, next, action, path, -1, unionKey);
        });
      };
    });
    _defineProperty(_this, "shallow", function (next) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return _this._forceAssign(function (current, action, path) {
        if (!path) {
          return _this._reduce(current, next, action, path, depth);
        }
        return next;
      });
    });
    _defineProperty(_this, "matchOn", function (statuses) {
      return function (state, action) {
        var next = state;
        _lodash["default"].each(statuses, function (map, status) {
          // eslint-disable-next-line default-case
          switch (status) {
            case 'success':
              next = _this.matchSuccess(map)(next, action);
              break;
            case 'error':
              next = _this.matchError(map)(next, action);
              break;
            case 'pending':
              next = _this.matchPending(map)(next, action);
              break;
          }
        });
        return next;
      };
    });
    _defineProperty(_this, "_forceAssign", function (helper) {
      return new ForceAssignment(helper);
    });
    return _this;
  }
  _inherits(Reducer, _Smart);
  return _createClass(Reducer, [{
    key: "call",
    value: function call(state, _ref3) {
      var _ref3$depth = _ref3.depth,
        depth = _ref3$depth === void 0 ? 0 : _ref3$depth,
        action = _objectWithoutProperties(_ref3, _excluded);
      var path = [];
      var current = _lodash["default"].isEmpty(state) ? this._getInitialState(path) : _lodash["default"].cloneDeep(state);
      action.depth = depth + 1;
      var baseState = this._embeddedReducer(current, action) || current;
      var resolvedState = _resolve["default"].call(this, this.state, baseState, action);
      var next = resolvedState === undefined ? current : resolvedState;
      return this._reduce(current, next, action, path);
    }
  }, {
    key: "match",
    value: function match(map) {
      var _this2 = this;
      return function (state, action) {
        var next = state;
        var type = action.type;
        _lodash["default"].each(map, function (pointer, match) {
          var regex = new RegExp("(^[^.]?|[.])".concat(match), 'g');
          if (type && type.match(regex)) {
            var resolvedState = _resolve["default"].call(_this2, pointer, state, action);
            next = _this2._reduce(next, resolvedState, action);
          }
        });
        return next;
      };
    }
  }, {
    key: "_embeddedReducer",
    value: function _embeddedReducer(state, action) {
      if (this.props.applyEmbeddedReducer && action.reducer && action.depth === 1) {
        var reducerCallback = _resolve["default"].call(this, action.reducer, action) || {};
        var bundledState = _resolve["default"].call(this, reducerCallback, this) || {};
        return this._reduce(state, bundledState, action);
      }
    }
  }, {
    key: "_shouldDelegate",
    value: function _shouldDelegate(next, path) {
      var initialState = _lodash["default"].get(this.constructor.initialState, path);
      if (initialState && initialState instanceof ReducerDelegate) {
        return true;
      }
      if (next && next instanceof ReducerDelegate) {
        return true;
      }
      return false;
    }
  }, {
    key: "_reduce",
    value: function _reduce(current, next, action) {
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
      var state;
      var shouldDelegate = this._shouldDelegate(next, path);
      if (!_lodash["default"].isEqual(current, next) && !shouldDelegate) {
        state = this._parseState(current, next, action, path, depth);
      } else if (shouldDelegate === true) {
        state = this._delegateState(current, next, action, path);
      }
      return state === undefined ? this._assignNext(current, next) : state;
    }
  }, {
    key: "_delegateState",
    value: function _delegateState(current, next, action, path) {
      if (next && next instanceof ReducerDelegate) {
        return next._reduce(current, action);
      }
      if (next === null) {
        var initialState = _lodash["default"].get(this.constructor.initialState, path);
        return initialState._reduce(next, action);
      }
    }
  }, {
    key: "_parseState",
    value: function _parseState(current, next, action, path) {
      var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
      if (_lodash["default"].isPlainObject(next)) {
        return this._parsePlainObject(current, next, action, path, depth);
      }
      if (_lodash["default"].isArray(next) && !path) {
        return this._parseArray(current, next, action, path, depth);
      }
      if (_lodash["default"].isFunction(next)) {
        var resolvedState = _resolve["default"].call(this, next, current, action);
        var reducedState = this._reduce(current, resolvedState, action, path);
        return this._assignNext(current, reducedState);
      }
      if (next === null && path) {
        return this._getInitialState(path);
      }
      if (next && next instanceof ForceAssignment) {
        return next._reduce(current, path);
      }
    }
  }, {
    key: "_parsePlainObject",
    value: function _parsePlainObject(current, next, action, path) {
      var _this3 = this;
      var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
      var state = {};
      _lodash["default"].each(next, function (nextItem, key) {
        var currentPath = path ? _lodash["default"].concat(path, key) : false;
        var currentItem = _lodash["default"].isObject(current) ? current[key] : null;
        var nextDepth = depth < 0 || depth > 1 ? _lodash["default"].clone(depth) - 1 : false;
        state[key] = nextDepth && nextItem ? _this3._reduce(currentItem, nextItem, action, currentPath, nextDepth) : nextItem;
      });
      return this._assignNext(current, state);
    }
  }, {
    key: "_parseArray",
    value: function _parseArray(current, next, action, path) {
      var _this4 = this;
      var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
      var unionKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.unionKey;
      var union = [];
      var nextItems = _toConsumableArray(next);
      _lodash["default"].each(current, function (currentItem, key) {
        var currentPath = path ? _lodash["default"].concat(path, key) : false;
        var nextDepth = depth < 0 || depth > 1 ? _lodash["default"].clone(depth) - 1 : false;
        if (currentItem) {
          union[key] = currentItem;
          _lodash["default"].each(nextItems, function (nextItem, nextKey) {
            var matchKey = nextItem && nextItem[unionKey] ? nextItem[unionKey] : false;
            if (matchKey && currentItem[unionKey] === matchKey) {
              union[key] = nextDepth ? _this4._reduce(currentItem, nextItem, action, currentPath, nextDepth) : nextItem;
              nextItems[nextKey] = null;
            }
          });
        }
      });
      return _lodash["default"].compact([].concat(union, _toConsumableArray(nextItems)));
    }
  }, {
    key: "_assignNext",
    value: function _assignNext(current, next) {
      if (_lodash["default"].isPlainObject(current) && _lodash["default"].isPlainObject(next)) {
        return Object.assign({}, current, next);
      }
      return next === undefined ? current : next;
    }
  }, {
    key: "_getInitialState",
    value: function _getInitialState(path) {
      var initialState = this.constructor.initialState;
      var state = initialState ? this._reduce({}, this.constructor.initialState, {
        type: '@@kawax/INIT'
      }, []) : null;
      return _lodash["default"].isEmpty(path) ? state : _lodash["default"].get(state, path);
    }
  }, {
    key: "_matchWithStatus",
    value: function _matchWithStatus(statuses, callback) {
      var _this5 = this;
      return function (state, action) {
        return _lodash["default"].includes(statuses, action.status) ? _resolve["default"].call(_this5, callback, state, action) : state;
      };
    }
  }], [{
    key: "delegate",
    value: function delegate(options) {
      var instance = new this(options);
      return new ReducerDelegate(instance);
    }
  }]);
}(_Smart2["default"]);
_defineProperty(Reducer, "initialState", null);
_defineProperty(Reducer, "applyEmbeddedReducer", true);
var _default = exports["default"] = Reducer;
//# sourceMappingURL=Reducer.js.map