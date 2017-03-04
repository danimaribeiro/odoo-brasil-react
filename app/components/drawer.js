import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  AppRegistry
} from 'react-native';

import {
  Icon,
  Item,
  Input,
  Button,
  Thumbnail
} from 'native-base';

export default class DrawerMenu extends Component {
  navigateTo = (route) => {
    this.props.navigator.push({
      id: route,
      session: this.props.session,
      user: this.props.user
    });
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <View style={{ height: 130}}>
          <View style={{ flex: 1, backgroundColor: '#12a4c9', flexDirection: 'row', padding: 10}}>
              <View>
                <Thumbnail square size={80} source={{ uri:'http://www.trustcode.com.br/web/image?model=res.users&id=6&field=image_medium'}} />
              </View>
              <View style={{flex: 3}}>
                  <Text>Danimar Ribeiro</Text>
                  <Text note>(48) 99801-6226 - danimaribeiro@gmail.com</Text>
              </View>
              <View>
                  <Icon name='settings' style={{ color: '#FFF'}} />
              </View>
          </View>
          <View style={{flex: 1, backgroundColor: '#12a4c9', padding: 10}}>
              <Item>
                <Input placeholder='Search'/>
                <Icon active name='search' style={{ color: '#FFF'}} />
              </Item>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Button full bordered iconRight onPress={() => this.navigateTo('home')}>
            <Icon active name='home' />
            <Text>Parceiros</Text>
          </Button>
          <Button full bordered iconRight onPress={() => this.navigateTo('message')}>
            <Icon active name='chatboxes' />
            <Text>Mensagens</Text>
          </Button>
          <Button full bordered iconRight onPress={() => this.navigateTo('partner')}>
            <Icon active name='person' />
            <Text>Parceiros</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('DrawerMenu', () => DrawerMenu);
