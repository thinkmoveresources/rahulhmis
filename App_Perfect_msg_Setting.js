// React Native Show Message for empty FlatList
// https://aboutreact.com/react-native-show-message-for-empty-flatlist/

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  TextInput,
} from "react-native";

const App = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: "1",
      title: "United States",
    },
    {
      id: "2",
      title: "United Kingdom",
    },
  ]);

  const EmptyListMessage = ({ item }) => {
    return (
      // Flat List Item

      <Text style={styles.emptyListStyle} onPress={() => getItem(item)}>
        No Data Found
      </Text>
    );
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View>
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.id}
          {"."}
          {item.title.toUpperCase()}
        </Text>
        <TextInput onChangeText={(txt) => changeText(txt, item)} />
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item, txt) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title + "Text :" + txt);
  };
  const changeText = (txt, item) => {
    const newUpdateMsg = [...dataSource];
    console.log(newUpdateMsg);
    const index = newUpdateMsg.findIndex(
      (newUpdateMsg) => newUpdateMsg.id === item.id
    );
    console.log("Index of msg" + (index + 1));
    newUpdateMsg[index] = Object.assign(newUpdateMsg[index], {
      title: txt,
    });
    console.log(txt);
    console.log(item);
    setDataSource(newUpdateMsg);
  };
  const addElement = () => {
    var newArray = [...dataSource, { id: "2", title: "Object 3" }];
    setDataSource(newArray);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        //Message to show for the Empty list
        ListEmptyComponent={EmptyListMessage}
      />
      <Button title="Add element" onPress={addElement} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
});

export default App;
