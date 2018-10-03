import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import DetailScreen from './detail';
import MainScreen from './main';
import tabNav from './tabnav';

import App from './src/app';

const stackNav = StackNavigator({

  
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Main",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("DetailScreen")}>
          <IOSIcon name="ios-menu" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  Detail: {
    screen: UserScreen,
    navigationOptions: (props) => ({
      title: "tabNav",
    })
  }
})

export default stackNav;