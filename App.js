import React, {useEffect,useState, Component } from "react";
import { Platform, StyleSheet, Text,Button, View } from "react-native";
import Voice from '@react-native-voice/voice'

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

type Props = {};
export default function App () {
    let [started,setStarted] = useState(false);
    let [results,setResults] = useState([]);
    useEffect(()=>{
        Voice.onSpeechError=onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        return()=>{
            Voice.destroy().then(Voice.removeAllListeners);
        }
    },[]);
  const startSpeechToText=async()=>{
await Voice.start("en-NZ");
setStarted(true);
  };
  const onSpeechResults = (result)=>{
    setResults(result.value);
  };
  const onSpeechError =(error)=>{
    console.log(error);
  };
  const stopSpeechToText = async() => {
    await Voice.stop();
    setStarted(false);
  };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {!started ? (
          <Button title="start" onPress={startSpeechToText} />
        ) : undefined}
        {started ? (
          <Button title="stop" onPress={stopSpeechToText} />
        ) : undefined}
        {results.map(({ result, index }) => (
          <Text key={index}>{result}</Text>
        ))}
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
