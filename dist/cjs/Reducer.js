"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _includes2 = _interopRequireDefault(require("lodash/includes"));
var _compact2 = _interopRequireDefault(require("lodash/compact"));
var _clone2 = _interopRequireDefault(require("lodash/clone"));
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
var _concat2 = _interopRequireDefault(require("lodash/concat"));
var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _each2 = _interopRequireDefault(require("lodash/each"));
var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _remove2 = _interopRequireDefault(require("lodash/remove"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _Smart2 = _interopRequireDefault(require("./Smart"));
var _resolve = _interopRequireDefault(require("./helpers/resolve"));
var _excluded = ["depth"];
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
  _inherits(Reducer, _Smart);
  var _super = _createSuper(Reducer);
  function Reducer() {
    var _this;
    _classCallCheck(this, Reducer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "unionKey", 'id');
    _defineProperty(_assertThisInitialized(_this), "onPending", function (pointer) {
      return function (state, action) {
        return _this._matchWithStatus(['pending'], pointer)(state, action);
      };
    });
    _defineProperty(_assertThisInitialized(_this), "onSuccess", function (pointer) {
      return function (state, action) {
        return _this._matchWithStatus(['success'], pointer)(state, action);
      };
    });
    _defineProperty(_assertThisInitialized(_this), "onError", function (pointer) {
      return function (state, action) {
        return _this._matchWithStatus(['error'], pointer)(state, action);
      };
    });
    _defineProperty(_assertThisInitialized(_this), "onDone", function (pointer) {
      return function (state, action) {
        return _this._matchWithStatus(['success', 'error'], pointer)(state, action);
      };
    });
    _defineProperty(_assertThisInitialized(_this), "matchPending", function (map) {
      return _this.onPending(_this.match(map));
    });
    _defineProperty(_assertThisInitialized(_this), "matchSuccess", function (map) {
      return _this.onSuccess(_this.match(map));
    });
    _defineProperty(_assertThisInitialized(_this), "matchError", function (map) {
      return _this.onError(_this.match(map));
    });
    _defineProperty(_assertThisInitialized(_this), "matchDone", function (map) {
      return _this.onDone(_this.match(map));
    });
    _defineProperty(_assertThisInitialized(_this), "replace", function (next) {
      return _this.shallow(next, -1);
    });
    _defineProperty(_assertThisInitialized(_this), "assign", function (state, _ref) {
      var payload = _ref.payload;
      return payload;
    });
    _defineProperty(_assertThisInitialized(_this), "assignItem", function (state, _ref2) {
      var payload = _ref2.payload;
      return (0, _isArray2["default"])(state) ? [payload] : payload;
    });
    _defineProperty(_assertThisInitialized(_this), "removeItem", function (predicate) {
      return _this._forceAssign(function (current) {
        (0, _remove2["default"])(current, predicate);
        return current;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "mergeBy", function (unionKey, next) {
      return function (prev, action) {
        return _this._forceAssign(function (current, path) {
          return _this._parseArray(prev, next, action, path, -1, unionKey);
        });
      };
    });
    _defineProperty(_assertThisInitialized(_this), "shallow", function (next) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return _this._forceAssign(function (current, action, path) {
        if (!path) {
          return _this._reduce(current, next, action, path, depth);
        }
        return next;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "matchOn", function (statuses) {
      return function (state, action) {
        var next = state;
        (0, _each2["default"])(statuses, function (map, status) {
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
    _defineProperty(_assertThisInitialized(_this), "_forceAssign", function (helper) {
      return new ForceAssignment(helper);
    });
    return _this;
  }
  _createClass(Reducer, [{
    key: "call",
    value: function call(state, _ref3) {
      var _ref3$depth = _ref3.depth,
        depth = _ref3$depth === void 0 ? 0 : _ref3$depth,
        action = _objectWithoutProperties(_ref3, _excluded);
      var path = [];
      var current = (0, _isEmpty2["default"])(state) ? this._getInitialState(path) : (0, _cloneDeep2["default"])(state);
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
        (0, _each2["default"])(map, function (pointer, match) {
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
      var initialState = (0, _get2["default"])(this.constructor.initialState, path);
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
      if (!(0, _isEqual2["default"])(current, next) && !shouldDelegate) {
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
        var initialState = (0, _get2["default"])(this.constructor.initialState, path);
        return initialState._reduce(next, action);
      }
    }
  }, {
    key: "_parseState",
    value: function _parseState(current, next, action, path) {
      var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
      if ((0, _isPlainObject2["default"])(next)) {
        return this._parsePlainObject(current, next, action, path, depth);
      }
      if ((0, _isArray2["default"])(next) && !path) {
        return this._parseArray(current, next, action, path, depth);
      }
      if ((0, _isFunction2["default"])(next)) {
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
      (0, _each2["default"])(next, function (nextItem, key) {
        var currentPath = path ? (0, _concat2["default"])(path, key) : false;
        var currentItem = (0, _isObject2["default"])(current) ? current[key] : null;
        var nextDepth = depth < 0 || depth > 1 ? (0, _clone2["default"])(depth) - 1 : false;
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
      var nextItems = [].concat(next);
      (0, _each2["default"])(current, function (currentItem, key) {
        var currentPath = path ? (0, _concat2["default"])(path, key) : false;
        var nextDepth = depth < 0 || depth > 1 ? (0, _clone2["default"])(depth) - 1 : false;
        if (currentItem) {
          union[key] = currentItem;
          (0, _each2["default"])(nextItems, function (nextItem, nextKey) {
            var matchKey = nextItem && nextItem[unionKey] ? nextItem[unionKey] : false;
            if (matchKey && currentItem[unionKey] === matchKey) {
              union[key] = nextDepth ? _this4._reduce(currentItem, nextItem, action, currentPath, nextDepth) : nextItem;
              nextItems[nextKey] = null;
            }
          });
        }
      });
      return (0, _compact2["default"])([].concat(union, nextItems));
    }
  }, {
    key: "_assignNext",
    value: function _assignNext(current, next) {
      if ((0, _isPlainObject2["default"])(current) && (0, _isPlainObject2["default"])(next)) {
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
      return (0, _isEmpty2["default"])(path) ? state : (0, _get2["default"])(state, path);
    }
  }, {
    key: "_matchWithStatus",
    value: function _matchWithStatus(statuses, callback) {
      var _this5 = this;
      return function (state, action) {
        return (0, _includes2["default"])(statuses, action.status) ? _resolve["default"].call(_this5, callback, state, action) : state;
      };
    }
  }], [{
    key: "delegate",
    value: function delegate(options) {
      var instance = new this(options);
      return new ReducerDelegate(instance);
    }
  }]);
  return Reducer;
}(_Smart2["default"]);
_defineProperty(Reducer, "initialState", null);
_defineProperty(Reducer, "applyEmbeddedReducer", true);
var _default = Reducer;
exports["default"] = _default;