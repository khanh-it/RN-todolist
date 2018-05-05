import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
//
import TodoList from "../TodoList";
import ProfileScreen from "../ProfileScreen";
import SideBar from "../SideBar";

/**
 * @class HomeScreen
 */
const HomeScreen  = DrawerNavigator(
  {
    '/':  {
      screen: TodoList
    },
    '/profile':  {
      screen: ProfileScreen
    }
  },
  {
    contentComponent: (props) => (<SideBar {...props} />)
  }
);
export default HomeScreen;

