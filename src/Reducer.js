import _ from 'lodash';
import Smart from './Smart';
import resolve from './helpers/resolve';

class Reducer extends Smart {

  static delegate(options) {
    const instance = new this(options);
    return new function ReducerDelegate() {
      this.reduce = (state, action) => instance.call(state, action);
    }();
  }

  static initialState = false;

  unionKey = 'id';

  onPending = (pointer) => (state, action) =>
    this._matchWithStatus(['pending'], pointer)(state, action);

  onSuccess = (pointer) => (state, action) =>
    this._matchWithStatus(['success'], pointer)(state, action);

  onError = (pointer) => (state, action) =>
    this._matchWithStatus(['error'], pointer)(state, action);

  onDone = (pointer) => (state, action) =>
    this._matchWithStatus(['success', 'error'], pointer)(state, action);

  matchPending = (map) => this.onPending(this.match(map));

  matchSuccess = (map) => this.onSuccess(this.match(map));

  matchError = (map) => this.onError(this.match(map));

  matchDone = (map) => this.onDone(this.match(map));

  forceAssign = (helper) => (new function ForceAssignment(callback) {
    this.callback = callback;
    this.reduce = (current, path) => this.callback(current, path);
  }(helper));

  removeItem = (predicate) => this.forceAssign((object) => {
    _.remove(object, predicate);
    return object;
  });

  call(state, action) {
    const path = [];
    const current = _.isEmpty(state) ? this._getInitialState(path) : state;
    const resolvedState = resolve.call(this, this.state, current, action);
    const next = (resolvedState === undefined) ? current : resolvedState;
    const call = this.reduce(current, next, action, path);
    // return call === null ? current : call;
    return call;
  }

  match(map) {
    return (state, action) => {
      let next = state;
      const { type } = action;
      _.each(map, (pointer, regex) => {
        if (type && type.match(regex)) {
          const resolvedState = resolve.call(this, pointer, state, action);
          next = this.reduce(next, resolvedState, action);
        }
      });
      return next;
    };
  }

  shouldDelegate(next, path) {
    const initialState = _.get(this.constructor.initialState, path);
    if (initialState && initialState.constructor.name === 'ReducerDelegate') {
      return true;
    } else if (next && next.constructor.name === 'ReducerDelegate') {
      return true;
    }
    return false;
  }

  reduce(current, next, action, path = false) {
    if (!_.isEqual(current, next) && !this.shouldDelegate(next, path)) {
      if (_.isPlainObject(next)) {
        return this.reducePlainObject(current, next, action, path);
      } else if (_.isArray(next) && !path) {
        return this.reduceArray(current, next, action, path);
      } else if (_.isFunction(next)) {
        const resolvedState = resolve.call(this, next, current, action);
        const reducedState = this.reduce(current, resolvedState, action, path);
        return this.assign(current, reducedState);
      } else if (next === null && path) {
        return this._getInitialState(path);
      } else if (next && next.constructor.name === 'ForceAssignment') {
        return next.reduce(current, path);
      }
    } else if (this.shouldDelegate(next, path)) {
      if (next && next.constructor.name === 'ReducerDelegate') {
        return next.reduce(current, action);
      } else if (next === null) {
        const initialState = _.get(this.constructor.initialState, path);
        return initialState.reduce(next, action);
      }
    }
    return this.assign(current, next);
  }

  reducePlainObject(current, next, action, path) {
    const state = {};
    _.each(next, (nextItem, key) => {
      const currentPath = path ? _.concat(path, key) : false;
      const currentItem = _.isObject(current) ? current[key] : null;
      state[key] = this.reduce(currentItem, nextItem, action, currentPath);
    });
    return this.assign(current, state);
  }

  reduceArray(current, next, action, path) {
    const union = [];
    const unionKey = this.unionKey;
    const nextItems = _.cloneDeep(next);
    _.each(current, (currentItem, key) => {
      const currentPath = path ? _.concat(path, key) : false;
      if (currentItem) {
        union[key] = currentItem;
        _.each(nextItems, (nextItem, nextKey) => {
          const matchKey = (nextItem && nextItem[unionKey]) ? nextItem[unionKey] : false;
          if (matchKey && currentItem[unionKey] === matchKey) {
            union[key] = this.reduce(currentItem, nextItem, action, currentPath);
            nextItems[nextKey] = null;
          }
        });
      }
    });
    return _.compact([...union, ...nextItems]);
  }

  assign(current, next) {
    if (_.isPlainObject(current) && _.isPlainObject(next)) {
      return Object.assign({}, current, next);
    }
    return (next === undefined ? current : next);
  }

  _getInitialState(path) {
    const initialState = this.reduce({}, this.constructor.initialState, { type: '@@kawax/INIT' }, []);
    return _.isEmpty(path) ? initialState : _.get(initialState, path);
  }

  _matchWithStatus(statuses, callback) {
    return (state, action) =>
      (_.includes(statuses, action.status) ? resolve.call(this, callback, state, action) : state);
  }

}

export default Reducer;
