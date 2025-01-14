import React, {PureComponent} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import FirebaseProvider from './src/firebase';
import App from './App';
import {name as appName} from './app.json';
import configStore from './src/redux/store';

const store = configStore();

class Kiira extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Kiira);
