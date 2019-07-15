import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './store/configureStore';
import Navigator from './navigation';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator />}
          persistor={persistor}
        >
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}