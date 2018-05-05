import React, { Component } from "react";
import {
  StyleSheet
} from 'react-native';
//
import { StackNavigator } from 'react-navigation';
//
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

/**
 * @class AuthScreen
 */
const AuthScreen = StackNavigator({
  '/auth/sign-in': {
    screen: SignIn
  },
  '/auth/sign-up': {
    screen: SignUp
  },
  '/auth/forgot-password': {
    screen: ForgotPassword
  }
}, {
  initialRouteName: '/auth/sign-in'
});
export default AuthScreen;
