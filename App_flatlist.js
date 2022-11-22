import { FlatList, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableOne = () => {
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
const data = [
    {id: 1, name: 'John', email: 'john@gmail.com'},
    {id: 2, name: 'Bob', email: 'bob@gmail.com'},
    {id: 3, name: 'Mei', email: 'mei@gmail.com'},
    {id: 4, name: 'Steve', email: 'steve@gmail.com'}
]
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 50, backgroundColor: 'lightyellow'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{item.user_id}</Text>
            </View>
            <View style={{ width: 400, backgroundColor: 'lightpink'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.Name}</Text>
            </View>
            <View style={{ width: 400, backgroundColor: 'lavender'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' , textAlign: 'center'}}>{item.Email}</Text>
            </View>
        </View>
    )
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
            <FlatList data={posts} renderItem={item} keyExtractor={item => item.id} />
        </View>
    )
}
export default TableOne