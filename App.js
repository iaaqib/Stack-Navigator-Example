/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Button
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu. Heelow, its me ',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu.',
});



export default class App extends Component<{}> {

  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Stack Navigator!
        </Text>
        <Button
        title="Go to Second Screen"
        onPress={() => navigate('Second', {data: 'Coming From FirstScreen'}) }/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});