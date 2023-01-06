import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";
import { AuthenticatedUserProvider } from "./providers";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import LanguageSelectionScreen from "./NavScreens/LanguageSelectionScreen";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <RootNavigator />
            {/* <LanguageSelectionScreen /> */}
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};
export default App;
