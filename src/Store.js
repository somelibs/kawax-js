import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { applyMiddleware, compose } from 'redux';
import _ from 'lodash';
import Thunk from 'redux-thunk';
import Smart from './Smart';
import log from './helpers/log';
import InternalReducer from './internal/InternalReducer';

class Store extends Smart {

  pendingActions = [];

  initialize({ reducer, name, customMiddlewares }) {
    this.internal = this._createInternalStore(name);
    this.main = this._createMainStore(customMiddlewares, reducer, name);
    if (__DEV__) Object.assign(this, { pendingActions: [] });
  }

  dispatch = (action) => {
    this.internal.dispatch(action);
    return this.main.dispatch(action);
  };

  subscribe = (listener) => this.main.subscribe(listener);

  replaceReducer = (nextReducer) => this.main.replaceReducer(nextReducer);

  getState = () => this.main.getState();

  getInternalState = () => this.internal.getState();

  _dispatch = (action) => this.internal.dispatch(action);

  _combineMiddleware(middlewares) {
    return (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
      });
      return defaultMiddleware.concat(middlewares);
    };
  }

  _createInternalStore(name) {
    const internalReducer = InternalReducer.export();
    const middlewares = this._getMiddlewares([], true);
    return configureStore({
      middleware: this._combineMiddleware(middlewares),
      reducer: internalReducer,
      devTools: __DEV__,
    });
  }

  _createMainStore(customMiddlewares = [], reducer = this.reducer, name = false) {
    const middlewares = this._getMiddlewares(customMiddlewares, false);
    return configureStore({
      middleware: this._combineMiddleware(middlewares),
      reducer: reducer,
      devTools: __DEV__,
    });
  }

  _getMiddlewares(customMiddlewares = [], internal = false) {
    const middlewares = _.compact(_.concat(Thunk, customMiddlewares));
    if (__DEV__ && !internal) {
      middlewares.push(this._logger.bind(this));
    }
    return middlewares;
  }

  _withCustomLogger(next, action) {
    let duration = null;
    if (action.status === 'pending') {
      this.pendingActions.push({ id: action.id, startTime: performance.now() });
    }
    const payload = next(action);
    if (action.status !== 'pending') {
      const [initialAction] = _.remove(this.pendingActions,
        (pendingAction) => pendingAction.id === action.id);
      duration = performance.now() - (initialAction ? initialAction.startTime : 0);
    }
    if (action.log) {
      const output = this._formatLog(action, duration);
      if (action.status === 'error') {
        log.error(...output, 'Action:', action);
      } else if (action.status === 'success') {
        log.debug(...output, '\n ', action);
      }
    }
    return payload;
  }

  _withSimpleLogger(next, action) {
    const output = this._formatLog({
      status: 'success',
      class: next.constructor.name,
      ...action,
    }, false);
    const payload = next(action);
    log.debug(...output, '\n', action);
    return payload;
  }

  _logger() {
    return (next) => (action) => {
      if (__DEV__) {
        if (action.id && action.status) {
          return this._withCustomLogger(next, action);
        }
        return this._withSimpleLogger(next, action);
      }
      return next(action);
    };
  }

  _isDarkModeEnabled() {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  _getStyle(status) {
    const darkMode = this._isDarkModeEnabled();
    const isError = status === 'error';
    if (darkMode) {
      return isError ? 'color: #fd4146; font-weight: bold;'
        : 'color: white; font-weight: bold;';
    }
    return isError ? 'color: #ff443a; font-weight: bold;'
      : 'color: black; font-weight: bold;';

  }

  _formatLog(action, duration) {
    const className = String(action.class);
    const header = String(action.type);
    const status = (action.status ? `${action.status}` : 'no-status');
    const style = this._getStyle(action.status);
    const time = duration
      ? `${duration >= 1000 ? `${(duration / 1000).toFixed(2)}s` : `${duration.toFixed(0)}ms`}`
      : 'synchronous';
    return action.status === 'error'
      ? [`${className}: ${status} (${header}) (${time})`]
      : [`%c${className}: ${status} (${header}) (${time})`, style];
  }

}

export default Store;
