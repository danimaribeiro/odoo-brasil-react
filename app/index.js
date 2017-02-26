import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react';

import { Navigator } from 'react-native';

import LoginPage from './screens/login';
import MainPage from './screens/home';

export default class OdooBrasil extends Component {
   render() {
     return (
       <Navigator
          initialRoute={{
            id: 'LoginPage'
          }}
          renderScene={ this.renderScene }
          configureScene={(route, routeStack) => Navigator.SceneConfigs.VerticalUpSwipeJump}/>
     );
   }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'LoginPage') {
      return (
        <LoginPage navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);
  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
