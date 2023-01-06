import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Verifyuser from "../NavScreens/Verifyuser";
import StringsOfLanguages from "../NavScreens/StringsOfLanguages";
import { I18n } from "i18n-js";

// // const [userfinaldata, setUserfinaldata] = useState();
// // setUserfinaldata(Verifyuser);
let usertoken = AsyncStorage.getItem("usertoken");
// let userlang1 = AsyncStorage.getItem("userlang");
// console.log(AsyncStorage.getItem("userData"));
// let lang = AsyncStorage.getItem("userlang");
const lang = JSON.parse(AsyncStorage.getItem("userlang"));

// let parsed = JSON.parse(lang);  
// console.log(lang[0]);
// userlang.then((data) => {
//     let obj = JSON.parse(data);
//     console.log(obj.userlang);
//   })
// StringsOfLanguages.locale = new I18n(userlang);
StringsOfLanguages.locale = lang;
// let userdata = AsyncStorage.getItem("userData");;
// // console.log(userfinaldata);
// // Get user token
// usertoken
//   .then((data) => {
//     let obj = JSON.parse(data);
//     console.log(obj);
//   })
//   // Promise is rejected/unsuccessful. Give error message.
//   .catch((error) => {
//     // error is the <reason> of the promise
//     console.error(error);
//   });
// // Get User Data
// userdata
//   .then((data) => {
//     // console.log(JSON.parse(data));
//     let obj = JSON.parse(data);
//     // console.log(obj);
//     console.log(obj.password);
//   })
//   // Promise is rejected/unsuccessful. Give error message.
//   .catch((error) => {
//     // error is the <reason> of the promise
//     console.error(error);
//   });

 
export const drawerItemsMain =
  (
  usertoken !== null
    ? [
        {
          key: "Home1",
          title: StringsOfLanguages.t("Home1"),
          routes: [{ nav: "MainDrawer", routeName: "Home", title: "Home" }],
        },
        {
          key: "Users",
          title: "User Management",
          routes: [
            { nav: "MainDrawer", routeName: "Users", title: "Users" },
            { nav: "MainDrawer", routeName: "Doctors", title: "Doctors" },
            { nav: "MainDrawer", routeName: "Admin", title: "Admin" },
          ],
        },
        {
          key: "Settings",
          title: "Settings",
          routes: [
            { nav: "MainDrawer", routeName: "Settings1", title: "Settings 1" },
            { nav: "MainDrawer", routeName: "Settings2", title: "Settings 2" },
            { nav: "MainDrawer", routeName: "Settings3", title: "Settings 3" },
            { nav: "MainDrawer", routeName: "Splash", title: "Doctor Splash" },
          ],
        },
      ]
    : [
        {
          key: "Users",
          title: "User Management",
          routes: [
            { nav: "MainDrawer", routeName: "Users", title: "Users" },
            { nav: "MainDrawer", routeName: "Doctors", title: "Doctors" },
            { nav: "MainDrawer", routeName: "Admin", title: "Admin" },
          ],
        },
      ]);
