import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component<{}> {
  render() {
    return(
      <View style={styles.container}>
        <Logo/>
        <Form/>
        <View style={styles.signupText}>
          <Text>Sign up for an account.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#37474f',
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  },
  signupText: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
