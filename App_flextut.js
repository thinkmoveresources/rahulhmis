import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.square2} />
        <View style={styles.square3} />
        {/* <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CA1B4",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height:"50%",
    width:"50%"
  },
  square: {
    backgroundColor: "#7cb48f",
    width: 400,
    height: 30,
    margin: 0,
  },
  square2: {
    backgroundColor: "#FAAA",
    width: 200,
    height: 30,
    margin: 4,
  },
  square3: {
    backgroundColor: "#FFC107",
    width: 100,
    height: 100,
    margin: 4,
  },
});
