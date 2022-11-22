/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import {StyleSheet, View, Text} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import {createDrawerNavigator} from '@react-navigation/drawer';
 
 import {drawerItemsMain} from './MainNavMenu/drawerItemsMain';
 import CustomDrawerContent from './MainNavMenu/CustomDrawerContent.js';
 import CustomHeader from './MainNavMenu/CustomHeader'; 
//  import SplashScreen from './Screen/SplashScreen';
// import LoginScreen from './Screen/LoginScreen';
// import RegisterScreen from './Screen/RegisterScreen';
 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();
 
 function HomeScreen() {
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Home Screen</Text>
     </View>
   );
 }
 
 function Settings1Screen() {
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Settings 1 Screen</Text>
     </View>
   );
 }
 
 function Settings2Screen() {
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Settings 2 Screen</Text>
     </View>
   );
 }
 
 function MainDrawerNavigation() {
   return (
     <Drawer.Navigator
       initialRouteName="Home"
       drawerContent={(props) => (
         <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
       )}>
       <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="Settings1" component={Settings1Screen} />
       <Drawer.Screen name="Settings2" component={Settings2Screen} />
     </Drawer.Navigator>
   );
 }
 //from another project
//  const Auth = () => {
//     // Stack Navigator for Login and Sign up Screen
//     return (
//       <Stack.Navigator initialRouteName="LoginScreen">
//         <Stack.Screen
//           name="LoginScreen"
//           component={LoginScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="RegisterScreen"
//           component={RegisterScreen}
//           options={{
//             title: 'Register', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#307ecc', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
//     );
//   };
 const MainMenuNavigation: () => React$Node = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator
         screenOptions={{
           headerMode: 'screen',
           headerTintColor: '#404554',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
           header: (props) => {
             return <CustomHeader {...props} />;
           },
         }}>
         <Stack.Screen name="MainDrawer" component={MainDrawerNavigation} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({});
 
 export default MainMenuNavigation;