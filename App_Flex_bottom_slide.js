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
import { styles } from "./Style";



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
    // top View
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
      {/* View Included Swithes */}
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        {/* Switch1 */}
        <Text
          style={{
            width: 290,

            backgroundColor: "#ff9999",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 15,
            textAlign: "left",
          }}
        >
          Personel Info1
          <Switch
            style={{ marginTop: 5, textAlign: "right" }}
            onValueChange={toggleSwitchP_info1}
            value={switchValueP_info1}
          />
        </Text>
        {/* Logic on on/off switch1 */}

        {switchValueP_info1 ? (
          <View
            style={{
              backgroundColor: "#5eee3a",
              width: 290,
              padding: 5,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 15,
              textAlign: "left",
              margin: "2%",
              flex: 1,
            }}
          >
            <TextInput placeholder="hhhhh"></TextInput>
          </View>
        ) : (
          <Text>"Not Entered"</Text>
        )}

        {/* Switch2 */}
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

        {/* Logic on on/off switch2 */}
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
          <Text>"Not Entered"</Text>
        )}

        {/* Switch2 */}
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

        {/* Logic on on/off switch2 */}
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
          <Text>"Not Entered"</Text>
        )}
      </View>
      {/* End View encluded Switches */}
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Completed");
          }}
        >
          <Image
            source={require("./NavScreens/Images/completed.png")}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pending");
          }}
        >
          <Image
            source={require("./NavScreens/Images/pending.png")}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CallAmb");
          }}
        >
          <Image
            source={require("./NavScreens/Images/ambulance.png")}
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
