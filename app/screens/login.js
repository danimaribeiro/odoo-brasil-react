import React, {Component} from 'react';
import { StyleSheet, Image, Navigator, Alert } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Icon, Input, Label, Body, Thumbnail, Left, Right } from 'native-base';

const actionLogin = (login) => {
  login.navigator.resetTo({
    id: 'MainPage'
  })
}

export default class Login extends Component {
  render() {
    return (
      <Navigator
         renderScene={this.renderScene}
         navigator={this.props.navigator}
         configureScene={(route, routeStack) => Navigator.SceneConfigs.VerticalUpSwipeJump} />
    );
   }
  renderScene(route, navigator) {
     return (
          <Container>
            <Image source={require('../images/male-lion-portrait-george-schmahl.jpg')} style={styles.fundo}>
            <Content>
                <Form>
                  <Body>
                    <Thumbnail square source={require('../images/logo_trustcode-site-01.png')} style={{ width: 280}} />
                  </Body>
                  <Item stackedLabel>
                      <Label style={{ color:'#FFF'}}>Usuário</Label>
                      <Icon active name='ios-person' />
                      <Input style={{ color:'#FFF', borderColor:'#FF0'}} />
                  </Item>
                  <Item stackedLabel last>
                      <Label style={{ color:'#FFF'}}>Senha</Label>
                      <Input secureTextEntry />
                      <Icon active name='ios-unlock-outline' />
                  </Item>
                  <Button block info onPress={() => actionLogin(this)}>
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
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    width: null,
    height: null
  },
  textContent: {
    color: 'red'
  },
});
