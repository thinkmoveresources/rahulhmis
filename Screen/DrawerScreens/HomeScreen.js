
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
 
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Home Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;
// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/
 
// // Import React and Component
// import React, { useState, useEffect } from 'react';
// import {View, Text, SafeAreaView,Platform} from 'react-native';
// import axios from 'axios';
// import DataTable, {COL_TYPES} from 'react-native-datatable-component';
// // import ReactFlexyTable from 'react-flexy-table'
// // import 'react-flexy-table/dist/index.css'
// import MaterialTable from "material-table";
// import '@material-ui/core';
// // import Flextab from 'FlexyTable'
// const HomeScreen = () => {
//   const [posts, setPosts] = useState();
//       useEffect(() => {
//         const sendGetRequest = async () => {
//         try {
//             const resp = await axios.get('https://www.thinkmoveresources.com/settings/profile');
//             setPosts(resp.data);
//         } catch (err) {
//             // Handle Error Here
//             console.error(err);
//         }
//     };    
//     sendGetRequest();
//   }, []);
//   const userdata = [
//     { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
//     { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
//   ];
  
//   const columns = [
//     { title: "Name", field: "name" },
//     { title: "Surname", field: "surname" },
//     { title: "Birth Year", field: "birthYear", type: "numeric" },
//   ];
//   const nameOfCols = ['user_id','Name', 'select'];
//   return (
    
//     <SafeAreaView>
      
//       <View>
//       <Text>"Running OnWindows"</Text>
//       </View>
      
      
//      </SafeAreaView> 
      
//     //   <DataTable
//     //            onRowSelect={(row) => {console.log('ROW => ',row)}}
//     //            data={posts}
//     //            colNames={nameOfCols}
//     //            colSettings={[{name: 'select', type: COL_TYPES.CHECK_BOX}]}
//     //            noOfPages={2}
//     //            backgroundColor={'rgba(23,2,4,0.)'} 
//     //            headerLabelStyle={{ color: 'grey', fontSize: 12 }}
//     //       />
//     //   <ReactFlexyTable data={posts} filterable />
//     //   <MaterialTable title="Basic Table" columns={columns} data={userdata} />
//     //   <FlexyTable />
    
//   );
// };
 
// export default HomeScreen;
