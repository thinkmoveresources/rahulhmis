// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Alert,SafeAreaView,useWindowDimensions,FlatList} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import { ListItem, SearchBar } from 'react-native-elements';

// //FlatList User
// const DATA = [
//     {
//       id:"1",
//       title:"Data Structures"
//     },
//     {
//       id:"2",
//       title:"STL"
//     },
//     {
//       id:"3",
//       title:"C++"
//     },
//     {
//       id:"4",
//       title:"Java"
//     },
//     {
//       id:"5",
//       title:"Python"
//     },
//     {
//       id:"6",
//       title:"CP"
//     },
//     {
//       id:"7",
//       title:"ReactJs"
//     },
//     {
//       id:"8",
//       title:"NodeJs"
//     },
//     {
//       id:"9",
//       title:"MongoDb"
//     },
//     {
//       id:"10",
//       title:"ExpressJs"
//     },
//     {
//       id:"11",
//       title:"PHP"
//     },
//     {
//       id:"12",
//       title:"MySql"
//     },
//   ];
//   const Item = ({title}) => {
//     return( 
//       <View style={styles.item}>
//         <Text>{title}</Text>
//       </View>
//     );
//   }




// export default function HomeScreen({navigation}) {
//   navigation = useNavigation(); 
//   const dimensions = useWindowDimensions();
//   const { height, width, scale, fontScale } = useWindowDimensions();
  
//   return (
//     <SafeAreaView style={styles.container}>
//         <View style={{
//         flex: 1,
//         flexDirection: "column",
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginLeft:50,marginRight:50,
//         marginTop:50,marginBottom:50,
//       }}>    
//       {/* <View style={{marginTop:30,width: dimensions.width, height: dimensions.height, backgroundColor: 'steelblue'}} />     */}
//         <View style={{width: dimensions.width/1.1, height: dimensions.height, backgroundColor: 'powderblue'}} />
        
        
        
//       </View>
//       </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//     button: {
//       width: 150,
//       padding: 5,
//       backgroundColor: '#ff9999',
//       borderWidth: 2,
//       borderColor: 'white',
//       borderRadius: 15,
//       alignSelf: 'center',
//     },
//     buttonText: {
//       fontSize:20,
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     container: {
//       height: '100%',
//       width: '100%',
//       backgroundColor: '#3FC5AB',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     text: {
//       textAlign: 'center',
//       fontSize: 30,
      
//       fontStyle: 'italic',
//       marginTop: '2%',
//       marginBottom: '2%',
//       fontWeight: 'bold',
//       color: '#ee3366',
//     },
//     titleText: {
//       textAlign: 'center',
//       fontSize: 30,
//       fontWeight: 'bold',
//       marginBottom: '2%',
//       color: '#2E6194',
      
//     },
//   });
import React  from 'react';
import{ StyleSheet,
        Text,
        View,
        FlatList,
        useWindowDimensions
      } from 'react-native';
      import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ListItem, SearchBar } from 'react-native-elements';

const DATA = [
  {
    id:"1",
    title:"Data Structures"
  },
  {
    id:"2",
    title:"STL"
  },
  {
    id:"3",
    title:"C++"
  },
  {
    id:"4",
    title:"Java"
  },
  {
    id:"5",
    title:"Python"
  },
  {
    id:"6",
    title:"CP"
  },
  {
    id:"7",
    title:"ReactJs"
  },
  {
    id:"8",
    title:"NodeJs"
  },
  {
    id:"9",
    title:"MongoDb"
  },
  {
    id:"10",
    title:"ExpressJs"
  },
  {
    id:"11",
    title:"PHP"
  },
  {
    id:"12",
    title:"MySql"
  },
];
  
const Item = ({title}) => {
  return( 
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
}

export default function HomeScreen({navigation}) {
    
    navigation = useNavigation(); 
  const dimensions = useWindowDimensions();
  const { height, width, scale, fontScale } = useWindowDimensions();
const renderItem = ({item})=>( 
  <Item title={item.title}/>
);
function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }
  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, user => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };
  
  const contains = ({ name, email }, query) => {
    const { first, last } = name;
  
    if (first.includes(query) || last.includes(query) || email.includes(query)) {
      return true;
    }
  
    return false;
  };
return (
    
  <View style={{width: dimensions.width/1.1, height: dimensions.height, backgroundColor: 'powderblue'}}>
    <FlatList
       data={DATA}
       renderItem={renderItem}
       keyExtractor={item => item.id}
    />
  </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding:2,
  },
  item: {
    backgroundColor: '#f5f520',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});