import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
  Center,
  Select,
  CheckIcon,
  SelectInput,
  ScrollView,
} from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { alignContent, flex, flexDirection, width } from "styled-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function SignUp({ navigation }) {
  const [nameinfo, setNameinfo] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
    state: "",
    role: "",
  });
  const [errmsg, setErrormsg] = useState("");
  const [orgdata, setOrgdata] = useState([]);
  const [roledata, setRoledata] = useState([]);
  const [tempusertoken, setTempusertoken] = useState([]);
  const sendGetProfile = async () => {
    let usertoken = await AsyncStorage.getItem("usertoken");
    // console.log(usertoken);
    try {
      axios
        .get("https://www.thinkmoveresources.com/Users/profile", {
          headers: {
            Accept: "application/json",
            // Template literals. String in a string, you can also do 'Bearer ' + getToken
            Authorization: `Bearer ${usertoken}`,
          },
        })
        .then((res) => {
          const details = res.data[0];
          console.log("XXXXXXXXXdetailsXXXXXXXXX");
          console.log(details);
        });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const sendGetOrgRequest = async () => {
    try {
      const resp = await axios
        .get("https://www.thinkmoveresources.com/organisation/allorg")
        .then((response) => {
          const data = response.data;
          setOrgdata(data);
          // console.log(data); // returns correctly filled array
        });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const sendGetRoleRequest = async () => {
    try {
      const resp = await axios
        .get("https://www.thinkmoveresources.com/role/allrole")
        .then((response) => {
          const data = response.data;
          setRoledata(data);
          // console.log(data); // returns correctly filled array
        });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  useEffect(() => {
    sendGetProfile();
    sendGetOrgRequest();
    sendGetRoleRequest();
  }, []); //This will run only once
  const submitUser = async () => {
    // console.log(nameinfo);
    await axios
      .post("https://www.thinkmoveresources.com/Users/register", {
        nameinfo,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((responce) => {
        // console.log(responce.data);
        return responce.data;
      })
      .then((res) => {
        if (res === "user already exist...") {
          setErrormsg(res);
        } else {
          // this.props.history.push(`/patient/login`);
        }
      });
  };

  navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>User Registration</Text>
        </View>
        {/* Choose State */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Box maxW="300">
              <Select
                selectedValue={nameinfo.state}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose State"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(value) =>
                  setNameinfo({
                    ...nameinfo,
                    state: value,
                  })
                }
              >
                {orgdata.map((orgdata) => (
                  <Select.Item
                    key={orgdata.org_id}
                    label={orgdata.org_name}
                    value={orgdata.org_state}
                  />
                ))}
              </Select>
            </Box>
            {orgdata.state}
          </View>
        </View>
        {/* Cheese ROle */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Box maxW="300">
              <Select
                selectedValue={nameinfo.role}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Role"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(value) =>
                  setNameinfo({
                    ...nameinfo,
                    role: value,
                  })
                }
              >
                {roledata.map((roledata) => (
                  <Select.Item
                    key={roledata.role_id}
                    label={roledata.role_name}
                    value={roledata.role_name}
                  />
                ))}
              </Select>
            </Box>
            {roledata.role_name}
          </View>
        </View>
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="First name"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              // onChange={(e) => handlefnamechange(e)}
              onChangeText={(text) =>
                setNameinfo({
                  ...nameinfo,
                  fname: text,
                })
              }
              value={nameinfo.fname}
              name="fname"
              editable={true}
            />
          </View>
        </View>
        {/* Last Name */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="last name"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              // onChange={(e) => handleLnamechange(e)}
              onChangeText={(text) =>
                setNameinfo({
                  ...nameinfo,
                  lname: text,
                })
              }
              value={nameinfo.lname}
              name="lname"
              editable={true}
            />
          </View>
        </View>

        {/* Username or Email Input Field */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Username or Email"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              // onChange={(e) => handleemailchange(e)}
              // value={nameinfo.email}
              onChangeText={(text) =>
                setNameinfo({
                  ...nameinfo,
                  email: text,
                })
              }
              name="email"
              editable={true}
            />
          </View>
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Password"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              // onChange={(e) => handlepasswordchange(e)}
              onChangeText={(text) =>
                setNameinfo({
                  ...nameinfo,
                  password: text,
                })
              }
              value={nameinfo.password}
              name="password"
              editable={true}
            />
          </View>
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Confirm Password"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>

        {/* Button */}
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={submitUser}>
            REGISTER NOW
          </Button>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const OgrenciData = [
  { key: "3", name: "Emre", jobTitle: "Pc", email: "Emre.Sanli" },
  { key: "5", name: "Harun", jobTitle: "Pc", email: "Emre.Sanli" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
});
