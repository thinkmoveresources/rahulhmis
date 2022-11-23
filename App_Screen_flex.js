import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
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
} from "react-native";

import filter from "lodash.filter";
//   Data Import
import axios from "axios";
// Alert IMport
import AwesomeAlert from "react-native-awesome-alerts";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import {styles} from "./Style";
const API_ENDPOINT = "https://randomuser.me/api/?seed=1&page=1&results=20";

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children }) => <View style={styles.row}>{children}</View>;
export default function App() {
  // Awesome Edit Alerts
  const [showEditAlert, setShowEditAlert] = useState(true);
  function showEditAlert1() {
    setShowEditAlert(true);
  }
  function hideEditAlert() {
    setShowEditAlert(false);
  }
  // Awesome Delete Alerts
  const [showDeleteAlert, setShowDeleteAlert] = useState(true);
  function showDeleteAlert1() {
    setShowDeleteAlert(true);
  }
  function hideDeleteAlert() {
    setShowDeleteAlert(false);
  }
  // Dimention Veriable
  const dimensions = useWindowDimensions();
  const { height, width, scale, fontScale } = useWindowDimensions();
  // Flatlist VAriable
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);
  // Pull API For Flat List
  useEffect(() => {
    setShowEditAlert(false);
    setShowDeleteAlert(false);
    setIsLoading(true);
    axios({
      method: "get",
      url: "https://www.thinkmoveresources.com/mst_user/user_list",
    })
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        setFullData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);
  // Flat list Is Loading
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
  // Flast List Error Value set
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }
  //Flat List Header

  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: "#52b4d3",
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoFocus={true}
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          style={{
            backgroundColor: "#52b4d3",
            paddingHorizontal: 20,
            height: 30,
            borderWidth: 0,
          }}
        />
      </View>
    );
  }
  // Flat List Search Handler
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = (
    { user_id, user_first_name, user_last_name, user_email },
    query
  ) => {
    // const { first, last } = name;
    // const { user_id, user_first_name,user_last_name,user_email } = name;
    if (
      user_id.toString().includes(query) ||
      user_first_name.includes(query) ||
      user_last_name.includes(query) ||
      user_email.includes(query)
    ) {
      return true;
    }

    return false;
  };
  // Main Returns
  return (
    <SafeAreaView style={styles.container}>
      {/* View Flat List in resposive Flex*/}

      <Text style={styles.text}>Favorite Contacts</Text>
      <Row>
        <FlatList
          ListHeaderComponent={renderHeader}
          stickyHeaderIndices={[0]}
          data={data}
          keyExtractor={(item) => item.user_id}
          renderItem={({ item }) => (
            // <View
            //   style={
            //     (styles.listItem,
            //     {
            //       width: dimensions.width / 1.11,
            //       backgroundColor: "powderblue",
            //     })
            //   }
            //   >
            //           <Image
            //           source={{ uri: item.picture.thumbnail }}
            //           style={styles.coverImage}
            //         />

            <View style={styles.app}>
              <Col numRows={1}>
                <Text
                  style={styles.title}
                >{`${item.user_first_name} ${item.user_last_name}`}</Text>
              </Col>
              <Col numRows={1}>
                <Text
                  style={styles.title}
                >{`${item.user_first_name} ${item.user_last_name}`}</Text>
              </Col>
              <Col numRows={4}>
                {/* <View style={styles.containerBtnGrp}> */}

                {/* Icon.Button Component */}
                <Icon.Button
                  name="edit"
                  backgroundColor="#3b973f"
                  onPress={() => {
                    showEditAlert1();
                  }}
                ></Icon.Button>

                {/* Icon.Button Component */}
                <Icon.Button
                  name="remove"
                  backgroundColor="#de0d0d"
                  onPress={() => {
                    showDeleteAlert1();
                  }}
                >
                  {/* Delete */}
                </Icon.Button>
              </Col>

              {/* </View> */}
            </View>
            // </View>
            // View Flat List in resposive Flex End
          )}
        />
      </Row>
      {/* Edit Alert */}
      <AwesomeAlert
        show={showEditAlert}
        showProgress={false}
        title="Edit User?"
        message=""
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText=" Yes   "
        cancelButtonColor="#FF2400"
        confirmButtonColor="#0dce0d"
        onCancelPressed={() => {
          hideEditAlert(false);
        }}
        onConfirmPressed={() => {
          hideEditAlert(false);
        }}
      />
      {/* Delete Alert */}
      <AwesomeAlert
        show={showDeleteAlert}
        showProgress={false}
        title="Delete User?"
        message=""
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText=" Yes   "
        cancelButtonColor="#FF2400"
        confirmButtonColor="#0dce0d"
        onCancelPressed={() => {
          hideDeleteAlert(false);
        }}
        onConfirmPressed={() => {
          hideDeleteAlert(false);
        }}
      />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   btnActionGrp: {
    
//     color: "red",
//     width: wp("5%"),
//     // alignSelf:true,
//     // aspectRatio:1,
//     padding: 6,
//     // marginTop: 2,
//     // marginBottom: 5,
//     // width: 50,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   containerBtnGrp: {
//     backgroundColor: "#120fc7",
//     alignItems: "center", // ignore this - we'll come back to it
//     justifyContent: "center", // ignore this - we'll come back to it
//     flexDirection: "row",
//   },
//   containerAwe: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   btnAwe: {
//     margin: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 7,
//     borderRadius: 5,
//     backgroundColor: "#AEDEF4",
//   },
//   containerBtn: {
//     alignItems: "center",
//   },
//   textBtn: {
//     borderWidth: 1,
//     padding: 25,
//     borderColor: "black",
//     backgroundColor: "red",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     color: "#101010",
//     marginTop: 60,
//     fontWeight: "700",
//   },
//   listItem: {
//     flex: 1,
//     backgroundColor: "#ef2ade",

//     color: "red",
//     width: wp("10%"),
//   },
//   coverImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//   },
//   metaInfo: {
//     flex: 1,
//     backgroundColor: "green",

//     width: wp("90%"),

//     borderWidth: 2,
//     flexDirection: "row",
//     alignItems: "flex-start",
//     justifyContent: "space-around",
//   },
//   title: {
//     fontSize: 18,
//     width: 200,
//     padding: 10,
//   },
//   maincontainer: {
//     flex: 1,
//     backgroundColor: "gray",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
