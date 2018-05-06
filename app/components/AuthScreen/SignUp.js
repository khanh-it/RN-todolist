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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    minWidth: 320,
    width: '90%'
  },
  btnSubmit: {
    marginTop: 30
  }
});

/**
 * @class AuthScreen
 */
export default class SignUp extends Component {
    constructor() {
      super();
      // Init state
      this.state = {
        isReady: false
      };
      // Bind method(s)
      this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * 
     * 
     * @type {{
     *       username: '',
     *       password: '',
     *       passwordRetype: ''
     *     }}
     * @memberof SignUp
     */
    _data = {
      username: '',
      password: '',
      passwordRetype: ''
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

    onSubmit(evt) {
      // Verify input...
      let data = this._data;
      // 
      if (!data.username || !data.password || !data.passwordRetype) {
        Toast.showWarning(global.Lang._('Username and password are all required!'));
        return;
      }
      //
      if (data.password != data.passwordRetype) {
        Toast.showWarning(global.Lang._('Password mismatched!'));
        return;
      }
      // Add new user + auto login
      let err = UserMapper.addUser(data, {
        autoLogin: true // auto login if success
      });
      if (err) {
        Toast.showDanger(global.Lang._('Sign up has failed, please try again!'));
        console.log(err);
        return;
      }
      // Redirect to home page?!
      this.props.navigation.navigate('/');
    }
  
    render() {
      return (
        <Container>
          <View style={[styles.content]}>
            <Form style={[styles.form]}>
              <Item regular>
                <Input
                  placeholder={global.Lang._('Username')}
                  blurOnSubmit={true}
                  maxLength={25}
                  onChangeText={txt => (this._data.username = txt.trim())}
                />
              </Item><Item />
              <Item regular>
                <Input
                  placeholder={global.Lang._('Password')}
                  secureTextEntry={true}
                  blurOnSubmit={true}
                  maxLength={25}
                  onChangeText={txt => (this._data.password = txt.trim())}
                />
              </Item><Item />
              <Item regular>
                <Input
                  placeholder={global.Lang._('Retype password')}
                  secureTextEntry={true}
                  blurOnSubmit={true}
                  maxLength={25}
                  onChangeText={txt => (this._data.passwordRetype = txt.trim())}
                />
              </Item>
              <Button
                full
                info
                style={[styles.btnSubmit]}
                onPress={this.onSubmit}
              >
                <Text>SIGN UP</Text>
              </Button>
            </Form>
          </View>
        </Container>
      );
    }
  }