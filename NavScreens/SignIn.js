import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
  KeyboardAvoidingView,
} from "native-base";
import { Platform } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { alignContent, flex, flexDirection, width } from "styled-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export default function SignIn({ navigation }) {
  const [username, setUsername] = useState("");
  const [nameinfo, setNameinfo] = useState({
    email: "",
    password: "",
    fname: "",
    lname: "",
  });
  const [errmsg, setErrormsg] = useState("");
  // function handlefnamechange(e) {
  //   setNameinfo({
  //     ...nameinfo,
  //     fname: e.target.value,
  //   });
  //   alert(nameinfo.fname);
  // }
  // function handleemailchange(e) {
  //   setNameinfo({
  //     ...nameinfo,
  //     email: e.target.value,
  //   });
  // }
  // function handlepasswordchange(e) {
  //   setNameinfo({
  //     ...nameinfo,
  //     password: e.target.value,
  //   });
  // }
  // function handleLnamechange(e) {
  //   setNameinfo({
  //     ...nameinfo,
  //     lname: e.target.value,
  //   });
  // }
  // let usertoken = "";
  const onSubmit = (data) => {
    // alert("Reached");
    axios
      .post("https://www.thinkmoveresources.com/Users/login", {
        // email: nameinfo.email,
        // password: nameinfo.password,
        // fname: nameinfo.fname,
        // lname: nameinfo.lname,
        nameinfo,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        if (
          response.data === "Email not found" ||
          response.data === "Password incorrect"
        ) {
          alert("Stage-1");
          //   return "Email not found";
          sessionStorage.setItem("usertoken", response.data);
          // return response.data;
        } else {
          // alert("Stage-2");

          // alert("reached");
          // sessionStorage.setItem("userData", JSON.stringify(nameinfo));
          AsyncStorage.setItem("userData", JSON.stringify(nameinfo));
          navigation.navigate("NavMenu");
          alert("responce 111");

          //   this.props.history.push("/employee/login/employee_home");
        }
      })
      // .then((res) => {
      //   if (res != "Email not found") {
      //     alert(res.data);
      //     // alert("reached");
      //     sessionStorage.setItem("userData", JSON.stringify(nameinfo));
      //      alert("responce 111");
      //     navigation.navigate("NavMenu");
      //     //   this.props.history.push("/employee/login/employee_home");
      //   }
      // })
      .catch((err) => {
        console.log(err);
      });
  };
  navigation = useNavigation();
  return (
    <ScrollView w={["200", "300"]} h="80">
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Login</Text>
        </View>
        <View style={styles.text2}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupText}> Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* First Name */}
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

        {/* Button */}
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={onSubmit}>
            LOGIN
          </Button>
        </View>

        {/* Line */}
        <View style={styles.lineStyle}>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>Or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>

        {/* Box */}
        <View style={styles.boxStyle}>
          <Box
            onPress={() => navigation.navigate("#")} // for navigation
            style={{ height: 80, width: 80 }}
            shadow={3}
            _light={{
              backgroundColor: "gray.50",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Box
            onPress={() => navigation.navigate("#")} // for navigation
            style={styles.imageStyle}
            shadow={3}
            _light={{
              backgroundColor: "gray.50",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Box
            onPress={() => navigation.navigate("#")} // for navigation
            style={styles.imageStyle}
            shadow={3}
            _light={{
              backgroundColor: "gray.50",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Box
            onPress={() => navigation.navigate("#")} // for navigation
            style={styles.imageStyle}
            shadow={3}
            _light={{
              backgroundColor: "gray.50",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Login />
//     </NativeBaseProvider>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    // flexWrap:'wrap',
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
