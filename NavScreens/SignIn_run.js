import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert,Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {signIn} from '../API/firebaseMethods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';
export default function SignIn({navigation}) {

  const [showAlert, setShowAlert] = useState(false);     
  function showAlert1(){setShowAlert(true)}
  function hideAlert1 () {setShowAlert(false)}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername]=useState('');
  // const [usertoken,setUsertoken]=useState('');
  let usertoken="";

  const handlePress = () => {    
    
    if (!email) {
      if (Platform.OS === 'web') {
        alert('Web Alert','Email field is required.');
      } else {
        Alert.alert('Android Alert','Email field is required.');
      } 
    }else{

    if (!password) {
      Alert.alert('Password field is required.');
    }
    else{

  
    const data = {
      email : email,
      password: password
    }
    // signIn(email, password);
    // setEmail('');
    // setPassword('');
    axios({
      method: 'post',
      url: 'https://www.thinkmoveresources.com/generateToken',     
      data,
      headers:{"Content-Type": 'application/x-www-form-urlencoded'}
    }).then(function (response) {
      // // Alert.alert('Alert Title',"Succeed");
      // console.log("_________________");
      // console.log(response);
      // console.log("_________________");
      // console.log(response.data);
      // console.log("_________________");
      if (response.data==""){
        Alert.alert('Alert Title',"Succeed");
      }else{setUsername(response.data);}
      
      usertoken=response.data;
      AsyncStorage.setItem('jwt', usertoken);
      console.log(usertoken);
      console.log(`Success! You may now access protected content1.`);
      navigation.navigate('NavMenu');
      
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in to your account:</Text>

      <TextInput
        style={styles.formInput}
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        placeholder="Enter your password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        
        <Text style={styles.buttonText}>Sumbit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavMenu1')}>
        <Text style={styles.buttonText}>Main Menu</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      width: 200,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
      margin: "2%",
    },
    buttonText: {
      fontSize:20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#3FC5AB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formInput: {
      width: 300,
      fontSize:18,
      borderWidth: 1,
      borderColor:'#a4eddf',
      padding: 10,
      margin: 5,
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold',
      color: '#2E6194',
    }
  });