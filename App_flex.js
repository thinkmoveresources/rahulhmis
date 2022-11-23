import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity,ScrollView,windowWidth} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

export default class FlatListComponent extends Component {
 constructor(props) {
   super(props);
 
   this.state = {
     refresh: false,
     data: [],
   };
 }
 
 componentDidMount() {
    this.makeRemoteRequest();
    
 }
 makeRemoteRequest = () => {
    console.log("Reached");
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
        console.log(data);
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
 renderHeader = () => {
    return (
        
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
        />
      );
 };
 
 renderFooter = () => {
   return (
     <View>
       <Text style={styles.footer}>End</Text>
     </View>
   );
 };
 
 emptyListView = () => {
   return (
     <View>
       <Text>No records found.</Text>
     </View>
   );
 };
 searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };
 renderSeparator = () => {
   return <View style={styles.itemSeparator}></View>;
 };
 
 onItemSelect = item => {
   console.log('item', item);
 };
 
 render() {
//    let data = [
//      { id: 1, name: 'John Brahm', designation: 'Project Manager' },
//      { id: 2, name: 'Tom Jack', designation: 'Software Engineer' },
//      { id: 3, name: 'Mark Bell', designation: 'QA Engineer' },
//      { id: 4, name: 'Marshall Doe', designation: 'Software Engineer' },
//      { id: 5, name: 'John Dow', designation: 'Product Manager' },
//      { id: 6, name: 'Harry Jam', designation: 'Team Lead' },
//      { id: 7, name: 'Oliver James', designation: 'Graphic Designer' },
//      { id: 8, name: 'Ella Avery', designation: 'QA Engineer' },
//      { id: 9, name: 'William Thomas', designation: 'Graphic Designer' },
//      { id: 10, name: 'Edward Brian', designation: 'Team Lead' },
//    ];
   return (
    
    // <View style={{ flex: 1, backgroundColor: "red",flexDirection: "column" }} >
    //    <FlatList
    //      data={this.state.data}
    //     //  extraData={this.state}
    //      keyExtractor={item => item.email}
    //      ListHeaderComponent={this.renderHeader}
    //      ListFooterComponent={this.renderFooter}
    //      ListEmptyComponent={this.emptyListView}
    //      ItemSeparatorComponent={this.renderSeparator}
    //      renderItem={({item}) => {
    //        return (
    //          <TouchableOpacity
    //            onPress={() => {
    //              this.onItemSelect(item);
    //            }}>
    //             <ScrollView>
    //            <View style={styles.flatlist}>
    //              <Text style={styles.heading2}>{item.name.first}</Text>
    //              <Text style={styles.subheading}>{item.name.last}</Text>
    //            </View>
    //            </ScrollView>
    //          </TouchableOpacity>
    //        );
    //      }}
    //    />
      
    //  </View>
    <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 3, backgroundColor: "red" }} >
        
        
       

        </View>
        <View style={{ flex: 2, backgroundColor: "darkorange" }} />
        <View style={{ flex: 1, backgroundColor: "green" }}>
        <FlatList
         data={this.state.data}
        //  extraData={this.state}
         keyExtractor={item => item.email}
         ListHeaderComponent={this.renderHeader}
         ListFooterComponent={this.renderFooter}
         ListEmptyComponent={this.emptyListView}
         ItemSeparatorComponent={this.renderSeparator}
         renderItem={({item}) => {
           return (
             <TouchableOpacity
               onPress={() => {
                 this.onItemSelect(item);
               }}>
                <ScrollView>
               <View style={styles.flatlist}>
                 <Text style={styles.heading2}>{item.name.first}</Text>
                 <Text style={styles.subheading}>{item.name.last}</Text>
               </View>
               </ScrollView>
             </TouchableOpacity>
           );
         }}
       />   

        </View>
      </View>
     
   );
 }
}
 
const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
 },
 header: {
   fontSize: 30,
   paddingVertical: 15,
   fontWeight: 'bold',
   textAlign: 'center',
   backgroundColor: '#DCDCDC',
 },
 footer: {
   fontSize: 30,
   paddingVertical: 15,
   fontWeight: 'bold',
   textAlign: 'center',
   backgroundColor: '#DCDCDC',
 },
 flatlist: {
   paddingVertical: 30,
   paddingHorizontal: 10,
 },
 heading2: {
   fontSize: 18,
 },
 subheading: {
   color: 'grey',
 },
 itemSeparator: {
   backgroundColor: 'green',
   height: 1,
 },
});

import React, { Component } from 'react';
import { View } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'Left',
        alignItems: 'stretch',
      }}>
        <View style={{margin:10,width: 800, height: 600, backgroundColor: 'powderblue'}} />
        <View style={{margin:10,width: 500, height: 600, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

// import React from "react";
// import { View, StyleSheet, Text,SafeAreaView, useWindowDimensions } from "react-native";

// const App = () => {
//     const dimensions = useWindowDimensions();
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
      
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   header: {
//     fontSize: 20,
//     marginBottom: 12
//   },
//   container1: {
//     flex: 1,
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: '500',
//   }
// });

// export default App;