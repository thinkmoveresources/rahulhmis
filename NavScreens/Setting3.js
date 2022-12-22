// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState } from "react";
import { NativeModules } from "react-native";
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
  Button,
} from "react-native";
import "intl";
import "intl/locale-data/jsonp/en";
// Dropdown dependancies
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import SingleDatePage from "../Screen/Components/SingleDatePage";
// *************
import validate from "../Screen/Components/ValidateInputs";
// Check Box
import { CheckBox } from "react-native-elements";
// ****************
// Radio Button
import RadioGroup from "react-native-radio-buttons-group";
// Date Time
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  en,
  nl,
  de,
  pl,
  pt,
  ar,
  ko,
  fr,
  it,
  enGB,
  registerTranslation,
} from "react-native-paper-dates";
registerTranslation("en", en);
registerTranslation("nl", nl);
registerTranslation("pl", pl);
registerTranslation("pt", pt);
registerTranslation("de", de);
registerTranslation("en-GB", enGB);
import {
  DatePickerModal,
  DatePickerModalContent,
  TimePickerModal,
  DatePickerInput,
  // @ts-ignore TODO: try to fix expo to work with local library
} from "react-native-paper-dates";
import { useTheme } from "react-native-paper";
import { getLocales, getCalendars } from "expo-localization";

const ExpandableComponent = ({
  item,
  onClickFunction,
  listDataSource,
  isValidForm,
  Value1,
  isFocus,
}) => {
  // const locale = NativeModules.I18nManager;
  // console.log(locale)
  const locale = "en";
  // console.log(item);
  //   Array Loop for Radio Button
  //   console.log("Start")
  //   let arr_item_len = Object.keys(item.subcategory).length;
  //     for (let arrloop = 0; arrloop < arr_item_len; arrloop++) {
  //       // console.log(newUpdateMsg[arrloop]);}
  //       if (item.subcategory[arrloop].temp_date){
  //         console.log("________")
  //         console.log(item.subcategory[arrloop].temp_date);
  //       }
  //     }
  //   console.log("End");
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [inputText, setInputText] = useState();
  const [checkvalue, setCheckalue] = useState([]);
  // const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  // Handle Chekboxes
  const handleOnChange = (event, item) => {
    console.log(item);
    item.checked = !item.checked;
    setCheckalue((s) => {
      const newArr = s.slice();
      newArr[item.checked] = event;
      return newArr;
    });
  };
  // *******************
  // Handle radio Buttons
  // function onPressRadioButton(radioButtonsArray) {
  //   setRadioButtons(radioButtonsArray);
  // }
  // ********
  const handleOnChangeRadio = (event, item) => {
    console.log(item);
    console.log(event);
    item.checked = !item.checked;
    setCheckalue((s) => {
      const newArr = s.slice();
      newArr[item.checked] = event;
      return newArr;
    });
  };
  //   **************Handle date
  const [inputDate, setInputDate] = useState();
  const handleOnChangeDate = (inputDate, event, item) => {
    item.temp_date = inputDate;
    setCheckalue((s) => {
      const newArr = s.slice();
      newArr[item.temp_date] = event;
      return newArr;
    });
  };
  function Row({ children }: { children: any }) {
    return <View style={styles.row}>{children}</View>;
  }

  function Label({ children }: { children: string }) {
    const theme = useTheme();
    return (
      <Text style={[styles.label, { ...theme.fonts.medium }]}>{children}</Text>
    );
  }
  // *************************
  //   **************Handle time
  const [visible, setVisible] = useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );
  // **************************************
  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);
  const changeText = (txt, item) => {
    let tempmsg = "";
    // console.log(txt.label)
    // console.log(item);
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
          //   Check for txt if dropdown
          if (
            newUpdateMsg[arrloop].subcategory[arr_sub_loop].field ==
            "TEXT_Dropdown"
          ) {
            tempmsg = validate(
              newUpdateMsg[arrloop].subcategory[arr_sub_loop].fieldtype,
              txt.label,
              newUpdateMsg[arrloop].subcategory[arr_sub_loop].maxLength
            );
            //   alert("reached")
          } else {
            tempmsg = validate(
              newUpdateMsg[arrloop].subcategory[arr_sub_loop].fieldtype,
              txt,
              newUpdateMsg[arrloop].subcategory[arr_sub_loop].maxLength
            );
          }
          //   console.log(
          //     tempmsg.errors +
          //       newUpdateMsg[arrloop].subcategory[arr_sub_loop].fieldtype
          //   );

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
            // console.log(newUpdateMsg[arrloop].subcategory[arr_sub_loop]);
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
    // console.log(newUpdateMsg);
    listDataSource(newUpdateMsg);
  };
  //Dropdown Code
  const renderLabel = () => {
    if (Value1 || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  //   ***********
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
          <ScrollView>
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
                {
                  //   Check 1st Input Type
                  item.field == "TEXT_INPUT" ? (
                    // Check if field is required true make it red
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
                      // If Field is not required make it green
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
                  ) : //   Check Another Input Type
                  item.field == "TEXT_Dropdown" ? (
                    // Check if field is required true make it red
                    item.fieldrequired == "true" ? (
                      <View style={styles.drp_container}>
                        {renderLabel()}
                        <Dropdown
                          style={[
                            styles.drp_mandetory,
                            isFocus && { borderColor: "blue" },
                          ]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={data}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? "Select item" : "..."}
                          searchPlaceholder="Search..."
                          value={Value1}
                          onFocus={() => isFocus(true)}
                          onBlur={() => isFocus(false)}
                          onChange={(Value1) => changeText(Value1, item)}
                          // onChange={(item,Value1) => {
                          //   // ******Value(item.value)

                          //   isFocus(false);
                          //   // changeText(Value1,item);
                          // }}
                          renderLeftIcon={() => (
                            <AntDesign
                              style={styles.icon}
                              color={isFocus ? "blue" : "black"}
                              name="Safety"
                              // size={20}
                            />
                          )}
                        />
                        <Text style={{ color: "red" }}>{item.badMessage}</Text>
                      </View>
                    ) : (
                      // If Field is not required make it green
                      <View style={styles.drp_container}>
                        {renderLabel()}
                        <Dropdown
                          style={[
                            styles.drp_not_mandetory,
                            isFocus && { borderColor: "blue" },
                          ]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={data}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? "Select item" : "..."}
                          searchPlaceholder="Search..."
                          value={Value1}
                          onFocus={() => isFocus(true)}
                          onBlur={() => isFocus(false)}
                          onChange={(Value1) => changeText(Value1, item)}
                          // onChange={(item,Value1) => {
                          //   // ******Value(item.value)

                          //   isFocus(false);
                          //   // changeText(Value1,item);
                          // }}
                          renderLeftIcon={() => (
                            <AntDesign
                              style={styles.icon}
                              color={isFocus ? "blue" : "black"}
                              name="Safety"
                              size={20}
                            />
                          )}
                        />
                        <Text style={{ color: "red" }}>{item.badMessage}</Text>
                      </View>
                    )
                  ) : // Chek Box input
                  item.field == "TEXT_Checkbox" ? (
                    // Check if field is required true make it red
                    item.fieldrequired == "true" ? (
                      <View style={styles.drp_container}>
                        <CheckBox
                          title="Click Here"
                          checked={item.checked}
                          // onPress={() => checked(!{ checked })}
                          onPress={(e) => handleOnChange(e, item)}
                          // onPress={() => setChecked(!item.checked)}
                        />

                        <Text style={{ color: "red" }}>{item.badMessage}</Text>
                      </View>
                    ) : (
                      // If Field is not required make it green
                      <View style={styles.drp_container}>
                        <CheckBox
                          title="Click Here"
                          checked={item.checked}
                          // onPress={() => checked(!{ checked })}
                          onPress={(e) => handleOnChange(e, item)}
                          // onPress={() => setChecked(!item.checked)}
                        />

                        <Text style={{ color: "red" }}>{item.badMessage}</Text>
                      </View>
                    )
                  ) : // Radio input
                  item.field == "TEXT_redio" ? (
                    // Check if field is required true make it red
                    item.fieldrequired == "true" ? (
                      <View style={styles.drp_container}>
                        <RadioGroup
                          radioButtons={item.radioButtonsData}
                          // onPress={onPressRadioButton}
                          onPress={(e) => handleOnChangeRadio(e, item)}
                          layout="row"
                        />

                        <Text style={{ color: "red" }}>{item.badMessage}</Text>
                      </View>
                    ) : (
                      // If Field is not required make it green
                      <View style={styles.drp_container}>
                        <RadioGroup
                          radioButtons={item.radioButtonsData}
                          // onPress={onPressRadioButton}
                          onPress={(e) => handleOnChangeRadio(e, item)}
                          layout="row"
                        />
                        <Text style={{ color: "red" }}>{item.badMessage}</Text>
                      </View>
                    )
                  ) : // Date input
                  item.field == "TEXT_date" ? (
                    // Check if field is required true make it red
                    item.fieldrequired == "true" ? (
                      <Row>
                        <Label>Input</Label>
                        <DatePickerInput
                          locale={locale}
                          value={item.temp_date}
                          onChange={(e) =>
                            handleOnChangeDate(e, setInputDate, item)
                          }
                          inputMode="start"
                          validRange={{
                            startDate: new Date(2022, 6, 1), // optional (2022, 5, 1) means min date jun 1st
                            endDate: new Date(), // optional
                            //   disabledDates: [new Date()] // optional
                            disabledDates: [new Date(2022, 1, 5)], // optional
                          }}
                          saveLabelDisabled={true}
                          autoComplete={"birthdate-full"}
                        />
                      </Row>
                    ) : (
                      // If Field is not required make it green

                      <Row>
                        <Label>Input</Label>
                        <DatePickerInput
                          locale={locale}
                          value={item.temp_date}
                          onChange={(e) =>
                            handleOnChangeDate(e, setInputDate, item)
                          }
                          inputMode="start"
                          validRange={{
                            startDate: new Date(2022, 6, 1), // optional (2022, 5, 1) means min date jun 1st
                            endDate: new Date(), // optional
                            //   disabledDates: [new Date()] // optional
                            disabledDates: [new Date(2022, 1, 5)], // optional
                          }}
                          saveLabelDisabled={true}
                          autoComplete={"birthdate-full"}
                        />
                      </Row>
                    )
                  ) : // Date Time
                  item.field == "TEXT_time" ? (
                    // Check if field is required true make it red
                    item.fieldrequired == "true" ? (
                      <>
                        <TimePickerModal
                          visible={visible}
                          onDismiss={onDismiss}
                          onConfirm={onConfirm}
                          hours={12} // default: current hours
                          minutes={14} // default: current minutes
                          label="Select time" // optional, default 'Select time'
                          uppercase={false} // optional, default is true
                          cancelLabel="Cancel" // optional, default: 'Cancel'
                          confirmLabel="Ok" // optional, default: 'Ok'
                          animationType="fade" // optional, default is 'none'
                          locale="en" // optional, default is automically detected by your system
                          // keyboardIcon="keyboard-outline" // optional, default is "keyboard-outline"
                          // clockIcon="clock-outline" // optional, default is "clock-outline"
                        />
                        <Button
                          title="Press Me"
                          onPress={() => setVisible(true)}
                        ></Button>
                      </>
                    ) : (
                      // If Field is not required make it green

                      <>
                        <TimePickerModal
                          visible={visible}
                          onDismiss={onDismiss}
                          onConfirm={onConfirm}
                          hours={12} // default: current hours
                          minutes={14} // default: current minutes
                          label="Select time" // optional, default 'Select time'
                          uppercase={false} // optional, default is true
                          cancelLabel="Cancel" // optional, default: 'Cancel'
                          confirmLabel="Ok" // optional, default: 'Ok'
                          animationType="fade" // optional, default is 'none'
                          locale="en" // optional, default is automically detected by your system
                          // keyboardIcon="keyboard-outline" // optional, default is "keyboard-outline"
                          // clockIcon="clock-outline" // optional, default is "clock-outline"
                        />
                        <Button onPress={() => setVisible(true)}>
                          Pick time
                        </Button>
                      </>
                    )
                  ) : //   If not Any input Type
                  null
                }
              </View>

              {/* <Text style={styles.text}>
              {key}. {item.val}
              {key}. {item.fieldname}
            </Text> */}
              <View style={styles.separator} />
            </TouchableOpacity>
          </ScrollView>
        ))}
      </View>
    </View>
  );
};

const Masteform = ({ navigation }) => {
  // Dropdown Variables
  const [Value1, setValue1] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  // **************************************
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const [multiSelect, setMultiSelect] = useState(false);
  const [inputText, setInputText] = useState();
  const [isValidForm, setIsValidForm] = useState("false");
  // ******************************************
  //   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [temp_date, setTemp_date] = useState();

  //   const showDatePicker = () => {
  //     setDatePickerVisibility(true);
  //   };

  //   const hideDatePicker = () => {
  //     setDatePickerVisibility(false);
  //     x;
  //   };

  //   const handleConfirm = (date) => {
  //     console.warn("A date has been picked: ", date);
  //     hideDatePicker();
  //   };
  // ************************************
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
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "green", flexDirection: "row" }}>
        <Text>Patient Registration</Text>
        <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              fontSize: 25,
              color: "red",
            }}
          >
            {multiSelect
              ? "Enable Single \n Expand"
              : "Enalble Multiple \n Expand"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {/* {isValidForm} */}
          {checked}
        </Text>
        <CheckBox
          title="Click Here"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
        />
      </TouchableOpacity>

      {/* <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          /> */}
      {/* Date IMP */}
      <View style={styles.element_container}>
        <SingleDatePage temp_date={(temp_date) => setTemp_date(temp_date)} />
        <TextInput
          style={styles.date_text}
          autoCorrect={false}
          value={temp_date}
          placeholder="Select Registration Date"
        />
      </View>
      {/* Date End */}
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
            isValidForm={(isValidForm) => setIsValidForm(isValidForm)}
            value={(Value1) => setValue1(Value1)}
            isFocus={(isFocus) => setIsFocus(isFocus)}
            item={item}
          />
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Masteform;
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
  //   Dropdowl Styles
  drp_container: {
    backgroundColor: "white",
  },
  drp_mandetory: {
    height: 40,
    borderColor: "red",
    backgroundColor: "#FFEBEE",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 10,
  },
  drp_not_mandetory: {
    height: 40,
    borderColor: "green",
    backgroundColor: "#CCFF90",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 10,
  },
  drp_icon: {
    marginRight: 5,
  },
  drp_label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  drp_placeholderStyle: {
    fontSize: 16,
  },
  drp_selectedTextStyle: {
    fontSize: 16,
  },
  drp_iconStyle: {
    width: 20,
    height: 20,
  },
  drp_inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  date_text: {
    // lineHeight: "1.5em",
    fontSize: 20,
    marginVertical: 20,
    // textAlign: "center",
    height: 36,
    backgroundColor: "aqua",
    textAlign: "center",
  },
  element_container: {
    flexDirection: "row",
    borderBottomWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
  },
  row: { width: 100, paddingTop: 5, paddingBottom: 5, flexDirection: "row" },
  label: { width: 100, fontSize: 16 },
});

//Dummy content to show
//You can also use dynamic data by calling webservice

const CONTENT = [
  {
    isExpanded: false,
    category_name: "Personal_info1",
    subcategory: [
      {
        id: 16,
        itemgroup: "Personal_info1",
        val: "Sub Cat 1",
        field: "TEXT_Checkbox",
        fieldtype: "email",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter Name",
        maxLength: 50,
        checked: true,
        badMessage: "",
      },
      {
        id: 30,
        itemgroup: "Personal_info1",
        val: "Sub Cat 1",
        field: "TEXT_redio",
        fieldtype: "email",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter Name",
        maxLength: 50,
        checked: true,
        badMessage: "",
        radioButtonsData: [
          {
            id: "1", // acts as primary key, should be unique and non-empty string
            label: "Option 4",
            value: "option1",
          },
          {
            id: "2",
            label: "Option 4",
            value: "option2",
          },
        ],
      },
      {
        id: 31,
        itemgroup: "Personal_info1",
        val: "Sub Cat 1",
        field: "TEXT_redio",
        fieldtype: "email",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter Name",
        maxLength: 50,
        checked: true,
        badMessage: "",
        radioButtonsData: [
          {
            id: "1", // acts as primary key, should be unique and non-empty string
            label: "Option 6",
            value: "option1",
          },
          {
            id: "2",
            label: "Option 6",
            value: "option2",
          },
        ],
      },
      {
        id: 32,
        itemgroup: "Personal_info1",
        val: "Sub Cat 1",
        field: "TEXT_date",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter Reg Date",
        temp_date: new Date(),
        maxLength: 50,
        checked: true,
        badMessage: "",
        inputDate: "",
      },
      {
        id: 33,
        itemgroup: "Personal_info1",
        val: "Sub Cat 1",
        field: "TEXT_date",
        fieldtype: "email",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter DOB",
        temp_date: new Date(),
        maxLength: 50,
        checked: true,
        badMessage: "",
        inputDate: "",
      },
      {
        id: 34,
        itemgroup: "Personal_info1",
        val: "Sub Cat 1",
        field: "TEXT_time",
        fieldtype: "email",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter DOB",
        temp_date: new Date(),
        maxLength: 50,
        checked: true,
        badMessage: "",
        inputDate: "",
      },
      {
        id: 20,
        itemgroup: "Personal_info1",
        val: "Sub Cat 1",
        field: "TEXT_Checkbox",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter Name",
        maxLength: 50,
        checked: true,
        badMessage: "",
      },
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
      {
        id: 11,
        itemgroup: "Personal_info1",
        val: "Sub Cat 9",
        field: "TEXT_Dropdown",
        fieldtype: "AlphaNum",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Drop_down",
        maxLength: 50,
        badMessage: "",
      },
      {
        radioButtonsData: [
          {
            id: "1", // acts as primary key, should be unique and non-empty string
            label: "Option 1",
            value: "option1",
          },
          {
            id: "2",
            label: "Option 2",
            value: "option2",
          },
        ],
      },
    ],
  },
  {
    isExpanded: false,
    category_name: "Personal_info5",
    subcategory: [
      {
        id: 21,
        itemgroup: "Personal_info5",
        val: "Sub Cat 1",
        field: "TEXT_Checkbox",
        fieldtype: "email",
        fieldrequired: "false",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Enter Name",
        maxLength: 50,
        checked: true,
        badMessage: "",
      },
      {
        id: 12,
        itemgroup: "Personal_info5",
        val: "Sub Cat 9",
        field: "TEXT_Dropdown",
        fieldtype: "AlphaNum",
        fieldrequired: "true",
        fieldrequiredfilled: "false",
        fieldname: "Surname 1_1 ",
        placeholder: "Drop_down",
        maxLength: 50,
        badMessage: "",
      },
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
const data = [
  { label: "Item1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
const radioButtonsData = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "Option 1",
    value: "option1",
  },
  {
    id: "2",
    label: "Option 2",
    value: "option2",
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
