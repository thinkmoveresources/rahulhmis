import React, { useState, useContext, useEffect, withState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import "react-native-gesture-handler";
import LoadingScreen from "../NavScreens/LoadingScreen";
import { LoadingIndicator } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import { AuthStack } from "./AuthStack";
// import { AppStack } from "./AppStack";
import WelcomeScreen from "../NavScreens/WelcomeScreen";
import SignUp from "../NavScreens/SignUp";
import SignIn from "../NavScreens/SignIn";
import { NativeBaseProvider } from "native-base";
// import MainMenuNavigation from './MainMenuNavigation';
import NavMenu from "../NavScreens/NavMenu";
import { Image } from "react-native";
import { AuthenticatedUserContext } from "../providers";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      // source={require("./assets/favicon.png")}
    />
  );
}
export default function RootNavigator({ navigation }) {
  // export const RootNavigator = ({ navigation }) => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [errormsg, setErrormsg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function sendGetProfile() {
      const usertoken = await AsyncStorage.getItem("usertoken");
      console.log(usertoken);
      if (usertoken !== null) {
        try {
          axios
            .get("https://www.thinkmoveresources.com/Users/profile", {
              headers: {
                // Accept: "application/json",
                // Template literals. String in a string, you can also do 'Bearer ' + getToken
                Authorization: `Bearer ${usertoken}`,
              },
            })
            .then((res) => {
              const details = res.data[0];
              console.log("XXXXXXXXXdetailsXXXXXXXXX");
              console.log(details);
              console.log(details.user_id);
              let tmpuser1 = details.user_id;

              // setErrormsg(details.user_id);
              setUser(details.user_id);
              console.log(user);
              setIsLoading(false);
            });
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }
      } else {
        setIsLoading(false);
      }
    }
    sendGetProfile();
  }, [user]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    
        <Stack.Navigator>
          {user ? (
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
          ) : (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
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
              <Stack.Screen
                name="RootNavigator"
                component={RootNavigator}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      
  );
}
