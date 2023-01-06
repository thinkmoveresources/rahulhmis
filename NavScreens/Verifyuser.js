import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
 
// let userdata = AsyncStorage.getItem("userData");
export default function Verifyuser(){
   const [userDetails1, setUserDetails1] = useState([]);
async function Verifyuser1() { 
 
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
        // console.log("XXXXXXXXXdetailsXXXXXXXXX");
        setUserDetails1(details);
        // console.log(userDetails1);
        // console.log(details);
      //  return details;
      });
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
console.log(userDetails1);
return userDetails1;
};

