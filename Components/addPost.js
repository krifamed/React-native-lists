import React from 'react';
import { Text, Button, Icon, Container, Form, Item, Label, Input } from 'native-base';
import uuid from 'uuid';

import Posts, { addPost } from './posts';

export default class AddPost extends React.Component{
  static navigationOptions = {
    header: null
  };
  constructor(){
    super();
    this.state= {
      post: {
        title: '',
        body: '',
        id: uuid.v4(),
        userid: 1,
      },
    }
  }

  savePost(navigate){
    this.props.navigation.state.params.onGoBack(this.state.post);
    this.props.navigation.goBack();
  }


/*  savePost(navigate){
    console.log(this.state.post.body+" "+this.state.post.title)
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify(this.state.post),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
    }).then((response) => response.json())
      .then((data)=>console.log(data.title));
    navigate('Posts');
  }
*/

  render(){
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <Form>
          <Item floatingLabel>
            <Label> title</Label>
            <Input
              onChangeText={ (value)=> this.setState({post:{
                title: value,
                body: this.state.post.body,
                id: this.state.post.id,
                userid: this.state.post.userid,
                } })
             }
            />
          </Item>
          <Item floatingLabel>
            <Label> body</Label>
            <Input
            onChangeText={ (value)=> this.setState({post:{
              title: this.state.post.title,
              body: value,
              id: this.state.post.id,
              userid: this.state.post.userid,
            } })
           }

              multiline= { true }
              numberOfLines= {5}
            />
          </Item>
          </Form>
          <Button full onPress={ this.savePost.bind(this, navigate) }>
            <Text>Save Post</Text>
          </Button>

      </Container>
    );
  }
}
