import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
// import DatePicker from 'react-native-datepicker'
//
import { Provider } from 'react-redux';
// +++
import { store } from './app/configs/store';
//
import StatusBar from './app/components/StatusBar';
import TodoList from './app/components/TodoList';
//
import stylesGlobal from './app/assets/css/styles.global';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <Provider store={store}>
        <View style={stylesGlobal.body}>
          <StatusBar />
          <TodoList />
        </View>
      </Provider>
    );
  }
}
