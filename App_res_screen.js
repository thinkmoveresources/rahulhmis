import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

export default class App extends React.Component {
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }
  render() {
    const styles = StyleSheet.create({
      maincontainer: {
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
      },

      responsiveBox: {
        flex: 1,
        backgroundColor: "green",

        width: wp("90%"),

        borderWidth: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
      },
      largeflx: {
        backgroundColor: "blue",
        flex: 3,
        color: "red",
        width: wp("80%"),

        justifyContent: "space-around",
      },
      smallflx: {
        backgroundColor: "orange",
        flex: 1,
        color: "red",
        width: wp("10%"),

        justifyContent: "space-around",
      },
    });

    return (
      <View style={styles.maincontainer}>
        <View style={styles.responsiveBox}>
          <Text style={styles.largeflx}>
            Test it by running this example repo in phones/ emulators with
            screens of various dimensions and pixel per inch (ppi).
          </Text>
          <Text style={styles.smallflx}>
            This box is always of 84.5% width and 17% height.
          </Text>
        </View>
      </View>
    );
  }
}
