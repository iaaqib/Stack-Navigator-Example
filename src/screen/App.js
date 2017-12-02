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
  View, Button, ActivityIndicator
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu. Heelow, its me ',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu.',
});



export default class App extends Component {
 
  constructor(props){
    super(props)
    
    this.state = {
      email: '',
      isLoading: true,
      descriptionTextHidden: false 
    };

  }

  render() {
    const {navigate} = this.props.navigation;
    const {email, isLoading, descriptionTextHidden} = this.state;
    return (

      
      <View style={styles.container}>
      <View style={styles.containerActvityIndicator}>
    {isLoading && (
    <ActivityIndicator
     style={{ height: 80 }}
     color="#000"
     size="large"
       />)}
    </View>
      { descriptionTextHidden && (
        <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Stack Navigator! {email}
        </Text>
        <View style = {{marginTop: 10, borderColor: '#841584', borderWidth:2}}>
        <Button
        title="Go to Second Screen" color = '#841584' 
        onPress={() => navigate('Second', {data: 'Coming From FirstScreen'}) }/>
        </View>
    </View>)}
      
    

      </View>
     
    );
  }



  componentWillMount(){
    console.log('componentWillMount');
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
     .then((response) => response.json())
     .then((responseJson) => {
        this.setState({isLoading: !this.state.isLoading, descriptionTextHidden: !this.state.descriptionTextHidden})
        responseJson.map((currentValue) => {
          var email = this.state.email == '' ? currentValue.email : this.state.email.concat(' ',currentValue.email)
          
          this.setState({email: email})
          console.log(this.state.email)
          console.log(currentValue.email)
        });
     })
     .catch((error) => {
       console.error(error);
     });
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
  containerActvityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
