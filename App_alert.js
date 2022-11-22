import React, { Component } from 'react'; 
import { Alert, Button, View, StyleSheet } from 'react-native';

export default class Home extends Component {

    simpleAlertFunction = () => {
      //function to make simple alert
      Alert.alert('Alert Title','This is Simple Alert');
    }
  twoOptionsAlertFunction = () => {
    //function to make two option alert
    Alert.alert(
       //This is title
      'Hello',
        //This is body text
      'This is two option alert.',
      [
        {text: 'Yes', onPress: () => console.log('Yes Pressed')},
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //on clicking out side, Alert will not dismiss
    );
  }
  threeOptionsAlertFunction = () => {
    Alert.alert(
      //This is title
      'Hello',
      //This is body text
      'This is three option alert.',
      [
        {text: 'May be', onPress: () => console.log('May be Pressed')},
        {text: 'Yes', onPress: () => console.log('Yes Pressed')},
        {text: 'No', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {/*Simple alert*/}
        <View style={{marginVertical: 10}}>
        <Button title='Display Simple Alert' onPress={this.simpleAlertFunction}/>
        </View>
        {/*Alert with two options*/}
        <View style={{marginVertical: 10}}>
        <Button title='Display Alert with Two Options' onPress={this.twoOptionsAlertFunction}/>
        </View>
        <View style={{marginVertical: 10}}>
        {/**Alert with three options*/}
        <Button title='Display Alert with Three Options' onPress={this.threeOptionsAlertFunction}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
});