import React, { Component } from "react";
import { connect } from 'react-redux';
// https://github.com/react-native-component/react-native-smart-splash-screen
import SplashScreen from 'react-native-smart-splash-screen';

/**
 * @class AuthVerifyComponent
 */
export class AuthVerifyComponent extends Component {
    constructor() {
      super();

      // Bind methods
      this._verifyAuth = this._verifyAuth.bind(this);
    }
  
    componentDidMount() {
        // Close splash screen!
        let animationType = SplashScreen.animationType.scale;
        let duration = 512;
        let delay = 256;
        SplashScreen.close({ animationType, duration, delay });
        // Verify auth...
        setTimeout(this._verifyAuth, 0 /* duration + delay */);
    }

    /**
     * Verify auth (user) data
     * @memberof AuthVerifyComponent
     */
    _verifyAuth() {
        this.props.navigation.navigate(this.props.auth ? '/' : '/auth');
    }
  
    render() {
      return null;
    }
};

/**
 * @class AuthVerifyScreen
 */
const AuthVerifyScreen = connect(
    ({ auth }) => ({ auth })
    //, (dispatch) => {}
)(AuthVerifyComponent);
//
export default AuthVerifyScreen;
