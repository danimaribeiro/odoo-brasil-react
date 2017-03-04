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

export default class PartnerView extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: props.user,
      session: props.session,
      dataSource: []
    };
  }
  componentDidMount = () => {
    this.fetchData();
  }
  fetchData = () => {
    var params = {
      model: 'res.partner',
      limit: 15,
      offset: 0,
      sort: "",
      fields: ['id', 'display_name', 'cnpj_cpf', 'inscr_est', 'phone', 'is_company'],
      domain: [["customer", "=", 1], ["parent_id", "=", false]],
      context: {}
    }
    var data = {
      jsonrpc: "2.0",
      method: "call",
      params: params,
      id: Math.random(),
    }
    fetch('http://www.trustcode.com.br/web/dataset/search_read', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
     .then((response) => response.json())
     .then((responseData) => {
       this.setState({
           dataSource: responseData.result.records
       });
     })
     .done();
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
              <Body style={{flex:3}}>
                <Item>
                    <Input placeholder='Search' style={{width: 350, color: '#FFF'}} />
                </Item>
              </Body>
              <Right>
                  <Icon name='search' style={{color: '#FFF', marginRight: 10}} />
                  <Icon name='person' style={{color: '#FFF'}} />
              </Right>
            </Header>
            <Content>
              <List dataArray={items} renderRow={(data) =>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square size={80} source={{ uri:'http://www.trustcode.com.br/web/image?model=res.partner&id=' + data.id + '&field=image_medium'}} />
                    </Left>
                    <Body>
                        <Text>{data.display_name}</Text>
                        <Text note>{data.phone} - {data.email}</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>Mais</Text>
                        </Button>
                    </Right>
                  </ListItem>
              } />
            </Content>
            <Fab
                  direction="up"
                  style={{ backgroundColor: '#62B1F6'}}
                  position="bottomRight">
                  <Icon name="share" />
            </Fab>
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

AppRegistry.registerComponent('PartnerView', () => PartnerView);
