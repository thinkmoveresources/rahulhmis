import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../NavScreens/Dashboard";
import Setting1 from "../NavScreens/Setting1";
import Registration1 from "../NavScreens/Setting3";
import Registration from "../NavScreens/Registration";
import Splash from "../NavScreens/Splash";
import User_registration from "../NavScreens/users/User_registration";
import CustomDrawerContent from "../MainNavMenu/CustomDrawerContent.js";
import { drawerItemsMain } from "../MainNavMenu/drawerItemsMain";
import CustomHeader from "../MainNavMenu/CustomHeader";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// import Welcome from '../screens/Welcome';
import { Platform } from "react-native";
const Stack = createStackNavigator();
//  const Drawer = createDrawerNavigator();
const Drawer = createDrawerNavigator();
function HomeScreen({ props }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Dashboard />
    </View>
  );
}
function Settings1Screen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Setting1 />
    </View>
  );
}
function Splash_func() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Splash />
    </View>
  );
}
function Settings2Screen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Splash />
      <Text>Settings 2 Screen</Text>
    </View>
  );
}
function Settings3Screen() {
  return (
    
    <View style={styles1.container}>
      <View style={styles1.top}>
        <Text>Top View</Text>
      </View>
      <View style={styles1.center}>
        <Text>Center View</Text>
      </View>
      {Platform.OS === "web" ? (
        <View style={styles1.bottom_win}>
          <View style={styles1.bottomItem_win}>
            <Text>Bottom View</Text>
            <View style={styles1.bottomItemInner_win}>
              <Text>Bottom Inner1</Text>
            </View>
          </View>

          <View style={styles1.bottomItem_win}>
            <Text>Bottom View</Text>
            <View style={styles1.bottomItemInner_win}>
              <Text>Bottom Inner2</Text>
            </View>
          </View>

          <View style={styles1.bottomItem_win}>
            <Text>Bottom View</Text>
            <View style={styles1.bottomItemInner_win}>
              <Text>Bottom Inner3</Text>
            </View>
          </View>

          <View style={styles1.bottomItem_win}>
            <Text>Bottom View</Text>
            <View style={styles1.bottomItemInner_win}>
              <Text>Bottom Inner4</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles1.bottom_and}>
          <View style={styles1.bottomItem_and}>
            <Text>Bottom View</Text>
            <View style={styles1.bottomItemInner_and}>
              <Text>Bottom Inner1</Text>
            </View>
          </View>

          <View style={styles1.bottomItem_and}>
            <Text>Bottom View</Text>
            <View style={styles1.bottomItemInner_and}>
              <Text>Bottom Inner2</Text>
            </View>
          </View>

          <View style={styles1.bottomItem_and}>
            <Text>Bottom View</Text>
            <View style={styles1.bottomItemInner_and}>
              <Text>Bottom Inner3</Text>
            </View>
          </View>

          <View style={styles1.bottomItem_and}>
            <Text>Bottom View</Text>
            <View style={styles1.bottomItemInner_and}>
              <Text>Bottom Inner4</Text>
            </View>
          </View>
        </View>
      )}
    </View>
    // {/* <View
    //     style={{
    //       // height: "100%",
    //       width: "50%",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       // backgroundColor: "#B099",
    //       padding: 15,
    //     }}
    //   >
    //     <Registration1 />
    //   </View>

    // <View
    //   style={{
    //     height: "100%",
    //     width: "50%",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     // backgroundColor: "#B099",
    //     padding: 15,
    //   }}
    // >
    //   <Setting1 />
    // </View> */}
  );
}
function Registration_call() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Registration />
    </View>
  );
}
export function MainDrawerNavigation({ props }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings1" component={Settings1Screen} />
      <Drawer.Screen name="Settings2" component={Settings2Screen} />
      <Drawer.Screen name="Settings3" component={Settings3Screen} />
      <Drawer.Screen name="Registration" component={Registration_call} />
      <Drawer.Screen name="Users" component={User_registration} />
      <Drawer.Screen name="Splash" component={Splash_func} />
      {/* <Drawer.Screen name="Userlist" component={UserScreen} />
      <Drawer.Screen name="UserDetails" component={UserDetailScreen} />
      <Drawer.Screen name="AddUser" component={AddUserScreen} />
      <Drawer.Screen name="AddCenter" component={AddCenterScreen} />
      <Drawer.Screen name="RegisterUser" component={RegistrationScreen} />
      <Drawer.Screen name="GetImage" component={UploadImage} />
      <Drawer.Screen name="Workfunction" component={Workingfunction} />
      <Drawer.Screen name="Getdata" component={Getsqldata} /> */}
    </Drawer.Navigator>
  );
}

const NavMenu: () => React$Node = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "#1b7d8d",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        header: (props) => {
          return <CustomHeader {...props} />;
        },
      }}
    >
      <Stack.Screen name="MainDrawer" component={MainDrawerNavigation} />
    </Stack.Navigator>
  );
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#98d2c1",
  },
  center: {
    height: "10%",
    backgroundColor: "#7fbcac",
  },
  bottom_win: {
    height: "45%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  bottomItem_win: {
    width: "50%",
    height: "50%",
    padding: 5,
  },
  bottomItemInner_win: {
    flex: 1,
    backgroundColor: "pink",
  },
  bottom_and: {
    height: "45%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  bottomItem_and: {
    width: "100%",
    height: "100%",
    padding: 5,
  },
  bottomItemInner_and: {
    flex: 1,
    backgroundColor: "pink",
  },
});

export default NavMenu;
