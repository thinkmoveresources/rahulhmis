import eact, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from "react-native-elements";
import SingleDatePage from "./Screen/Components/SingleDatePage";
import {
  DatePickerModal,
  DatePickerModalContent,
  TimePickerModal,
  DatePickerInput,
  // @ts-ignore TODO: try to fix expo to work with local library
} from "react-native-paper-dates";
function App() {
  const [temp_date, setTemp_date] = useState();
  return (
    <View style={styles.element_container}>
      <SingleDatePage temp_date={(temp_date) => setTemp_date(temp_date)} />
      <TextInput
        style={styles.text}
        autoCorrect={false}
        value={temp_date}
        placeholder="Select Registration Date"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    // lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1rem",
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
});

export default App;
