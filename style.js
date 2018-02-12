'use strict';
 
import { StyleSheet } from 'react-native';

var Styles = StyleSheet.create({
  item: {
    marginBottom: 4
  },
  item_header: {
    flexDirection: 'row',
    position: 'absolute',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  item_avatar: {
    height: 48,
    width: 48,
    borderRadius: 24
  },
  item_title: {
    flex: 1,
    fontSize: 22,
    marginLeft: 8,
    color: 'white'
  },
  item_thumbnail: {
    height: 200,
    backgroundColor: 'black',
    resizeMode: 'cover'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 16,
  },
  avatar: {
    width: 128,
    height: 128,
    margin: 16,
    borderRadius: 64
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'whitesmoke'
  }
});

module.exports = Styles;