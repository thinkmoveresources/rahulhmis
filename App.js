import {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  useWindowDimensions,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Alert,
  Switch,
 
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
// Styles
const styles = {
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: "98%",
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
  },
  "1col": {
    backgroundColor: "lightblue",
    borderColor: "#fff",
    borderWidth: 1,
    flexWrap: "wrap",
    flex: 1,
  },
  "2col": {
    backgroundColor: "green",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2,
  },
  "3col": {
    backgroundColor: "orange",
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3,
  },
  "4col": {
    flex: 4,
  },
};

// RN Code
const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

export default function App() {
    const [switchValueP_info1, setSwitchValueP_info1] = useState(false);
    const [switchValueP_info2, setSwitchValueP_info2] = useState(false);
    const toggleSwitchP_info1 = (value) => {
      //To handle switch toggle
      setSwitchValueP_info1(value);
      //State changes according to switch
    };
    const toggleSwitchP_info2 = (value) => {
      //To handle switch toggle
      setSwitchValueP_info2(value);
      //State changes according to switch
    };
  return (
    <View
      style={{
        backgroundColor: "#000",
        height: "100%",
        width: "100%",
        borderColor: "#000000",
        borderWidth: 10,
        borderRadius: 30,
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <Text
          style={{
            textAlign: "center", // <-- the magic
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 0,
            width: 200,
            backgroundColor: "#3ab8ee",
            padding: "1%",
          }}
        >
          Personel Info1
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={toggleSwitchP_info1}
            value={switchValueP_info1}
          />
        </Text>
        <Text>
          {switchValueP_info1 ? (
            <View
              style={{
                backgroundColor: "#5eee3a",
                // width: "300%",
                // height: "300%",
                flex: 1,
              }}
            >
              <TextInput placeholder="hhhhh"></TextInput>
            </View>
          ) : (
            "Switch is OFF"
          )}
        </Text>
        {/*Setting the default value of state*/}
        {/*On change of switch onValueChange will be triggered*/}
        <Text
          style={{
            textAlign: "center", // <-- the magic
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 0,
            width: 200,
            backgroundColor: "#3ab8ee",
            padding: "1%",
          }}
        >
          Personel Info2
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={toggleSwitchP_info2}
            value={switchValueP_info2}
          />
        </Text>
        <Text>
          {switchValueP_info2 ? (
            <View
              style={{
                backgroundColor: "#5eee",
                // width: "50%",
                // height: "800%",
                flex: 1,
              }}
            >
              <TextInput placeholder="hhhhh"></TextInput>
            </View>
          ) : (
            "Switch is OFF"
          )}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#ee3a82",
          flexDirection: "row",

          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#3aeed9",
            height: "50%",
            width: "50%",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#3aee49",
            height: "50%",
            width: "60%",
          }}
        ></View>
      </View>
    </View>
  );
}
