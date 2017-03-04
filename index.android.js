/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Login from './app/screens/login';
import Home from './app/screens/home';
import PartnerView from './app/screens/partner';
import MessageWall from './app/screens/message';

export default class Playground extends Component {
  render() {
    return (
      <Navigator renderScene={this.renderScene}
        initialRoute={{id: 'login'}} />
    );
  }
  renderScene(route, navigator){
    switch (route.id) {
      case 'login':
        return (
          <Login navigator={navigator} />
        )
        break;
      case 'home':
          return (
            <Home navigator={navigator} user={route.user} session={route.session} />
          )
          break;
      case 'partner':
          return (
            <PartnerView navigator={navigator} user={route.user} session={route.session} />
          )
          break;
      case 'message':
          return (
            <MessageWall navigator={navigator} user={route.user} session={route.session} />
          )
          break;
      default:
        return (
          <Login navigator={navigator} />
        )
    }
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

AppRegistry.registerComponent('Playground', () => Playground);
