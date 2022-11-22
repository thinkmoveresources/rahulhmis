import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert,Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {signIn} from '../API/firebaseMethods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import AwesomeAlert from 'react-native-awesome-alerts';
import { styles } from "../Style";
export default function SignIn({navigation}) {
  // const { styles } = useStyle();
  const [showAlert, setShowAlert] = useState(false);     
  function showAlert1(){setShowAlert(true)}
  function hideAlert1 () {setShowAlert(false)}

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  // const handlePress = () => {    
    
  //   if (!email) {
  //     if (Platform.OS === 'web') {
  //       alert('Web Alert','Email field is required.');
  //     } else {
  //       Alert.alert('Android Alert','Email field is required.');
  //     } 
  //   }else{

  //   if (!password) {
  //     Alert.alert('Password field is required.');
  //   }
  //   else{

  
  //   const data = {
  //     email : email,
  //     password: password
  //   }
  //   // signIn(email, password);
  //   // setEmail('');
  //   // setPassword('');
  //   axios({
  //     method: 'post',
  //     url: 'https://www.thinkmoveresources.com/generateToken',     
  //     data,
  //     headers:{"Content-Type": 'application/x-www-form-urlencoded'}
  //   }).then(function (response) {
  //     // // Alert.alert('Alert Title',"Succeed");
  //     // console.log("_________________");
  //     // console.log(response);
  //     // console.log("_________________");
  //     // console.log(response.data);
  //     // console.log("_________________");
  //     if (response.data==""){
  //       Alert.alert('Alert Title',"Succeed");
  //     }else{setUsername(response.data);}
      
  //     usertoken=response.data;
  //     AsyncStorage.setItem('jwt', usertoken);
  //     console.log(usertoken);
  //     console.log(`Success! You may now access protected content1.`);
  //     navigation.navigate('NavMenu');
      
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   }
  // }
  // };
  const onSubmit = data => {
    axios({
      method: 'post',
      url: 'https://www.thinkmoveresources.com/generateToken',     
      data,
      headers:{"Content-Type": 'application/x-www-form-urlencoded'}
    }).then(function (response) {
      // Alert.alert('Alert Title',"Succeed");
      console.log(response.data);
      setUsername(response.data);
      usertoken=response.data;
      AsyncStorage.setItem('jwt', usertoken);
      navigation.navigate('NavMenu');     
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Sign in to your account:</Text>
      <View style = {styles.bluebox}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.formInput}
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
            style={styles.formInput}
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavMenu1')}>
        <Text style={styles.buttonText}>Main Menu</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

