import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import NavMenu from "../NavScreens/NavMenu";;

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="NavMenu" component={NavMenu} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
