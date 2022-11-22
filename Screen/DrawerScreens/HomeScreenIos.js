// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView,Platform} from 'react-native';
import axios from 'axios';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
// import ReactFlexyTable from 'react-flexy-table'
// import 'react-flexy-table/dist/index.css'
import MaterialTable from "material-table";
import '@material-ui/core';
// import Flextab from 'FlexyTable'
const HomeScreenIos = () => {
  const [posts, setPosts] = useState();
      useEffect(() => {
        const sendGetRequest = async () => {
        try {
            const resp = await axios.get('https://www.thinkmoveresources.com/settings/profile');
            setPosts(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };    
    sendGetRequest();
  }, []);
  const userdata = [
    { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
    { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  ];
  
  const columns = [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
  ];
  const nameOfCols = ['user_id','Name', 'select'];
  return (
    
    <SafeAreaView>
      
      <View>
      <Text>"Running On Android"</Text>
      </View>
      
      
    </SafeAreaView>
      
    
    
  );
};
 
export default HomeScreenIos;
