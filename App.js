import React, { Component } from "react";
import { Provider } from 'react-redux';
// https://github.com/rt2zz/redux-persist
import { PersistGate } from 'redux-persist/integration/react';
// +++
import { SwitchNavigator } from 'react-navigation';
// +++
import { store, persistor } from './app/configs/store';
// +++
// import crypto from './app/polyfills/crypto';
import crypto from 'crypto';
//
import HomeScreen from './app/components/HomeScreen';
import AuthVerifyScreen from './app/components/AuthVerifyScreen';
import AuthScreen from './app/components/AuthScreen';

/**
 * @class AppComponent
 */
const AppRootComponent = SwitchNavigator(
  {
    '/': HomeScreen,
    '/auth/verify': AuthVerifyScreen,
    '/auth/login': AuthScreen,
  } /*  */,
  {
    initialRouteName: '/auth/verify',
  }
);

/**
 * 
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const hash = crypto.createHmac('sha256', '12345679')
      .update('abcdefg')
      .digest('hex')
    ;
    alert(hash);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRootComponent />
        </PersistGate>
      </Provider>
    );
  }
}
