// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState } from "react";
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  TextInput
} from "react-native";
import validate from "./Screen/Components/ValidateInputs";
const ExpandableComponent = ({ item, onClickFunction,listDataSource }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);
const [inputText, setInputText] = useState();
  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);
  const changeText = (txt, item) => {  
    
// console.log(listDataSource);
  const newUpdateMsg = [...CONTENT]; 
  let tempmsg = validate(
    newUpdateMsg[item.id - 1].subcategory[item.id - 1].fieldtype,
    item.id - 1,
    txt,
  );
  // console.log(tempmsg.errors); 
  // console.log(newUpdateMsg);
// console.log(newUpdateMsg[item.id - 1].subcategory[item.id - 1]);
if (tempmsg.errors == "InvalidInput"){
newUpdateMsg[item.id - 1].subcategory[item.id - 1] = Object.assign(
  newUpdateMsg[item.id - 1].subcategory[item.id - 1],
  {
    badMessage: tempmsg.errors,
    fieldrequiredfilled: "false",
  }
);
}else{
  newUpdateMsg[item.id - 1].subcategory[item.id - 1] = Object.assign(
    newUpdateMsg[item.id - 1].subcategory[item.id - 1],
    {
      badMessage: "",
      fieldrequiredfilled: "true",
    }
  );

}
listDataSource(newUpdateMsg);
};
  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}
      >
        <Text style={styles.headerText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() =>
              alert(
                "Id: " +
                  item.id +
                  " val: " +
                  item.val +
                  " fieldname: " +
                  item.fieldname
              )
            }
          >
            <View>
              {/* Name */}
              {item.field == "TEXT_INPUT" ? (
                <View>
                  <TextInput
                    style={styles.dny_commonView_txt}
                    placeholder={item.placeholder}
                    onChangeText={(txt) => changeText(txt, item)}
                    defaultValue={inputText}
                    editable={true}
                  />
                  {/* <Text>{validate(item.data.fieldName, 'rahul')}</Text> */}
                   <Text style={{ color: "red" }}>{item.badMessage}</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.text}>
              {key}. {item.val}
              {key}. {item.fieldname}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const App = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);
  const [inputText, setInputText] = useState();
  
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if (multiSelect) {
      // If multiple select is enabled
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    }
    setListDataSource(array);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text style={styles.titleText}>Expandable List View</Text>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {multiSelect
                ? "Enable Single \n Expand"
                : "Enalble Multiple \n Expand"}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              listDataSource={(listDataSource) =>
                setListDataSource(listDataSource)
              }
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
});

//Dummy content to show
//You can also use dynamic data by calling webservice

const CONTENT = [
  {
    isExpanded: false,
    category_name: "Personal_info",
    subcategory: [
      {
        id: 1,
        val: "Sub Cat 1",
        field: "TEXT_INPUT",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",        
        fieldname: "Surname",
        placeholder: "Enter Name",
        maxLength: 50,        
        badMessage: "",
      },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 1",
    mainid: "Item 1",
    subcategory: [
      { id: 2, val: "Sub Cat 1" },
      { id: 3, val: "Sub Cat 2" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 2",
    subcategory: [
      { id: 4, val: "Sub Cat 1" },
      { id: 5, val: "Sub Cat 2" },
    ],
  },
  {
    isExpanded: false,
    category_name: "Item 3",
    subcategory: [
      { id: 7, val: "Sub Cat 1" },
      { id: 9, val: "Sub Cat 2" },
    ],
  },
];
// const CONTENT = [
//   {
//     isExpanded: false,
//     category_name: "Personal_info",
//     mainid: 1,
//     subcategory: [
//       {
//         subid: 1,
//         val: "Sub Cat 1",
//         field: "TEXT_INPUT",
//         fieldname: "surname",
//         placeholder: "Enter Name",
//         maxLength: 50,
//         isRequired: false,
//         badMessage: "Please Enter Valid Surname",
//       },
//     ],
//   },
//   {
//     isExpanded: false,
//     category_name: "Item 1",
//     mainid: "Item 1",
//     mainid: 2,
//     subcategory: [
//       { subid: 1, val: "Sub Cat 1" },
//       { subid: 2, val: "Sub Cat 2" },
//     ],
//   },
//   {
//     isExpanded: false,
//     category_name: "Item 2",
//     mainid: 3,
//     subcategory: [
//       { subid: 1, val: "Sub Cat 1" },
//       { subid: 2, val: "Sub Cat 2" },
//     ],
//   },
//   {
//     isExpanded: false,
//     category_name: "Item 3",
//     mainid: 4,
//     subcategory: [
//       { subid: 1, val: "Sub Cat 1" },
//       { subid: 2, val: "Sub Cat 2" },
//     ],
//   },
// ];