import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import SignIn from '../NavScreens/SignIn';
import SignUp from "../NavScreens/SignUp";
import NavMenu from "../NavScreens/NavMenu";
import {WelcomeScreen } from "../NavScreens/WelcomeScreen";


const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    // <NavigationContainer>
      // <Stack.Navigator
      //   initialRouteName="SignIn"
      //   screenOptions={{ headerShown: false }}
      // >
      <>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="NavMenu" component={NavMenu} />
        
        {/* <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} /> */}
      {/* </Stack.Navigator> */}
    {/* // </NavigationContainer> */}
    </>
  );
};
