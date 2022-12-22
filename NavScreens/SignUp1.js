import React, { useState,useCallback,useEffect } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from "../Style";
import { useForm, Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import axios from 'axios';
export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //Dropdown
  const [roleOpen, setRoleOpen] = useState(false);
  const [roleValue, setRoleValue] = useState(null);
  // const [companyOpen, setCompanyOpen] = useState(false);
  const [role, setRole] = useState([]);
  const [posts, setPosts] = useState();
  useEffect(() => {
    const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://www.thinkmoveresources.com/mst_role/role_list')
        .then((response) => {
          const data = response.data;
          setRole(data);
          console.log(data); // returns correctly filled array
          // setRole([{lable:"rahul@gmail.com","value":"111111"},{lable:"VIjay@gmail.com","value":"222222"}]);
          // setRole([{lable:"rahul@gmail.com","value":"111111"},{lable:"VIjay@gmail.com","value":"222222"}]);
          console.log(role); // returns '[]'
      });
        // setPosts(JSON.stringify(resp.data));
        // setRole();
        // setRole([
        //   { label: "Male", value: "male" },
        //   { label: "Female", value: "female" },
        //   { label: "Prefer Not to Say", value: "neutral" }
        // ]);
        // console.log(json(resp.data));
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};    
sendGetRequest();
}, []);

  // const onGenderOpen = useCallback(() => {
  //   setCompanyOpen(false);
  // }, []);

//From Hook Veriables  
const { control, handleSubmit, formState: { errors } } = useForm({
  defaultValues: {
    FirstName: '',
    LastName: '',
    Email:'',
    Password:'',
    ConfirmPassword:''
  }
});
// const onSubmit = data => { 
//   axios.get('https://www.thinkmoveresources.com/mst_user/user_insert').then((response) => {
//     data,
//     headers:{"Content-Type": 'application/x-www-form-urlencoded'}
//   });
// }  
const onSubmit = data => {
  axios({
    method: 'post',
    url: 'https://www.thinkmoveresources.com/mst_user/user_insert',     
    data,
    headers:{"Content-Type": 'application/x-www-form-urlencoded'}
  }).then(function (response) {
    alert(response.data);
    navigation.navigate('SignIn')    
    })
    .catch(function (error) {
      console.log(error);
    });
}
  return (
    <SafeAreaView>
     <View style={styles.container}>
     <Text style={styles.text}>Sign in to your account:</Text>      
      
      <Text style={styles.label}>Gender</Text>
      
      <Controller
        name="role"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownGender}>
            <DropDownPicker
              style={styles.dropdown}
              open={roleOpen}
              value={roleValue} //roleValue
              items={role}
              setOpen={setRoleOpen}
              setValue={setRoleValue}
              setItems={setRole}
              placeholder="Select Gender"
              placeholderStyle={styles.placeholderStyles}
              // onOpen={onGenderOpen}
              onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.formInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Enter First Name*'
          />
        )}
        name="FirstName"
      />
      
      {errors.FirstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
        required: true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.formInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Enter Last Name*'
          />
        )}
        name="LastName"
      />
     
      {errors.LastName && <Text>This is required.</Text>}  
      <Controller
        control={control}
        rules={{
        required: true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.formInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Enter Email Name*'
          />
        )}
        name="Email"
      />
     
      {errors.Email && <Text>This is required.</Text>} 
      <Controller
        control={control}
        rules={{
        required: true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.formInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder='Enter Password*'
          />
        )}
        name="Password"
      />
     
      {errors.Password && <Text>This is required.</Text>} 
      <Controller
        control={control}
        rules={{
        required: true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.formInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder='Confirm Password*'
          />
        )}
        name="ConfirmPassword"
      />
     
      {errors.ConfirmPassword && <Text>This is required.</Text>} 
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} >
           <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.inlineText}>Already have an account?</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
         
      

       
          
          
       
     </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//     container: {
//       height: '100%',
//       width: '100%',
//       backgroundColor: '#3FC5AB',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     button: {
//       width: 200,
//       padding: 5,
//       backgroundColor: '#ff9999',
//       borderWidth: 2,
//       borderColor: 'white',
//       borderRadius: 15,
//       alignSelf: 'center',
//       margin: '5%',
//     },
//     buttonText: {
//       fontSize:20,
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     inlineText: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: 'navy',
//       textAlign: 'center',
//       marginTop: '5%',
//     },
//     text: {
//       textAlign: 'center',
//       fontSize: 25,
//       margin: '5%',
//       marginTop:'15%',
//       fontWeight: 'bold',
//       color: '#2E6194',
//     },
//     textInput: {
//       width: 300,
//       fontSize:18,
//       borderWidth: 1,
//       borderColor:'#a4eddf',
//       padding: 10,
//       margin: 5,
//     },
//   });