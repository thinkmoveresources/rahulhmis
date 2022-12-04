// React Native Show Message for empty FlatList
// https://aboutreact.com/react-native-show-message-for-empty-flatlist/

// import React in our code
import React, { useState } from "react";
import validate from "./Screen/Components/ValidateInputs";
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
import {styles} from "./Style"
const App = () => {
  const [isValidForm, setIsValidForm]=useState(false);
  const [dataSource, setDataSource] = useState([
    {
      id: "1",
      title: "United States",
      fieldtype: "email",
      fieldrequired: "true",
      fieldrequiredfilled: "false",
      errormsg: "",
    },
    {
      id: "2",
      title: "United Kingdom",
      fieldtype: "email",
      fieldrequired: "false",
      fieldrequiredfilled: "false",
      errormsg: "",
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
        <Text
          style={{
            color:
              item.fieldrequired == "true" &&
              item.fieldrequiredfilled == "false"
                ? "red"
                : "green",
          }}
          onPress={() => getItem(item)}
        >
          {item.id}
          {"."}
          {item.title.toUpperCase()}
          {"."}
          {item.fieldrequired}
          {"."}
          {item.fieldrequiredfilled}
        </Text>

        <TextInput onChangeText={(txt) => changeText(txt, item)} />
        <Text style={{ color: "red" }}>{item.errormsg}</Text>
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
    // console.log("Its array ");
    // console.log(newUpdateMsg[0].fieldtype);
    const index = newUpdateMsg.findIndex(
      (newUpdateMsg) => newUpdateMsg.id === item.id
    );
    // Call Input Validation
    let tempmsg = validate(newUpdateMsg, index,txt);    
      if (tempmsg.errors != "InvalidInput"){
      // console.log("Index of msg" + (index + 1));
    newUpdateMsg[index] = Object.assign(newUpdateMsg[index], {
      errormsg: "",
      fieldrequiredfilled:"true",
    });
    setIsValidForm(true);
    setDataSource(newUpdateMsg);
  }else{ newUpdateMsg[index] = Object.assign(newUpdateMsg[index], {
    errormsg: tempmsg.errors,  
    fieldrequiredfilled:"false",  
  });
  setIsValidForm(false);
  setDataSource(newUpdateMsg);
}
   
    // console.log(txt);
    // console.log(item);
    
    // console.log("emailfrom new Update array: " + newUpdateMsg.fieldtype);
    //let tempmsg = validate(newUpdateMsg,index); //*** */
    // console.log("Msg from Inputs Validate: "+tempmsg.email);
  };
  const addElement = () => {
    var newArray = [...dataSource, { id: "2", title: "Object 3" }];
    setDataSource(newArray);
  };
  const submitForm = () => {
    if(isValidForm){
      alert('Submitted')
    }else{
      alert('Enter Valid Inputs for all fields!!!!')
    }
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
      <Button title="Submit" onPress={submitForm} />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   emptyListStyle: {
//     padding: 10,
//     fontSize: 18,
//     textAlign: "center",
//   },
// });

export default App;
