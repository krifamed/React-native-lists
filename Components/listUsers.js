import React from 'react';
import { StyleSheet, View, ListView, Image, } from 'react-native';
import { Text, Button, Container, Icon, Content,
        Card, CardItem, Body, Left, Right, Thumbnail } from 'native-base';
import IconM from 'react-native-vector-icons/MaterialIcons';

import Posts from './posts';

const lists = [
  {id: 1, source: 'http://www.reactnativeexpress.com/logo.png', name: 'mohamed'},
  {id: 2, source: 'http://www.reactnativeexpress.com/logo.png', name: 'amine'},
  {id: 3, source: 'http://www.reactnativeexpress.com/logo.png', name: 'walid'},
  {id: 4, source: 'http://www.reactnativeexpress.com/logo.png', name: 'krifa'},
]
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });

export default class ListUsers extends React.Component {


static navigationOptions = {
  header: null
};


  state= {
    dataSource: ds.cloneWithRows(lists)
  }

/*
  *
  precident View
  <View style={styles.container}>
    <View style={styles.imgContent}>
      <Image style={styles.img} source={{uri:postData.source}}/>
    </View>
    <View>
      <Text style={styles.name}>
        { postData.name }
      </Text>
    </View>
  </View>
*/
  renderRow = (postData) => {
    return (
      <Card style={styles.List }>
           <CardItem>
             <Left>
               <Thumbnail source={{uri: postData.source}} />
               <Body>
                 <Text>{ postData.name }</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem cardBody>
             <Image source={{uri: postData.source}} style={{height: 150, width: null, flex: 1}}/>
           </CardItem>
           <CardItem>
             <Left>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
               </Button>
             </Left>
             <Body>
               <Button transparent>
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
               </Button>
             </Body>
             <Right>
               <Text>11h ago</Text>
             </Right>
           </CardItem>
         </Card>

    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <ListView dataSource ={ this.state.dataSource } renderRow={ this.renderRow } />
        </Content>
        <Button iconLeft onPress={ () => navigate('Posts') } style={styles.button}>
          <IconM name="work"/>
          <Text>Posts</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imgContent: {
    padding: 5,
  },
  img: {
    width: 50,
    height: 50,
  },
  name: {
    padding: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    paddingLeft: 5
  },
  section: {
    paddingTop: 10
  },
  container: {
    // flexDirection: 'column',

  },
  List: {
    flex: 1
  },
  button: {
  },
});
