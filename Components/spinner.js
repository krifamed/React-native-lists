import React from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Container} from 'native-base';
// import { StackNavigator } from 'react-navigation';
import ListUsers from './listUsers';

class Spinner extends React.Component{
  static navigationOptions = {
    header: null
  };
  constructor(){
    super();
    this.state= {
      visibility: true,
    }
  }
  // componentDidMount(){
  //   const { navigate } = this.props.navigation;
  //   setTimeout(()=>{
  //     this.setState({
  //       visibility: false,
  //     })
  //   },2000);
  // }
  render(){
    // const { navigate } = this.props.navigation;

    return(
      <Container  style={styles.container}>
      {this.state.visibility&&(
        <ActivityIndicator size='large'/>
      )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  }
});
export default Spinner;
