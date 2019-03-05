import { Platform } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/es/storage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

let composeEnhancers = compose;

if (__DEV__) {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  /* eslint-disable no-underscore-dangle */
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools)({
    name: Platform.OS,
    ...require('../../package.json').remotedev
  });
  /* eslint-enable no-underscore-dangle */
}

const config = {
	key: 'root',
	storage,
	blacklist: ['nav'],
	debug: true
}

const persistedReducer = persistReducer(config, rootReducers);
const enhancer = composeEnhancers(applyMiddleware(thunk));

const persistConfig = { enhancer };
const store = createStore(persistedReducer, undefined, enhancer);
const persistor = persistStore(store, persistConfig, () => {
	// console.log('test', store.getState());
})

const configureStore = () => {
	return { persistor, store }
}

export default configureStore;

