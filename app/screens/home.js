import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
   Container, Header, Content, Button, Text, Form,
   Item, Icon, Input, Label, Body, Thumbnail, Left,
   Right, Title, Footer, FooterTab
 } from 'native-base';


export default class Home extends Component {
  render() {
    return (
      <Navigator
         renderScene={this.renderScene}
         navigator={this.props.navigator}
         configureScene={(route, routeStack) => Navigator.SceneConfigs.VerticalUpSwipeJump} />
    );
   }
   render() {
     return (
       <Container>
             <Header>
                 <Left>
                     <Button transparent>
                         <Icon name='menu' />
                     </Button>
                 </Left>
                 <Body>
                     <Title>Trustcode</Title>
                 </Body>
                 <Right />
             </Header>

             <Content>
                 <Text> O Conteúdo vai aqui</Text>
             </Content>

             <Footer>
                 <FooterTab>
                     <Button full>
                         <Text>Footer</Text>
                     </Button>
                 </FooterTab>
             </Footer>
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
