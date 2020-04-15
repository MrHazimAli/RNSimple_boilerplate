import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import immutableTransform from 'redux-persist-transform-immutable';

import rootReducers from '../reducers';

let composeEnhancers = compose;

const config = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [],
	transforms: [immutableTransform()],
	debug: true
};

const persistedReducer = persistReducer(config, rootReducers);
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const persistConfig = { enhancer };
const store = createStore(persistedReducer, undefined, composeWithDevTools(enhancer));
const persistor = persistStore(store, persistConfig, () => {});

export { store, persistor };