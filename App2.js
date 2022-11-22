import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import { useForm,input } from 'react-hook-form';
import Constants from 'expo-constants';

// const axios = require('axios').default;
// import { Toast } from 'toastify-react-native';
// import { Toast } from 'toastify-react-native';
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://www.thinkmoveresources.com/blogs',{
        // headers: {
          // 'Access-Control-Allow-Origin' : '*',
          // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          // Accept: 'application/json',
          // crossorigin:true
        // },
        responseType: "json",
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
  };
 
  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://www.thinkmoveresources.com/settings/profile',
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };
 
  const postDataUsingSimplePostCall = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };
 
  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            // handle success
            alert('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function (response) {
            // handle success
            alert('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          // Both requests are now complete
          alert('Both requests are now complete');
        }),
      );
  };
 
  return (
    // <form style={styles.container1} onSubmit={handleSubmit((data) => console.log(data))}>
    //   <View >
    //   <Input  style={{fontSize: 30, textAlign: 'center'}} {...register('firstName',{ required: true }) } />
    //   {errors.firstName && <p>First name is required.</p>}
    //   <input style={{fontSize: 30, textAlign: 'center'}} {...register('lastName', { required: true })} />
    //   {errors.lastName && <p>Last name is required.</p>}
    //   <input style={{fontSize: 30, textAlign: 'center'}} {...register('age', { pattern: /\d+/ })} />
    //   {errors.age && <p>Please enter number for age.</p>}
    //   <input style={styles.button} type="submit" />
    //   </View>
      
      
     
    
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        Example of Axios Networking in React Native
      </Text>
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>
 
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>
 
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={postDataUsingSimplePostCall}>
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>
 
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity>
 
      <Text style={{textAlign: 'center', marginTop: 18}}>
        www.aboutreact.com
      </Text>
    </View>
    // </form>
  );
};
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#0e101',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
 
export default App;