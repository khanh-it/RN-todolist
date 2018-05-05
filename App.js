import React, { Component } from "react";
import { Provider } from 'react-redux';
// https://github.com/rt2zz/redux-persist
import { PersistGate } from 'redux-persist/integration/react';
// +++
import { SwitchNavigator } from 'react-navigation';
// +++
import { store, persistor } from './app/configs/store';
//
import { Root } from 'native-base';
//
import HomeScreen from './app/components/HomeScreen';
import AuthScreenVerify from './app/components/AuthScreen/Verify';
import AuthScreen from './app/components/AuthScreen';

/**
 * @class AppComponent
 */
const AppRootComponent = SwitchNavigator(
  {
    '/': HomeScreen,
    '/auth/verify': AuthScreenVerify,
    '/auth': AuthScreen,
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

  componentDidMount() {}

  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRootComponent />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
