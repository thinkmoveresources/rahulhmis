import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from "@react-navigation/native";
// import Registration1 from "../NavScreens/Setting3";
const Splash = ({navigation}) => {
  navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("Setting1");
      
      spl();
      alert("");
    }, 300);
  }, []);
  function spl(){
  return (
    <View style={styles.container}>
      <Image source={require('./Images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>DoctorApp</Text>
    </View>
  );
  }
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#fff',
  },
  title: {color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 20},
});
