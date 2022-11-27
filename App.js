import React from "react";
import { StyleSheet, View, TextInput, Button,Text,FlatList } from "react-native";
import {styles} from "./Style"
let rules = [
  {
    field: "TEXT_INPUT",
    data: {
      placeholder: "Enter Name",
      maxLength: 50,
      isRequired: true,
      badMessage: "Please Enter Valid Name",
    },
  },
  {
    field: "TEXT_INPUT",
    data: {
      placeholder: "Enter Name",
      maxLength: 100,
      isRequired: true,
      badMessage: "Please Enter Valid Name",
    },
  },
];
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Dynamic Form</Text>
      <FlatList
        data={rules}
        renderItem={({ item, index }) => {
          return (
        <View style={styles.commonView}>
              {item.field == "TEXT_INPUT" ? (
                <TextInput placeholder={item.data.placeholder} />
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
  

  
}
export default App;
