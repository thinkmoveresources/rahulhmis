import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button,TouchableOpacity,Image,Alert,Modal } from "react-native";
import { useForm, Controller } from "react-hook-form";
import logo from './assets/favicon.png';
import Constants from 'expo-constants';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

const App = () =>  {
  const [modalVisible, setModalVisible] = useState(false);
  const [username,setUsername]=useState('');
  // const [usertoken,setUsertoken]=useState('');
  let usertoken="";
  //From Hook Veriables  
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  
  const onSubmit = data => {    
    axios({
      method: 'post',
      url: 'https://www.thinkmoveresources.com/generateToken',     
      data,
      headers:{"Content-Type": 'application/x-www-form-urlencoded'}
    }).then(function (response) {
      Alert.alert('Alert Title',"Succeed");
      console.log(response.data);
      setUsername(response.data);
      usertoken=response.data;
      console.log(usertoken);
      //console.log(response.data[0].token); // fields are case sensetive
      //setUsername(response.data[0].token); // Assign responce data to variable
      console.log("Generated");
      validateuser();
      })
      .catch(function (error) {
        console.log(error);
      });
 };

 const validateuser=()=>{
  axios({
    method: 'get',
    url: 'https://www.thinkmoveresources.com/validateToken',
    headers:{"Authorization" : `Bearer ${usertoken}`}
  }).then(function (response) {
    Alert.alert('Alert Title',"Validated");
    console.log(response.data);
    
    })
    .catch(function (error) {
      console.log(error);
    });
 
  
 }
  return (
    
    <View style={styles.container1}>
        <View>
          <Image source={logo} style={{ width: 100, height: 100 }} />
        </View>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      
      {errors.email && <Text>This is required.</Text>}
      
      <Controller
        control={control}
        rules={{
        required: true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
     
      {errors.password && <Text>This is required.</Text>}  

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}       >
          <Text style={styles.text}> LOGIN </Text>
        </TouchableOpacity>
        <TextInput  style={styles.input} value={username} />
        
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
    label: {
      color: 'white',
      margin: 20,
      marginLeft: 0,
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: '#7480e7',
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,        
        borderRadius: 14,
        width: 200, height: 50,
        argin:20,
      },
      text: {
        
        fontSize: 24,
        argin:20,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      backgroundColor: '#0e101c',
    },
    
    input: {
    backgroundColor: '#f8b4b4',
    borderColor: 'none',
    height: 50,
    padding: 0,
    borderRadius: 14,
    margin:20,
    fontSize: 24,
    alignItems: "center",
    width: 250, height: 50,
    justifyContent: 'center',
    },
  });
 