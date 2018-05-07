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
  Text,
  Toast
} from 'native-base';

//
import AuthScreenHeader from './Header';

// Model Mapper(s)
import UserMapper from '../../models/mappers/user';

//
let styles = StyleSheet.create({
  content: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  contentContainer: {
    // borderWidth: 1,
    // borderColor: 'blue',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    minWidth: 320,
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
      // Init state
      this.state = {};
      // Bind method(s)
      this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * 
     */
    _data = {
      username: '',
      password: ''
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

    /**
     * 
     * @param {*} evt 
     */
    onSubmit(evt) {
      // Verify input...
      let data = this._data;
      // 
      if (!data.username.trim() || !data.password.trim()) {
        Toast.showWarning(global.Lang._('Username and password are all required!'));
        return;
      }
      // Login
      let foundUser = UserMapper.findUser4Login(data.username, data.password, {
        autoSignIn: true // auto login if success
      });
      if (!foundUser) {
        Toast.showDanger(global.Lang._('Sign in has failed. Please check your username, password!'));
        return;
      }
      // Redirect to home page?!
      this.props.navigation.navigate('/');
    }
  
    render() {
      return (
        <Container>
          <Content style={[styles.content]} contentContainerStyle={[styles.contentContainer]}>
            <Form style={[styles.form]}>
              <Item inlineLabel>
                <Label>{global.Lang._('Username')}</Label>
                <Input
                  blurOnSubmit={true}
                  maxLength={25}
                  onChangeText={txt => (this._data.username = txt)}
                />
              </Item>
              <Item inlineLabel>
                <Label>{global.Lang._('Password')}</Label>
                <Input
                  secureTextEntry={true}
                  blurOnSubmit={true}
                  maxLength={25}
                  onChangeText={txt => (this._data.password = txt)}
                />
              </Item>
              <Button
                full
                info
                style={[styles.btnSubmit]}
                onPress={this.onSubmit}
              >
                <Text>{global.Lang._('SIGN IN')}</Text>
              </Button>
              <Button full iconLeft style={[styles.btnSubmit]}>
                <Icon name='logo-facebook' />
                <Text>{global.Lang._('Facebook')}</Text>
              </Button>
              <Button full iconLeft danger style={[styles.btnSubmit]}>
                <Icon name='logo-google' />
                <Text>{global.Lang._('Google+')}</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      );
    }
  }