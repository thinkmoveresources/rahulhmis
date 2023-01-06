import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Text,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
const appId = "2214722a-452c-4dd0-b6b6-dd0401d0da70";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
 const startListening = () =>
   SpeechRecognition.startListening({ continuous: true, language: "gu-IN" });
  if (!browserSupportsSpeechRecognition) {
    return <Text>Browser doesn't support speech recognition.</Text>;
  }

  return (
    // <View style={styles.container}>
    //   <Text>Microphone: {listening ? "on" : "off"}</Text>
    //   <Button onClick={SpeechRecognition.startListening}>Start</Button>
    //   <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
    //   <Button onClick={resetTranscript}>Reset</Button>
    //   <Text>{transcript}</Text>
    // </View>
    <View style={styles.container}>
      <Text>Microphone: {listening ? "on" : "off"}</Text>
      <Text>{transcript}</Text>
      {/* <TouchableOpacity
        onPress={SpeechRecognition.startListening}
        style={styles.goButton}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={SpeechRecognition.stopListening}
        style={styles.goButton}
      >
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={resetTranscript} style={styles.goButton}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onTouchStart={startListening}
        // onTouchStart={SpeechRecognition.startListening({ language: "zh-CN" })}
        onMouseDown={startListening}
        // onMouseDown={SpeechRecognition.startListening({ language: "zh-CN" })}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
        style={styles.goButton}
      >
        <Text style={styles.buttonText}>Hold and Speek </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  inputBox: {
    marginTop: 200,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    outline: "none",
  },
  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
});
export default App;
