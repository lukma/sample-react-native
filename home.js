'use strict';
 
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  View,
  Text,
  Image
} from 'react-native';
import Styles from './style';
 
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      offset: 0,
      limit: 10,
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { offset, limit } = this.state;
    const url = `https://api.lukmagao.com/1.0/recentupdate/items?id=61&offset=${offset}&limit=${limit}`;
    return fetch(url, { 
      method: 'get', 
      headers: {
        'Authorization': 'Basic YWRtaW46MTIzNA=='
      }})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(this.offset);
        this.setState({
          data: offset === 0 ? responseJson.item : [...this.state.data, ...responseJson.item],
          isLoading: false,
          offset: offset + 10,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => item.id}
          onEndReached={this.getData}
          renderItem={({item}) => 
            <View style={Styles.item}>
              <Image style={Styles.item_thumbnail} source={{uri:item.image.replace("http", "https")}} />
              <View style={Styles.item_header}>
                <Image style={Styles.item_avatar} source={{uri:item.member.pict.replace("http", "https")}} />
                <Text numberOfLines={2} style={Styles.item_title}>{item.title}</Text>
              </View>
            </View>
          }
        />
    );
  }
}
 
module.exports = Home;