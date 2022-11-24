import { StatusBar } from "expo-status-bar";
import React, { useCallback,useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import _ from "lodash";
//   Data Import
import axios from "axios";
import filter from "lodash.filter";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function Setting1({ navigation }) {
  const isFirstRender = useRef(true);
  const [refresh, setRefresh] = useState(false);
   
  navigation = useNavigation(); 

  // const GetUserList = useCallback(async () => {
  //       try {
  //         const resp = await axios
  //           .get("https://www.thinkmoveresources.com/mst_user/user_list")
  //           .then((response) => {
  //             // const data = response.data;
  //             setPets(response.data);
  //             setFullData(response.data);
  //             setIsLoading(false);
  //           });
  //       } catch (err) {
  //         // Handle Error Here
  //         console.error(err);
  //       }
  // });

  // useEffect(() => {
  //   GetUserList();
  //   return () => console.log("unmount");
    
  // }, [GetUserList]);
  const isFocused=useIsFocused();

let data1 = [];
const innerFunction = useCallback(() => {
  
  try {
          const resp = axios
            .get("https://www.thinkmoveresources.com/mst_user/user_list")
            .then((response) => {
                data1 = response.data;
              
              setPets(response.data);
              // console.log(pets[user_id]);
              setFullData(response.data);
              setIsLoading(false);
            });
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }
},[isFocused]);

useEffect(() => {
  innerFunction();
  // The effect calls innerFunction, hence it should declare it as a dependency
  // Otherwise, if something about innerFunction changes (e.g. the data it uses), the effect would run the outdated version of innerFunction
}, [innerFunction]);

//  const isFirstRef = useRef(true);
  const [pets, setPets] = useState([]);
//     const GetUserList = async () => {
//       console.log({isFirstRef})
//        if (isFirstRef.current) {
//          isFirstRef.current = false;
//          return;
//        }
//          console.log("First Time Run");

//          setIsLoading(true);
//          try {
//            const resp = await axios
//              .get("https://www.thinkmoveresources.com/mst_user/user_list")
//              .then((response) => {
//                // const data = response.data;
//                setPets(response.data);
//                setFullData(response.data);
//                setIsLoading(false);
//              });
//          } catch (err) {
//            // Handle Error Here
//            console.error(err);
//          }
       
//   };


//   // useEffect(() => {
  //   GetUserList();
  // }, []);
  // useEffect(() => {
  //   GetUserList();
  // }, [pets]);
  // useEffect(() => {
  //   console.log(pets);
  // }, [pets]);
  const [columns, setColumns] = useState([
    "user_id",
    "user_first_name",
    "user_last_name",
    "user_email",
    "Age",
  ]);
  const [direction, setDirection] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
 
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  // Flat list Is Loading

  // const [pets, setPets] = useState([
  //   {
  //     Name: "Charlie asdasd adasdasd asdasdasd adasdasd",
  //     Gender: "Male",
  //     Breed: "Dog",
  //     Weight: 12,
  //     Age: 3,
  //   },
  //   {
  //     Name: "Max",
  //     Gender: "Male",
  //     Breed: "Dog",
  //     Weight: 23,
  //     Age: 7,
  //   },
  //   {
  //     Name: "Lucy",
  //     Gender: "Female",
  //     Breed: "Cat",
  //     Weight: 5,
  //     Age: 4,
  //   },
  //   {
  //     Name: "Oscar",
  //     Gender: "Male",
  //     Breed: "Turtle",
  //     Weight: 13,
  //     Age: 23,
  //   },
  //   {
  //     Name: "Daisy",
  //     Gender: "Female",
  //     Breed: "Bird",
  //     Weight: 1.7,
  //     Age: 3,
  //   },
  //   {
  //     Name: "Ruby",
  //     Gender: "Female",
  //     Breed: "Dog",
  //     Weight: 6,
  //     Age: 3,
  //   },
  //   {
  //     Name: "Milo",
  //     Gender: "Male",
  //     Breed: "Dog",
  //     Weight: 11,
  //     Age: 7,
  //   },
  //   {
  //     Name: "Toby",
  //     Gender: "Male",
  //     Breed: "Dog",
  //     Weight: 34,
  //     Age: 19,
  //   },
  //   {
  //     Name: "Lola",
  //     Gender: "Female",
  //     Breed: "Cat",
  //     Weight: 4,
  //     Age: 3,
  //   },
  //   {
  //     Name: "Jack",
  //     Gender: "Male",
  //     Breed: "Turtle",
  //     Weight: 13,
  //     Age: 23,
  //   },
  //   {
  //     Name: "Bailey",
  //     Gender: "Female",
  //     Breed: "Bird",
  //     Weight: 2,
  //     Age: 4,
  //   },
  //   {
  //     Name: "Bella",
  //     Gender: "Female",
  //     Breed: "Dog",
  //     Weight: 6,
  //     Age: 10,
  //   },
  // ]);

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc";
    const sortedData = _.orderBy(pets, [column], [newDirection]);
    setSelectedColumn(column);
    setDirection(newDirection);
    setPets(sortedData);
  };
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {columns.map((column, index) => {
        {
          return (
            <TouchableOpacity
              key={index}
              style={styles.columnHeader}
              onPress={() => sortTable(column)}
            >
              <Text style={styles.columnHeaderTxt}>
                {column + " "}
                {selectedColumn === column && (
                  <MaterialCommunityIcons
                    name={
                      direction === "desc"
                        ? "arrow-down-drop-circle"
                        : "arrow-up-drop-circle"
                    }
                  />
                )}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
  //Flat List Header Search

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
        {/* <TextInput
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
        /> */}
      </View>
    );
  }
  // Flat List Search Handler
  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();

    const filteredData = filter(fullData, (user) => {
      console.log(contains(user, formattedQuery));
      return contains(user, formattedQuery);
    });
    setPets(filteredData);
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
  const getItem = (item) => {
    //Function for click on an item
    alert("user_id : " + item.user_id + " user_email : " + item.user_email);
  };
  return (
    <View style={styles.container}>
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
      <FlatList
        data={pets}
        style={{ width: "90%" }}
        keyExtractor={(item, index) => index + ""}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                ...styles.tableRow,
                backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",
              }}
            >
              <Text style={styles.columnRowTxt} onPress={() => getItem(item)}>
                {item.user_id}
              </Text>
              <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>
                {item.user_first_name}
              </Text>
              <Text style={styles.columnRowTxt}>{item.user_last_name}</Text>
              <Text style={styles.columnRowTxt}>{item.user_email}</Text>
              <Text style={styles.columnRowTxt}>{item.Age}</Text>
            </View>
          );
        }}
      />
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
    paddingTop: 20,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "20%",
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 10,
  },
  fabIcon: {
    alignItems: "center",
    fontSize: 40,
    color: "white",
  },
});
