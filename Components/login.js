import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {Container, Form, Item, Label, Input, Button, Text } from 'native-base';
// import { StackNavigator } from 'react-navigation';
import ListUsers from './listUsers';
import Spinner from './spinner';

class Login extends React.Component{
  static navigationOptions = {
    header: null
  };

  constructor(){
    super();
    this.state= {
      formLoading: true,
      spinnerLoading: false,
    }
  }
  showSpinner(navigate){
    this.setState({
      formLoading: false,
    })
    setTimeout(()=>{
      navigate('ListUsers')
    },4000);

  }

  render(){
    const { navigate } = this.props.navigation;
    /*return (
      <View style={ styles.container }>
        <View style={ styles.input } >
          <TextInput placeholder="Name"/>
        </View>
        <View style={ styles.input }>
          <TextInput secureTextEntry={true} placeholder="password"/>
        </View>
        <TouchableOpacity style= { styles.touchEffect }>
          <Button title="Login" onPress={() => navigate('ListUsers')}/>
        </TouchableOpacity>
      </View>
    );*/
    return(
      <Container style={ styles.container }>
        {this.state.formLoading&&(
          <Form>
            <Item floatingLabel>
              <Label> Username</Label>
              <Input/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true}/>
            </Item>
            <Button block onPress={ this.showSpinner.bind(this, navigate) }>
              <Text>Login</Text>
            </Button>
          </Form>
        )}
        {!this.state.formLoading&&(<Spinner/>)}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
  userName: {
    // flex: 1,
    width: 500
  },
  touchEffect: {
    backgroundColor: 'black'
  },
  input: {
    margin: 5
  }
});
export default Login;
