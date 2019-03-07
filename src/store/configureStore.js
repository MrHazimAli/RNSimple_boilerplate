import { Platform } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/es/storage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
	key: 'root',
	storage,
	transforms: [immutableTransform()],
	blacklist: ['nav'],
	debug: true
}

console.log('enhancer', composeEnhancers)

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

