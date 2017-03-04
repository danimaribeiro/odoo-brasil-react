/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  WebView,
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
  Card,
  CardItem,
  SideBar,
  StyleProvider
} from 'native-base';


var HTMLView = require('react-native-htmlview');
import getTheme from '../../native-base-theme/components';

import DrawerMenu from '../components/drawer';

export default class Home extends Component {
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
      model: 'mail.message',
      method: 'message_fetch',
      args: [[['needaction', '=', true]]],
      kwargs: { limit: 25 }
    }
    var data = {
      jsonrpc: "2.0",
      method: "call",
      params: params,
      id: Math.random(),
    }
    fetch('http://www.trustcode.com.br/web/dataset/call_kw/mail.message/message_fetch', {
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
           dataSource: responseData.result
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
                <Icon name='menu' style={{color: '#FFF'}} />
              </Button>
              </Left>
              <Body style={{flex:3}}>
                <Title>
                    Mensagens
                </Title>
              </Body>
              <Right>
                  <Icon name='more' style={{color: '#FFF', marginRight:10}} />
              </Right>
            </Header>
            <Content>
              <List dataArray={items} renderRow={(data) =>
                  <Card>
                    <CardItem bordered>
                         <Left>
                             <Thumbnail source={{ uri: 'http://www.trustcode.com.br/web/image?model=res.partner&id=' + data.author_id[0] + '&field=image_medium'}} />
                             <Body>
                               <Text>{ data.subject}</Text>
                               <Text note>{data.date}</Text>
                             </Body>
                         </Left>
                     </CardItem>
                     <CardItem>
                         <Body>
                            <HTMLView
                              value={data.body} />
                             <Button transparent textStyle={{color: '#87838B'}}>
                                 <Text>{data.email_from}</Text>
                                 <Icon name="star-half" />
                             </Button>
                         </Body>
                     </CardItem>
                  </Card>
              } />
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

AppRegistry.registerComponent('MessageWall', () => MessageWall);
