import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from './src/pages/Login';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#101f27"
        barStyle="light-content"
        />
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#37474f',
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  }
});
