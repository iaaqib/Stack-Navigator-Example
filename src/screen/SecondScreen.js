import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Button
} from 'react-native';



export default class SecondScreen extends Component {

  render() {
  const { navigate } = this.props.navigation;
    return (
      <View>
      <Text style = {{textAlign:'center',  fontSize: 18 , paddingTop: 5}}>
      {this.props.navigation.state.params.data}
      </Text>
      <Button
        title="Go Back"
        onPress={() =>  this.props.navigation.goBack()}
      />
      </View>
    );
  }
}
