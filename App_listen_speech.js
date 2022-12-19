import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const speak = () => {
    const thingToSay = "1";
    Speech.speak(thingToSay);
  };

  return (
    <View>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}
