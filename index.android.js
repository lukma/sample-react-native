/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ViewPagerAndroid,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import codePush from "react-native-code-push";
import Welcome from './welcome';
import Home from './home';
import More from './more';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, installMode: codePush.InstallMode.ON_NEXT_RESUME };

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-end',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green'
  },
  tab_item: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  viewpager: {
    flex: 1
  }
});

export default class ReactNativeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ViewPagerAndroid
          ref={(viewpager) => {this.viewpager = viewpager}}
          initialPage={0}
          style={styles.viewpager}>
          <Home/>
          <More/>
        </ViewPagerAndroid>
        <View style={styles.tab}>
          <TouchableNativeFeedback onPress={() => this.viewpager.setPage(0) }>
            <View style={styles.tab_item}>
              <Image source={require('./img/ic_home.png')} />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.viewpager.setPage(1) }>
            <View style={styles.tab_item}>
              <Image source={require('./img/ic_more_vert.png')} />
            </View>
          </TouchableNativeFeedback>
        </View>
        <Welcome/>
      </View>
    );
  }
}

ReactNativeProject = codePush(codePushOptions)(ReactNativeProject);

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);
