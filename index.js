import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Image
} from 'react-native';
import { DrawerNavigator } from "react-navigation";

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Home',
      icon: ({ tintColor }) => (
        <Image
          source={require('./chats-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Notifications',
      icon: ({ tintColor }) => (
        <Image
          source={require('./notif-icon.png')}
          style={[styles.tabIcon, {tintColor: tintColor}]}
        />
      ),
    }),
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});


AppRegistry.registerComponent('SimpleApp', () => MyApp);