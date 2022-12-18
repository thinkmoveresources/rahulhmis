import * as React from "react";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,  
  View,  
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
const SingleDatePage =({temp_date})=>{
  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onChange = React.useCallback(({ date }) => {
    setVisible(false);
    console.log({ date });
    let conv_date = new Date(date),
      mnth = ("0" + (conv_date.getMonth() + 1)).slice(-2),
      day = ("0" + conv_date.getDate()).slice(-2);      
     temp_date([conv_date.getFullYear(), mnth, day].join("-"));   
    
  }, []);
  const date = new Date();
  return (
    <>
      <TouchableOpacity style={styles.date_element_container}>
        <Icon name="calendar" color="hotpink" size={25} />
        <DatePickerModal
          mode="single"
          visible={visible}
          onDismiss={onDismiss}
          date={date}
          onConfirm={onChange}
          saveLabel="Save" // optional
          label="Select Registration date" // optional
          animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
        />
        <Text style={styles.date_text} onPress={() => setVisible(true)}>
          Select
        </Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({ 
  date_text: {
    // lineHeight: "1.5em",
    fontSize: 20,
    marginVertical: 10,
    // textAlign: "center",
    height: 20,
    backgroundColor: "aqua",
    textAlign: "center",
    marginLeft:10
  },  
  date_element_container: {
    flexDirection: "row",
    borderBottomWidth: 0,
    borderColor: "#000",
    alignItems: "center",
    backgroundColor: "aqua",
  },  
});
export default SingleDatePage;