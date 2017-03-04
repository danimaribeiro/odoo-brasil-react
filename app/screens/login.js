/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Alert,
  TextInput,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';

import { Container, Content, Button, Text, Form, Item, Icon, Input, Label, Body, Thumbnail, Left, Right } from 'native-base';

import Session from '../classes/session';
import User from '../classes/user';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      username: 'danimar@trustcode.com.br',
      password: ''
    };
  }
  render() {
    let animate = (this.state.animating);
    return (
      <Container>
        <Image source={require('../images/male-lion-portrait-george-schmahl.jpg')} style={styles.fundo}>
          <Content>
            <Form>
                <ActivityIndicator
                  animating={true}
                  style = {{ opacity : this.state.animating ? 1 : 0 }}
                  size="large"
                  />
                <Body>
                  <Thumbnail square source={require('../images/logo_trustcode-site-01.png')} style={{ width: 280}} />
                </Body>
                <Item stackedLabel>
                    <Label style={{ color:'#FFF'}}>Usuário</Label>
                    <Icon active name='ios-person' />
                    <Input style={{ color:'#FFF', borderColor:'#FF0'}}
                      editable={ !this.state.animating }
                      onChangeText={(username) => this.setState({username})}
                      value={this.state.username} />
                </Item>
                <Item stackedLabel last>
                    <Label style={{ color:'#FFF'}}>Senha</Label>
                    <Input editable={ !this.state.animating }
                      onChangeText={(password) => this.setState({password})}
                      value={this.state.password} secureTextEntry />
                    <Icon active name='ios-unlock-outline' />
                </Item>
                <Button block info onPress={this.onPress.bind(this)}>
                   <Text>Login</Text>
               </Button>
               <Button transparent success>
                  <Body>
                    <Text style={{ color:'#FFF'}}>Criar conta</Text>
                  </Body>
               </Button>
               <Button transparent>
                 <Body>
                   <Text style={{ color:'#FFF'}}>Esqueci minha senha</Text>
                 </Body>
               </Button>
              </Form>
            </Content>
          </Image>
        </Container>
    );
  }
  onPress(){
    var params = {
      db: 'trustcode_oficial',
      login: this.state.username,
      password: this.state.password
    }
    var data = {
      jsonrpc: "2.0",
      method: "call",
      params: params,
      id: Math.random(),
    }
    fetch('http://www.trustcode.com.br/web/session/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        animating: false
      })
      if(responseJson.hasOwnProperty("error")) {
        var erro = responseJson.error.message + '\n' + responseJson.error.data.name;
        Alert.alert(erro);
      } else {
        var user = new User(responseJson.result);
        var session = new Session(responseJson.result);
        this.props.navigator.push({
          id: 'home',
          session: session,
          user: user
        });
      }
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
    this.setState({
      animating: !this.state.animating
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    width: null,
    height: null
  }
});

AppRegistry.registerComponent('Login', () => Login);
