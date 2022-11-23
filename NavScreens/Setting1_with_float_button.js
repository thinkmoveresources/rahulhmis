// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   useWindowDimensions,
// } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
// import { ListItem, SearchBar } from "react-native-elements";

// const DATA = [
//   {
//     id: "1",
//     title: "Data Structures",
//   },
//   {
//     id: "2",
//     title: "STL",
//   },
//   {
//     id: "3",
//     title: "C++",
//   },
//   {
//     id: "4",
//     title: "Java",
//   },
//   {
//     id: "5",
//     title: "Python",
//   },
//   {
//     id: "6",
//     title: "CP",
//   },
//   {
//     id: "7",
//     title: "ReactJs",
//   },
//   {
//     id: "8",
//     title: "NodeJs",
//   },
//   {
//     id: "9",
//     title: "MongoDb",
//   },
//   {
//     id: "10",
//     title: "ExpressJs",
//   },
//   {
//     id: "11",
//     title: "PHP",
//   },
//   {
//     id: "12",
//     title: "MySql",
//   },
// ];

// const Item = ({ title }) => {
//   return (
//     <View style={styles.item}>
//       <Text>{title}</Text>
//     </View>
//   );
// };

// export default function HomeScreen({ navigation }) {
//   navigation = useNavigation();
//   const dimensions = useWindowDimensions();
//   const { height, width, scale, fontScale } = useWindowDimensions();
//   const renderItem = ({ item }) => <Item title={item.title} />;
//   function renderHeader() {
//     return (
//       <View
//         style={{
//           backgroundColor: "#fff",
//           padding: 10,
//           marginVertical: 10,
//           borderRadius: 20,
//         }}
//       >
//         <TextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           clearButtonMode="always"
//           value={query}
//           onChangeText={(queryText) => handleSearch(queryText)}
//           placeholder="Search"
//           style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
//         />
//       </View>
//     );
//   }
//   const handleSearch = (text) => {
//     const formattedQuery = text.toLowerCase();
//     const filteredData = filter(fullData, (user) => {
//       return contains(user, formattedQuery);
//     });
//     setData(filteredData);
//     setQuery(text);
//   };

//   const contains = ({ name, email }, query) => {
//     const { first, last } = name;

//     if (
//       first.includes(query) ||
//       last.includes(query) ||
//       email.includes(query)
//     ) {
//       return true;
//     }

//     return false;
//   };
//   return (
//     <View
//       style={{
//         width: dimensions.width / 1.1,
//         height: dimensions.height,
//         backgroundColor: "powderblue",
//       }}
//     >
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 30,
//     padding: 2,
//   },
//   item: {
//     backgroundColor: "#f5f520",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
// });
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
  ScrollView,
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
import {styles} from "../Style";
const API_ENDPOINT = "https://randomuser.me/api/?seed=1&page=1&results=20";

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children }) => <View style={styles.row}>{children}</View>;
export default function Setting1() {
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
      <View>
        {/* View Flat List in resposive Flex*/}

        <Text>Favorite Contacts</Text>
      </View>
      <ScrollView style={styles.scrollView}>
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
      </ScrollView>
      <TouchableOpacity onPress={() => alert("FAB clicked")} style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
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

