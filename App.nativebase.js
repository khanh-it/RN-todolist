import React, { Component } from 'react'
// import DatePicker from 'react-native-datepicker'
//
import { Provider } from 'react-redux';
// https://github.com/rt2zz/redux-persist
import { PersistGate } from 'redux-persist/integration/react';
// +++
import { store, persistor } from './app/configs/store';
// https://github.com/react-native-component/react-native-smart-splash-screen
import SplashScreen from 'react-native-smart-splash-screen';
// https://docs.nativebase.io/Components.html#Components
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
//
// import StatusBar from './app/components/StatusBar';
import TodoList from './app/components/TodoList';
//
import stylesGlobal from './app/assets/css/styles.global';

/**
 * 
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <TodoList />
            </Content>
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </PersistGate>
      </Provider>
    );
  }
}
