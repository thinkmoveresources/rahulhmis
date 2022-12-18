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
  TextInput,
} from "react-native";

import validate from "./Screen/Components/ValidateInputs";
const ExpandableComponent = ({
  item,
  onClickFunction,
  listDataSource,
  isValidForm,
}) => {
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
    const newUpdateMsg = [...CONTENT];
    let arr_len = Object.keys(newUpdateMsg).length;
    for (let arrloop = 0; arrloop < arr_len; arrloop++) {
      // console.log(newUpdateMsg[arrloop]);
      // console.log("___COsole Loop1 ______");
      let arr_sub_len = Object.keys(newUpdateMsg[arrloop].subcategory).length;
      for (let arr_sub_loop = 0; arr_sub_loop < arr_sub_len; arr_sub_loop++) {
        // console.log(newUpdateMsg[arrloop].subcategory[arr_sub_loop]);
        if (newUpdateMsg[arrloop].subcategory[arr_sub_loop].id == item.id) {
          // console.log(newUpdateMsg[arrloop].subcategory[arr_sub_loop].id);
          // console.log("___COsole Loop2 ______");
          let tempmsg = validate(
            newUpdateMsg[arrloop].subcategory[arr_sub_loop].fieldtype,
            txt,newUpdateMsg[arrloop].subcategory[arr_sub_loop].maxLength
          );
          console.log(
            tempmsg.errors + newUpdateMsg[arrloop].subcategory[arr_sub_loop].fieldtype
          );

          // newUpdateMsg[arrloop].subcategory[arr_sub_loop].badMessage =
          //   Object.assign(
          //     newUpdateMsg[arrloop].subcategory[arr_sub_loop].badMessage,
          //     {
          //       badMessage: tempmsg.errors,
          //       // fieldrequiredfilled: "true",
          //     }
          //   );
          //   listDataSource(newUpdateMsg);
          if (tempmsg.errors != "InvalidInput") {
            console.log(newUpdateMsg[arrloop].subcategory[arr_sub_loop]);
            newUpdateMsg[arrloop].subcategory[arr_sub_loop] = Object.assign(
              newUpdateMsg[arrloop].subcategory[arr_sub_loop],
              {
                badMessage: "",
                fieldrequiredfilled: "true",
              }
            );
            isValidForm("true");
            listDataSource(newUpdateMsg);
          } else {
            newUpdateMsg[arrloop].subcategory[arr_sub_loop] = Object.assign(
              newUpdateMsg[arrloop].subcategory[arr_sub_loop],
              {
                badMessage:
                  tempmsg.errors +
                  " For " +
                  newUpdateMsg[arrloop].subcategory[arr_sub_loop].fieldtype,
                fieldrequiredfilled: "false",
              }
            );
            isValidForm("false");
            listDataSource(newUpdateMsg);
          }
          return;
        }
      }
    }
    console.log(newUpdateMsg);
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
            // onPress={() =>
            //   alert(
            //     "Id: " +
            //       item.id +
            //       " val: " +
            //       item.val +
            //       " fieldname: " +
            //       item.fieldname
            //   )
            // }
          >
            <View>
              {/* Name */}
              {item.field == "TEXT_INPUT" ? (
                item.fieldrequired == "true" ? (
                  <View>
                    <TextInput
                      style={styles.txt_mandetory}
                      placeholder={item.placeholder}
                      onChangeText={(txt) => changeText(txt, item)}
                      defaultValue={inputText}
                      editable={true}
                      required={true}
                      maxLength={10}
                    />
                    {/* <Text>{validate(item.data.fieldName, 'rahul')}</Text> */}
                    <Text style={{ color: "red" }}>{item.badMessage}</Text>
                  </View>
                ) : (
                  <View>
                    <TextInput
                      style={styles.txt_not_mandetory}
                      placeholder={item.placeholder}
                      onChangeText={(txt) => changeText(txt, item)}
                      defaultValue={inputText}
                      editable={true}
                    />
                    {/* <Text>{validate(item.data.fieldName, 'rahul')}</Text> */}
                    <Text style={{ color: "red" }}>{item.badMessage}</Text>
                  </View>
                )
              ) : null}
            </View>
            {/* <Text style={styles.text}>
              {key}. {item.val}
              {key}. {item.fieldname}
            </Text> */}
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
  const [isValidForm, setIsValidForm] = useState("false");

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
          <Text style={styles.titleText}>Patient Registration</Text>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize:25,
                color:"red"
              }}
            >
              {multiSelect
                ? "Enable Single \n Expand"
                : "Enalble Multiple \n Expand"}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {isValidForm}
            </Text>
          </TouchableOpacity>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              listDataSource={(listDataSource) =>
                setListDataSource(listDataSource)
              }
              isValidForm={(isValidForm) => setIsValidForm(isValidForm)}
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
  dny_commonView_txt: {
    // width: "20%",
    height: 40,
    // flexDirection: "row",
    // alignSelf: "center",
    borderColor: "red",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#FFEBEE",
    paddingLeft: 20,
    marginTop: 10,
  },
  txt_mandetory: {
    // width: "20%",
    height: 40,
    // flexDirection: "row",
    // alignSelf: "center",
    borderColor: "red",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#FFEBEE",
    paddingLeft: 20,
    marginTop: 10,
  },
  txt_not_mandetory: {
    // width: "20%",
    height: 40,
    // flexDirection: "row",
    // alignSelf: "center",
    borderColor: "green",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#CCFF90",
    paddingLeft: 20,
    marginTop: 10,
  },
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
    category_name: "Personal_info1",
    subcategory: [
      {
        id: 1,
        itemgroup: "Personal_info1",
        val: "Sub Cat 1",
        field: "TEXT_INPUT",
        fieldtype: "email",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter Name",
        maxLength: 50,
        badMessage: "",
      },
      {
        id: 2,
        itemgroup: "Personal_info1",
        val: "Sub Cat 2",
        field: "TEXT_INPUT",
        fieldtype: "numeric",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_2 ",
        placeholder: "numeric",
        maxLength: 5,
        badMessage: "",
      },
      {
        id: 9,
        itemgroup: "Personal_info1",
        val: "Sub Cat 9",
        field: "TEXT_INPUT",
        fieldtype: "NoSpace",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "NoSpace",
        maxLength: 50,
        badMessage: "",
      },
    ],
  },
  {
    isExpanded: false,
    category_name: "Personal_info2",
    subcategory: [
      {
        id: 3,
        itemgroup: "Personal_info2",
        val: "Sub Cat 3",
        field: "TEXT_INPUT",
        fieldtype: "OnlyCharacter",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 2_1",
        placeholder: "OnlyCharacter",
        maxLength: 50,
        badMessage: "",
      },
      {
        id: 4,
        itemgroup: "Personal_info2",
        val: "Sub Cat 4",
        field: "TEXT_INPUT",
        fieldtype: "AlphaNum",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 2_2",
        placeholder: "Alpha Num",
        maxLength: 50,
        badMessage: "",
      },
      {
        id: 10,
        itemgroup: "Personal_info2",
        val: "Sub Cat 4",
        field: "TEXT_INPUT",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 2_2",
        placeholder: "Enter other details",
        maxLength: 50,
        badMessage: "",
      },
    ],
  },
  {
    isExpanded: false,
    category_name: "Personal_info3",
    subcategory: [
      {
        id: 5,
        itemgroup: "Personal_info3",
        val: "Sub Cat 3",
        field: "TEXT_INPUT",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 2_1",
        placeholder: "Enter Name",
        maxLength: 50,
        badMessage: "",
      },
      {
        id: 6,
        itemgroup: "Personal_info3",
        val: "Sub Cat 4",
        field: "TEXT_INPUT",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 2_2",
        placeholder: "Enter Name",
        maxLength: 50,
        badMessage: "",
      },
    ],
  },
  {
    isExpanded: false,
    category_name: "Personal_info4",
    subcategory: [
      {
        id: 7,
        itemgroup: "Personal_info4",
        val: "Sub Cat 3",
        field: "TEXT_INPUT",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 2_1",
        placeholder: "Enter Name",
        maxLength: 50,
        badMessage: "",
      },
      {
        id: 8,
        itemgroup: "Personal_info4",
        val: "Sub Cat 4",
        field: "TEXT_INPUT",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 2_2",
        placeholder: "Enter Name",
        maxLength: 50,
        badMessage: "",
      },
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
