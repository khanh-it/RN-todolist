import React, { Component } from "react";
import {
  StyleSheet
} from 'react-native';
import {
  Header, Left, Right,
  Body, Title,
  Button, Icon,
  View, Text
} from 'native-base';

//
// let styles = StyleSheet.create({});

/**
 * @class Header
 */
export default class AuthScreenHeader extends Component {
    constructor() {
      super();
      // Init state
      this.state = {};
    }

    /**
     * 
     * 
     * @memberof AuthScreenHeader
     */
    _getNavProps() {
      let { navigation } = this.props;
      let { routeName } = navigation.state;
      // Case sign-in
      if ('/auth/sign-in' === routeName) {
        return {
          type: 'SI',
          title: global.Lang._('Sign In')
        };
      }
      // Case sign-up
      if ('/auth/sign-up' === routeName) {
        return {
          type: 'SU',
          title: global.Lang._('Sign Up')
        };
      }
      // Case forgot-password
      if ('/auth/forgot-password' === routeName) {
        return {
          type: 'FP',
          title: global.Lang._('Forgot Password')
        };
      }
      //
      return {};
    }
  
    render() {
      // console.log('props: ', this.props);
      let { navigation } = this.props;
      let navProps = this._getNavProps();
      // console.log('navProps: ', navProps);

      //
      let brand = null;
      let buttons = null;
      if ('SI' === navProps.type) {
        brand = (
          <Icon name='contact' />
        );
        buttons = (
          <Button
            transparent
            onPress={() => navigation.navigate('/auth/sign-up')}
          >
            <Icon type='Entypo' name='add-user' />
          </Button>
        );
      }
      if ('SU' === navProps.type) {
        brand = (
          <Icon type='Entypo' name='add-user' />
        );
        buttons = (
          <Button
            transparent
            onPress={() => navigation.navigate('/auth/sign-in')}
          >
            <Icon name='contact' />
          </Button>
        );
      }
      // #end

      return (
        <Header>
        <Left>
          <Button transparent>{brand}</Button>
        </Left>
        <Body><Title>{navProps.title}</Title></Body>
        <Right>
          {buttons}
          {/* <Button
            transparent
            onPress={() => navigation.navigate('/auth/forgot-password')}
          >
            <Icon type='Entypo' name='download' />
          </Button> */ }
        </Right>
      </Header>
      );
    }
  }