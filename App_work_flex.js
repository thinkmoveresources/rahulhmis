import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default class App extends Component {
  state = {
    placeName: "",
    places: [],
  };

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val,
    });
  };

  placeSubmitHandler = () => {
    alert("button clicked");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder="An awesome place"
            onChangeText={this.placeNameChangedHandler}
            style={styles.textStyle}
          />
          <Button title="Button" onPress={this.placeSubmitHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#3bea2e",
    justifyContent: "flex-start",
  },
  innerContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textStyle: {
    width: "70%",
    backgroundColor: "gray",
  },
  buttonStyle: {
    width: "30%",
  },
});
