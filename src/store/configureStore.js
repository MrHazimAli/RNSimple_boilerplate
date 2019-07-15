import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/es/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

let composeEnhancers = compose;

const config = {
	key: 'root',
	storage,
	transforms: [immutableTransform()],
	debug: true
}

const middleware = [];

const persistedReducer = persistReducer(config, rootReducers);
const enhancer = composeEnhancers(applyMiddleware(thunk));

const persistConfig = { enhancer };
const store = createStore(persistedReducer, undefined, composeWithDevTools(enhancer));
const persistor = persistStore(store, persistConfig, () => {
	// console.log('test', store.getState());
})

const configureStore = () => {
	return { persistor, store }
}

export default configureStore;