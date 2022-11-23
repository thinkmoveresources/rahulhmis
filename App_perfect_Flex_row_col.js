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
    width: 400,
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
  },
  "1col": {
    backgroundColor: "lightblue",
    borderColor: "#fff",
    borderWidth: 1,
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
    
  return  (
    <View style={styles[`${numRows}col`]}>{children}</View>
    
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

export default function App()  {
  return (
    <View style={styles.app}>
      <Row>
        <Col numRows={1}>
          <Text>First column</Text>
        </Col>
        <Col numRows={2}>
          <Text>Second0 column</Text>
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          />
        </Col>
        <Col numRows={3}>
          <Text>Third column</Text>
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          />
        </Col>
        <Col numRows={4}>
          <Text>Fourth column</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>First column</Text>
        </Col>
        <Col numRows={3}>
          <Text>Second Column</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>First column</Text>
        </Col>
        <Col numRows={3}>
          <Text>Second Column</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>First column</Text>
        </Col>
        <Col numRows={2}>
          <Text>Second column</Text>
        </Col>
        <Col numRows={3}>
          <Text>Third column</Text>
        </Col>
        <Col numRows={2}>
          <Text>Fourth column</Text>
        </Col>
      </Row>
    </View>
  );
}