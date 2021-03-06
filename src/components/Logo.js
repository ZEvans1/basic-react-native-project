import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
  render(){
    return(
      <View style={styles.container}>
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
         style={{width: 100, height: 100}} />
         <Text style={styles.logoText}>A Basic React Native App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 18,
    fontSize: 18,
    color:'rgba(255, 255, 255, 0.7)'
  }
});
