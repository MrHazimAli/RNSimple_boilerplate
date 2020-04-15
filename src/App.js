import React from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './navigation';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator />}
          persistor={persistor}
        >
          <AppNavigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
