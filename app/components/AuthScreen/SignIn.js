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
import AuthScreenHeader from './Header';

//
let styles = StyleSheet.create({
  content: {
    // borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    minWidth: 360,
    width: '80%',
    maxWidth: '96%',
  },
  btnSubmit: {
    marginTop: 30
  }
});

/**
 * @class AuthScreen
 */
export default class SignIn extends Component {
    constructor() {
      super();
      //
      this.state = {};
    }

    /**
     * 
     */
    static navigationOptions = (params) => {
      let navigationProps = {};
      return {
        header: (headerProps) => {
          let props = { ...params, headerProps, navigationProps };
          return (<AuthScreenHeader { ...props } />);
        }
      };
    }
  
    render() {
      return (
        <Container>
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