import React, { Component } from "react";
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  Form,
  Item,
  Label,
  Input,
  View,
  Text
} from 'native-base';

//
let styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    minWidth: 360,
    width: '70%',
    maxWidth: '90%',
  },
  btnSubmit: {
    marginTop: 30
  }
});

/**
 * @class ForgotPassword
 */
export default class ForgotPassword extends Component {
    constructor() {
      super();
      this.state = {
        isReady: false
      };
    }
  
    render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='contact' />
              </Button>
            </Left>
            <Body><Title>AuthScreen</Title></Body>
            <Right />
          </Header>
          <View style={[styles.content]}>
            <Form style={[styles.form]}>
              <Item inlineLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item inlineLabel>
                <Label>Password</Label>
                <Input />
              </Item>
              <Button full info style={[styles.btnSubmit]}>
                <Text>SIGN IN</Text>
              </Button>
              <Button full iconLeft style={[styles.btnSubmit]}>
                <Icon name='logo-facebook' />
                <Text>Facebook</Text>
              </Button>
              <Button full iconLeft danger style={[styles.btnSubmit]}>
                <Icon name='logo-google' />
                <Text>Google+</Text>
              </Button>
            </Form>
          </View>
        </Container>
      );
    }
  }