'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  SectionList,
  Image,
  View,
  Text
} from 'react-native';
import Styles from './style';
 
class More extends Component {
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
    const url = `https://api.netcj.co.id/1.0/recentupdate/items?id=61&offset=${offset}&limit=${limit}`;
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
      <View style={Styles.container}>
        <SectionList
          keyExtractor={(item, index) => item.id}
          onEndReached={this.getData}
          sections={[
            {
              key: '1',
              avatar: 'https://assets.materialup.com/uploads/fe90b7ea-21a6-4cd3-b6c1-2316bc0e262a/avatars4.jpg',
              name: 'Bob',
              description: 'Lorem ipsum dolor dono',
              data: this.state.data
            }
          ]}
          renderItem={({item}) => 
            <View style={Styles.item}>
              <Image style={Styles.item_thumbnail} source={{uri:item.image.replace("http", "https")}} />
              <View style={Styles.item_header}>
                <Text style={Styles.item_title}>{item.title}</Text>
              </View>
            </View>
          }
          renderSectionHeader={({section}) =>
            <View style={Styles.header}>
              <Image style={Styles.avatar} source={{uri:section.avatar}} />
              <Text style={Styles.name}>
                {section.name}
              </Text>
              <Text style={Styles.description}>
                {section.description}
              </Text>
            </View>
          }
        />
      </View>
    );
  }
}
 
module.exports = More;