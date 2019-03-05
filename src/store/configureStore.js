import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
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

