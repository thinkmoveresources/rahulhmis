import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoadingScreen({ navigation }) {
  
    useEffect(() => {
    readData();
  }, []);
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('jwt');
      console.log(value);
      if (value !== null) {
        navigation.reset({
                    index: 0,
                    routes: [{ name: 'NavMenu' }],
                    // routes: [{ name: 'MainNav' }],
                    
                  });
      } else{
        navigation.reset({
                    index: 0,
                    routes: [{ name: 'WelcomeScreen' }],
                  });
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#3FC5AB',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });