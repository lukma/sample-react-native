/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  TabBarIOS
} from 'react-native';
import Welcome from './welcome';
import Home from './home';
import More from './more';

export default class ReactNativeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'home'}
            icon={require('./img/ic_home.png')}
            onPress={() => {
                this.setState({
                    selectedTab: 'home',
                });
            }}>
              <Home/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'more'}
            icon={require('./img/ic_more_vert.png')}
            onPress={() => {
                  this.setState({
                      selectedTab: 'more',
                  });
            }}>
            <More/>
          </TabBarIOS.Item>
        </TabBarIOS>
        <Welcome/>
      </View>
    )
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);
