// Example of Localization in React Native Multi Language App
// https://aboutreact.com/localization-in-react-native/

import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { Localization } from "expo-localization";
import StringsOfLanguages from "./StringsOfLanguages";
import { I18n } from "i18n-js";

const LanguageSelectionScreen = ({ navigation }) => {
  const lang = [
    { shortform: "hi", longform: "Hindi" },
    { shortform: "ma", longform: "Marathi" },
    { shortform: "en", longform: "English" },
    { shortform: "fr", longform: "French" },
  ];

  const settext = (value) => {
    const StringsOfLanguages = new I18n(value);
    // StringsOfLanguages.locale = "hi";
    StringsOfLanguages.enableFallback = true;
    console.log(StringsOfLanguages);
    console.log(value);
    // StringsOfLanguages.setLanguage(value);
    navigation.navigate("ContentScreen", { selectedLanguage: value });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          Please Select Preferred Language
        </Text>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/language.png",
          }}
          style={styles.imageStyle}
        />
        <ScrollView style={{ marginTop: 30, width: "80%" }}>
          {lang.map((item, key) => (
            <View style={styles.elementContainer} key={key}>
              <Text
                onPress={() => settext(item.shortform)}
                style={styles.textStyle}
              >
                {item.longform}
              </Text>
              <View style={styles.saparatorStyle} />
            </View>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        >
          Example of Localization in React Native (Multi Language App)
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        >
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  headingStyle: {
    color: "#191919",
    fontSize: 25,
    textAlign: "center",
  },
  imageStyle: {
    width: 64,
    height: 64,
    marginTop: 30,
  },
  elementContainer: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
  },
  textStyle: {
    color: "#191919",
    fontSize: 25,
  },
  saparatorStyle: {
    height: 0.5,
    width: "60%",
    backgroundColor: "#C2C2C2",
    marginTop: 10,
  },
});

export default LanguageSelectionScreen;
