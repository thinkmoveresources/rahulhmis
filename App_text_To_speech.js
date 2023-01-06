import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import * as Speech from "expo-speech";

export default class App extends React.Component {
  speak = () => {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  };

  constructor() {
    super();
    this.state = {
      text: "",
      soundText: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Press to hear some words" onPress={this.speak} />
        <TextInput
          style={styles.inputBox}
          onPress={() => {
            var thereisnoword = this.state.text
              ? (this.setState({ thereisnoword }),
                this.setState({ thereisnoword }))
              : Alert.alert("Please enter a word");
          }}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.goButton}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
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
