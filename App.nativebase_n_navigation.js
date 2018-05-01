import React, { Component } from "react";
// https://github.com/react-native-component/react-native-smart-splash-screen
import SplashScreen from 'react-native-smart-splash-screen';
// import Expo from "expo";
import HomeScreen from "./app/components/HomeScreen/index.js";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    /* await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    }); */
    this.setState({ isReady: true });
  }
  componentDidMount() {
    // SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    });
  }
  render() {
    /* if (!this.state.isReady) {
      return <Expo.AppLoading />;
    } */
    return <HomeScreen />;
  }
}
