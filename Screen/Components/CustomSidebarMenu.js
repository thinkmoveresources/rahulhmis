// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React, { useState } from 'react'
import {Button,View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// import swal from 'sweetalert';
import AwesomeAlert from 'react-native-awesome-alerts';
// import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  const [showAlert, setShowAlert] = useState(false);     
  function showAlert1(){setShowAlert(true)}
  function hideAlert1 () {setShowAlert(false)}  
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {'About React'.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          AboutReact
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
 
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
          <View style={stylesSidebar.container}>
          <TouchableOpacity onPress={() => {
            showAlert1();
          }}>
            <View style={stylesSidebar.button} >
              <Text style={stylesSidebar.text}>LOG OUT</Text>
            </View>
          </TouchableOpacity>
          <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title=""
          message=""
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="NO"
          confirmText="YES"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            hideAlert1();
          }}
          onConfirmPressed={() => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
            hideAlert1();
          }}
        />
          </View>
          
          }
        />
      </DrawerContentScrollView>
    </View>
  );
};
 
export default CustomSidebarMenu;
 
const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});
