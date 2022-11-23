import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Search,Dashboard} from './Screens';

// import {Search,Dashboard} from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
    return (
     <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarStyle:{
                position:'absolute',
                marginBottom:'2%',
                marginTop:'2%',
                marginHorizontal:'2%',
                borderRadius:10,
                height:50,
                ...styles.shadow
            },
            tabBarShowLabel:false,

        }} >
            <Tab.Screen options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center'}} >
                         <Icon name={focused ? 'home' : 'home-outline'} size={20} color={focused ? '#fff' : 'grey'} />
                         <Text style={{color: focused ? '#fff':'grey',fontFamily:'Roboto-Bold', fontSize:10}} >Dashboard</Text>       
                    </View>
                )
            }}  name="Dashboard" component={Dashboard}/>
            <Tab.Screen options={{
                tabBarIcon:({focused})=>(
                    <View>
                        <Icon name={focused ? 'search':'search-outline'} size={20} color={focused ? '#fff' :'grey'} />
                        <Text style={{color:focused ? '#fff' : 'grey', fontSize:10, fontFamily:'Roboto-Bold'}} >Search</Text>
                    </View>
                )
            }} name="Search" component={Search} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Home

const styles = StyleSheet.create({
    shadow:{
        elevation:5,
        shadowColor:'#000',
        backgroundColor:'#00003f',
        borderWidth:1,
        borderColor:'transparent',
    }
})