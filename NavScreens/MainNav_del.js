/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React ,{ useEffect, useState } from 'react';
 import { View, Text, Button ,StyleSheet, Alert} from 'react-native';
 import { NavigationContainer, DrawerActions } from '@react-navigation/native';
 import Dashboard from './Dashboard';
 import {createStackNavigator} from '@react-navigation/stack';
 import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';



 import {drawerItemsMain} from './MainNavMenu/drawerItemsMain';
 import CustomDrawerContent from './MainNavMenu/CustomDrawerContent.js';
 import CustomHeader from './MainNavMenu/CustomHeader';
 
 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

 function HomeScreen({props}) {
   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Dashboard />
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
 
 export function MainDrawerNavigation({props}) {
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
 
 const MainNav: () => React$Node = () => {
   return (
    
       <Stack.Navigator
         screenOptions={{
           headerMode: 'screen',
           headerTintColor: '#1b7d8d',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
           header: (props) => {
             return <CustomHeader {...props} />;
           },
         }}>
         <Stack.Screen name="MainDrawer" component={MainDrawerNavigation} />
       </Stack.Navigator>
    
   );
 };
 
 const styles = StyleSheet.create({});
 
 export default MainNav;