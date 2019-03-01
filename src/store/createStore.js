import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// store will be created in wrap-with-provider.js
const createStore = () =>
  reduxCreateStore(
    rootReducer,
    initialState,
    composeSetup(applyMiddleware(...middleware)),
  );

console.log('comes to create store');

export default createStore;
