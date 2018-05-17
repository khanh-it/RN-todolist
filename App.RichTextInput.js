/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button as RNButton
} from 'react-native';
import {
  Root,
  Container,
  Header,
  Content,
  Footer,
  Button,
  Icon,
  Text
} from 'native-base';
//
import RichTextInput from './app/components/RichTextInput';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <Root>
        <Container>
          <Header />
          <Content>
            {/* <RNButton
              title='Count me'
              onPress={() => this.setState((state) => ({ count: ++state.count }))}
            >
              <Icon name='home' /><Text>Count me</Text>
            </RNButton>
            <Button
              onPress={() => this.setState((state) => ({ count: ++state.count }))}
            >
              <Icon name='home' />
              <Text>Count me</Text>
            </Button>
            <Text>{this.state.count}</Text> */}
          </Content>
          <RichTextInput />
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
