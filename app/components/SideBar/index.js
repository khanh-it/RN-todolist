import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  View
} from "react-native";
import {
  Container,
  Content,
  Left,
  Body,
  Right,
  Text,
  Icon,
  List,
  ListItem
} from "native-base";

//
let styles = StyleSheet.create({
  profileBox: {
    padding: 6
  }
});

/**
 * 
 * @export
 * @class SideBar
 * @extends {Component}
 */
export default class SideBar extends Component {
  render() {
    let { navigation } = this.props;
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../assets/img/sidebar-bg.png')}
            style={{
              height: 256,
              // alignSelf: "stretch",
              justifyContent: "flex-end",
              alignItems: "flex-start"
            }}
          >
            <View style={[styles.profileBox]}>
              <Text><Icon name='contact' /> {'KhanhDTP'}</Text>
            </View>
          </ImageBackground>
          <List>
            <ListItem
              icon
              onPress={evt => { navigation.navigate('/') }}
            >
              <Left><Icon name='home' /></Left>
              <Body>
                <Text>Home</Text>
              </Body>
            </ListItem>
            <ListItem
              icon
              onPress={evt => { navigation.navigate('/profile') }}
            >
              <Left><Icon name='aperture' /></Left>
              <Body>
                <Text>Profile</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left><Icon name='log-out' /></Left>
              <Body>
                <Text>Sign Out</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
