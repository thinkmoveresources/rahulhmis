import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Text,
  SafeAreaView,
  TextInput,
} from "react-native";
import Card from "./Screen/Components/Card";
import Icon from "react-native-vector-icons/Ionicons";
const ExpandableView = ({ expanded = false }) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 300 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [expanded, height]);

  return (
    <Animated.View
      style={{
        height,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: "blue",
        borderWidth: 1,
        borderColor: "red",
      }}
    >
      <Animated.Text // returns Animated.Text
        style={{
          fontSize: 20,
          marginTop: 10,
          color: "green",
        }}
      >
        Animated Text!
      </Animated.Text>
    </Animated.View>
  );
};

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.app}>
        {/* <TouchableOpacity
            onPress={() => {
              setIsExpanded(!isExpanded);
            }}
            style={styles.toggle}
            
          >
            
            <Text style={styles.toggleText}>Expand</Text>
          </TouchableOpacity> */}

        <View>
          <TouchableOpacity
            style={styles.criteriaRow}
            onPress={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <Icon
              style={styles.icon}
              name="information-circle-sharp"
              color="red"
              size={50}
            />
            <Text style={styles.toggleText}>Expand</Text>
          </TouchableOpacity>
        </View>

        <ExpandableView expanded={isExpanded} />
      </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  app: {},
  toggle: {
    alignItems: "center",

    height: 40,
    borderRadius: 40,
    backgroundColor: "red",
  },
  toggleText: {
    color: "#fff",
    fontSize: 30,
  },
  container: {
    flex: 1,
    margin: 16,
    alignItems: "center", // Centered horizontally
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  card: {
    height: 200,
    width: "100%",
    backgroundColor: "#f18484",
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
  },
  criteriaRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    // borderRadius: 40,
    backgroundColor: "#2cb3ed",
  },
});

export default App;
