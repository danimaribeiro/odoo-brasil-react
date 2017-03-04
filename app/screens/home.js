/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Footer,
  List,
  Left,
  Icon,
  Thumbnail,
  Title,
  Body,
  Right,
  Button,
  ListItem,
  Item,
  Fab,
  InputGroup,
  Input,
  Drawer,
  SideBar,
  StyleProvider
} from 'native-base';

import getTheme from '../../native-base-theme/components';
import DrawerMenu from '../components/drawer';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: props.user,
      session: props.session,
    };
  }
  closeDrawer = () => {
    this._drawer._root.close()
  }
  openDrawer = () => {
    this._drawer._root.open()
  }
  render() {
    let items = this.state.dataSource;
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={ <DrawerMenu navigator={this.props.navigator} user={this.props.user} session={this.props.session} /> }
        >
      <StyleProvider  style={getTheme()}>
        <Container>
          <Header searchBar>
            <Left>
              <Button transparent onPress={this.openDrawer}>
                <Icon name='menu' />
              </Button>
              </Left>
              <Body>
                <Title>Odoo Brasil</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text>Aqui vai o texto</Text>
            </Content>
          </Container>
        </StyleProvider>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Home', () => Home);
