import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

//import * as firebase from 'firebase';



export default function HomeScreen({navigation}) {
  navigation = useNavigation(); 
//   let currentUserUID = firebase.auth().currentUser.uid;
//   const [firstName, setFirstName] = useState('');

//   useEffect(() => {
//     async function getUserInfo(){
//       let doc = await firebase
//       .firestore()
//       .collection('users')
//       .doc(currentUserUID)
//       .get();

//       if (!doc.exists){
//         Alert.alert('No user data found!')
//       } else {
//         let dataObj = doc.data();
//         setFirstName(dataObj.firstName)
//       }
//     }
//     getUserInfo();
//   })

//   const handlePress = () => {
//     console.log('in loop');
//     console.log(AsyncStorage.getItem('jwt'));
//     AsyncStorage.removeItem('jwt');
//     const removeData = async () => {
//         try {
//           const savedUser = await AsyncStorage.clear();
//         } catch (error) {
//           console.log(error);
//         }
//       };
    
//   };
const handlePress = async () => {
    try {
      await AsyncStorage.removeItem('jwt')
      // navigation.navigate('WelcomeScreen');
      navigation.navigate('WelcomeScreen');
    
    } catch(e){
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hi {firstName}</Text> */}
      <Text style={styles.titleText}>Welcome To Krsnaa Diagnotics.....!!!</Text>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      width: 150,
      padding: 5,
      backgroundColor: '#ff9999',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 15,
      alignSelf: 'center',
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
    text: {
      textAlign: 'center',
      fontSize: 30,
      
      fontStyle: 'italic',
      marginTop: '2%',
      marginBottom: '2%',
      fontWeight: 'bold',
      color: '#ee3366',
    },
    titleText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: '2%',
      color: '#2E6194',
      
    },
  });