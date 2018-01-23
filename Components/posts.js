import React from 'react';
import { StyleSheet, View,ListView, TouchableHighlight } from 'react-native';
import { Text, Button, Container,
        Card, CardItem, Body } from 'native-base';

import AddPost from './addPost';

export default class Posts extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2});
    this.state = {
      postds: ds,
      list: [],
    };
  }

  componentDidMount(){
    this.fetchposts();
  }
  fetchposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        list: response,
        postds: this.state.postds.cloneWithRows(response),
      });
    });
    // console.log(this.state.list);
    // this.setState({
    //   postds: this.state.postds.cloneWithRows(this.state.list),
    // });
  }

  postAdd(post) {
    posts = this.state.list;
    posts.push(post)
    // console.log(posts);
    this.setState({
      postds: this.state.postds.cloneWithRows(posts)
    });
  }

  renderRow(post){
    // <View>
    // <TouchableHighlight>
    // <Text style={ styles.rowText }>{ post.title }</Text>
    // </TouchableHighlight>
    // </View>
    return(
      <Card>
        <CardItem>
          <Body>
            <Text>
               { post.title }
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style= { styles.container }>
        <Button block success onPress={ ()=> navigate('AddPost', {onGoBack: (post)=> this.postAdd(post)})}>
          <Text>Add Post</Text>
        </Button>
        <View style={ styles.row }>

          <ListView
            dataSource={ this.state.postds }
            renderRow={ this.renderRow }
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginBottom:10,
    padding: 10
  },
  row: {
    padding :10,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    marginBottom: 10
  },
  rowText: {
    flex: 1,
    margin: 10,
    color: 'grey'
  }
 });
