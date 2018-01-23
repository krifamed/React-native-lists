import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './Components/login';
import ListUsers from './Components/listUsers';
import Posts from './Components/posts';
import AddPost from './Components/addPost';
import Spinner from './Components/spinner';


  const NavApp = StackNavigator({
    Login: {screen: Login},
    Spinner: {screen: Spinner},
    ListUsers: {screen: ListUsers },
    Posts: {screen: Posts},
    AddPost: {screen: AddPost}

});
class App extends React.Component{

  state= {
    load: false,
  }

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({
    load: true,
  })
  }
  render(){
    if(!this.state.load){
      return <Expo.AppLoading/>;
    }
    return(
      <NavApp/>
    );
  }
}

export default App;
