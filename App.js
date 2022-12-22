import React,{ useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import LoadingScreen from './NavScreens/LoadingScreen';
import WelcomeScreen from './NavScreens/WelcomeScreen';
import SignUp from './NavScreens/SignUp';
import SignIn from './NavScreens/SignIn';
import { NativeBaseProvider } from "native-base";
// import MainMenuNavigation from './MainMenuNavigation';
import NavMenu from './NavScreens/NavMenu';
import { Image } from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/favicon.png')}
    />
  );
}
export default function App() {
      
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Loading"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: true }}
            />
            {/* <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: true }}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: true }}/> */}
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            {/* <Drawer.Screen name='MainMenuNavigation' component={MainMenuNavigation} options={{ headerShown: true }}/> */}
            <Drawer.Screen
              name="NavMenu"
              component={NavMenu}
              options={{
                headerShown: false,
                headerTitle: (props) => <LogoTitle {...props} />,
                headerRight: () => (
                  <Button
                    onPress={() => handlePress()}
                    icon={<Icon name="bell" size={15} color="white" />}
                    iconRight
                    // title="EXIT"
                  />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }