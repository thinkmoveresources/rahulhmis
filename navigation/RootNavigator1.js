import React, { useState, useContext, useEffect,withState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { AuthenticatedUserContext } from "../providers";
import { LoadingIndicator } from "../components";
import SignIn from "../NavScreens/SignIn";
import NavMenu from "../NavScreens/NavMenu";
// import { auth } from "../config";
import { NativeBaseProvider } from "native-base";
// import WelcomeScreen from "../NavScreens/WelcomeScreen";
// import SignUp from "../NavScreens/SignUp";
// import SignIn from "../NavScreens/SignIn";
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
    <NativeBaseProvider>
      {/* <NavigationContainer> */}
        {user ? <AppStack /> : <AuthStack />}
      {/* </NavigationContainer> */}
    </NativeBaseProvider>
  );
};
