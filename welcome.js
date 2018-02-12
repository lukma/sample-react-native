'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Modal,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDSFGqkNnVcIAzt5dVYZS0WgXgFYnOwya8",
    authDomain: "codigo-android-dev.firebaseapp.com",
    databaseURL: "https://codigo-android-dev.firebaseio.com",
    projectId: "codigo-android-dev",
    storageBucket: "",
    messagingSenderId: "179891865957"
  };
firebase.initializeApp(config);
 
class Welcome extends Component {
    state = {
        username: '',
        password: '',
        modalVisible: false,
    }

    constructor(props) {
        super(props);
        // this.checkAuth();
    }

    checkAuth = () => {
        var that = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                that.state.modalVisible = false;
            } else {
                that.state.modalVisible = true;
            }
        });
    }

    loginWithEmail = () => {
        var that = this;
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .then(function(result) {
                Alert.alert('login success');
                that.state.modalVisible = false;
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    }

    registerWithEmail = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
            .then(function(result) {
                Alert.alert('register success');
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(errorMessage);
        });
    }
    
    render() {
        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {  }} >
                <View style={{padding: 24}}>
                    <TextInput
                        onChangeText={(text) => this.state.username=text}
                        style={{height: 40}}
                        autoCapitalize={'none'}
                        keyboardType={'email-address'}
                        placeholder='Username' />
                    <TextInput
                        onChangeText={(text) =>  this.state.password=text}
                        style={{height: 40}}
                        secureTextEntry={true}
                        placeholder='Password' />
                    <Button title={'Login'} onPress={() => { this.loginWithEmail() }} />
                    <Button style={{marginTop: 8}} title={'Register'} onPress={() => { this.registerWithEmail() }} />
                </View>
            </Modal>
        );
    }
}
 
module.exports = Welcome;