import React, { useEffect, useState }  from 'react';
import { View, Text, Button ,StyleSheet, Alert} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../NavScreens/Dashboard';
import Setting1 from '../NavScreens/Setting1';
import Registration1 from "../NavScreens/Setting3";
import Registration from "../NavScreens/Registration";
import CustomDrawerContent from '../MainNavMenu/CustomDrawerContent.js';
import {drawerItemsMain} from '../MainNavMenu/drawerItemsMain';
import CustomHeader from '../MainNavMenu/CustomHeader';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// import Welcome from '../screens/Welcome';
import { Platform } from 'react-native';
const Stack = createStackNavigator();
//  const Drawer = createDrawerNavigator();
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
      <Setting1 />
    </View>
  );
}

function Settings2Screen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings 2 Screen</Text>
    </View>
  );
}
function Settings3Screen() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flexWrap: "wrap" }}>
        <Registration1 />
      </View>
      <View style={{ flexWrap: "wrap" }}>
        <Setting1 />
      </View>
    </View>
  );
}
function Registration_call() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>      
      <Registration />
    </View>
  );
}
export function MainDrawerNavigation({props}) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings1" component={Settings1Screen} />
      <Drawer.Screen name="Settings2" component={Settings2Screen} />
      <Drawer.Screen name="Settings3" component={Settings3Screen} />
      <Drawer.Screen name="Registration" component={Registration_call} />
      {/* <Drawer.Screen name="Userlist" component={UserScreen} />
      <Drawer.Screen name="UserDetails" component={UserDetailScreen} />
      <Drawer.Screen name="AddUser" component={AddUserScreen} />
      <Drawer.Screen name="AddCenter" component={AddCenterScreen} />
      <Drawer.Screen name="RegisterUser" component={RegistrationScreen} />
      <Drawer.Screen name="GetImage" component={UploadImage} />
      <Drawer.Screen name="Workfunction" component={Workingfunction} />
      <Drawer.Screen name="Getdata" component={Getsqldata} /> */}
    </Drawer.Navigator>
  );
}

const NavMenu: () => React$Node = () => {
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

export default NavMenu;