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
      <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 100, height: 100}} />
    )
  }
}
