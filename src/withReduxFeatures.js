import {Provider} from 'react-redux';

import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise-middleware';

import {CounterReducer} from './Services/Examples/counter';
import {RandomReducer} from './Services/Examples/random';
import withProvider from './withProvider';

/**
 * Create root reducer, containing
 * all features of the application
 */
const rootReducer = combineReducers({
    count: CounterReducer,
    random: RandomReducer,
});

/**
 * Initialize Redux Dev Tools,
 * if they are installed in browser.
 */
/* eslint-disable no-underscore-dangle */
/** Use Redux compose, if browser doesn't have Redux devtools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

/** Create Redux store with root reducer and middleware included */
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(promise))
);

/**
 * Create HOC, which wraps given Component with Redux Provider
 */
export default withProvider({store, Provider});
