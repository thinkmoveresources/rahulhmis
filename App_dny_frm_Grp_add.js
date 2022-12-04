import React,{useState} from "react";
import { StyleSheet, View, TextInput, Button,Text,FlatList,TouchableOpacity,Switch } from "react-native";
import {styles} from "./Style"
import { useForm, Controller } from "react-hook-form";
import {
  Field1,
  Field2,
  AddFiledFroup,
} from "././Screen/Components/DnyFieldsGrroupAdd";
import {rules} from "././Screen/Components/DnyFiledJson"
import { validation } from "././Screen/Components/ValidationJson";
import validate  from "././Screen/Components/validate_wrapper";
  const App = () => {
    // Form Variable
    const [username, setUsername] = useState("");
     const [inputText, setInputText] = useState();
    // Experiance data const imported from DynamicGroupadd
    const [expData, setExpData] = useState([
      { company: "", profile: "", years: "" }
    ]);
    // Set Entered EXperiance data to array
    const changeCompany=(ind,txt)=>{
      let temp=expData;
      temp.map((item,index)=>{
        if(index==ind){
          item.company=txt;
        }
      });
      console.log(temp);
      setExpData(temp);
    };
    const changeProfile = (ind, txt) => {
      let temp = expData;
      temp.map((item, index) => {
        if (index == ind) {
          item.profile = txt;
        }
      });
      console.log(temp);
      setExpData(temp);
    };
    const changeYear = (ind, txt) => {
      let temp = expData;
      temp.map((item, index) => {
        if (index == ind) {
          item.years =txt;
        }
      });
      console.log(temp);
      setExpData(temp);
    };
    // Switch procedure
    const [switchValueP_info1, setSwitchValueP_info1] = useState(false);
    const [switchValueP_info2, setSwitchValueP_info2] = useState(false);
    const toggleSwitchP_info1 = (value) => {
      //To handle switch toggle
      setSwitchValueP_info1(value);
      //State changes according to switch
    };
    const toggleSwitchP_info2 = (value) => {
      //To handle switch toggle
      setSwitchValueP_info2(value);
      //State changes according to switch
    };
    const [errorMsg, setErrorMsg] = useState("initial error");
    
    const handleTouchItem = (item,index,txt) => {      
      setErrorMsg(item);
      console.log(item);
      console.log(txt);
      console.log(item.data.badMessage)
      // alert(item.data.badMessage);
    };
    
    // const ChangeGetItem = (ind, txt) => {
    //   let temp = exampleState;
    //   temp.map((item, index) => {
    //     if (index == ind) {
    //       item.data.badMessage = txt;
    //     }
    //   });
    //   console.log(temp);
    //   setExampleState(temp);
    // };
   
  //    const GetItem=(item,index) =>{
      
  //     alert(exampleState);
     

  //  }
    const [userName, setUserName] = useState("");
    const rahulfunction = ({item}) => (
      <View key={item.data.badMessage}>
        <Text>{item.data.badMessage}</Text>
      </View>
    );
    const [exampleState, setExampleState] = useState([rules]);
    const onPressTextItem=(item,txt)=>{
      
     const newData = exampleState.map((item) => {
       item.badMessage = "Not Valid Name";
       console.log(item.badMessage);
       console.log(newData);
     });
      setInputText(item.data.id)
      console.log(inputText)
      console.log(txt)
      return item;
      setExampleState(newData);
    }
    return (
      // Main View
      
      <View>
        {/* <AddFiledFroup /> */}
        <View >
          
          <FlatList
            data={expData}
            renderItem={({ item, index }) => {
              return (
                <AddFiledFroup
                  index={index}
                  onChangeCompany={(txt) => {
                    changeCompany(index, txt);
                  }}
                  onChangeYear={(txt) => {
                    changeYear(index, txt);
                  }}
                  onChangeProfile={(txt) => {
                    changeProfile(index, txt);
                  }}
                  OnclickRemove={(index) => {
                    if(expData.length>1){
                    let temp=expData;
                    temp.splice(index,1);
                    let tmparry=[];
                    temp.map(item=>{
                      tmparry.push(item);
                    });
                    setExpData(tmparry);
                  }
                  }}
                  
                />
              );
              // Pass Index number to show group count
            }}
          />

          <TouchableOpacity
            style={styles.dny_button}
            onPress={() => {
              let tempData = expData;
              tempData.push({ company: "", profile: "", years: "" });
              let temp = [];
              tempData.map((item) => {
                temp.push(item);
              });
              setExpData(temp);
            }}
          >
            <Text style={styles.dny_buttonText}>Add Exp</Text>
          </TouchableOpacity>
        </View>
        {/* *******************************END OF GROUPFIELD ADD********************************************** */}
        {/* Dynamic Regular form */}
        <Text>Dynamic Form</Text>
        <FlatList
          data={rules}
          keyExtractor={(item)=>item.data.id.toString()}
          renderItem={({ item, index }) => {
            return (
              // Main View
              <View>
                {/* Name */}
                {item.field == "TEXT_INPUT" ? (
                  <View>
                    <TextInput
                      style={styles.dny_commonView_txt}
                      placeholder={item.data.placeholder}
                      // onChangeText={(txt) => handleTouchItem(item, index)}
                      // onChangeText={GetItem.bind(index, item)}
                      onChangeText={(txt) => onPressTextItem(item)}
                      defaultValue={inputText}
                      editable={true}
                      
                      
                    />
                    {/* <Text>{validate(item.data.fieldName, 'rahul')}</Text> */}
                    <Text>{item.data.badMessage}</Text>
                  </View>
                ) : // Button
                item.field == "TEXT_INPUT1" ? (
                  <View>
                    <TextInput
                      style={styles.dny_commonView_txt}
                      placeholder={item.data.placeholder}
                    />
                  </View>
                ) : item.field == "BUTTON" ? (
                  <View>
                    <TouchableOpacity
                      style={styles.dny_button}
                      placeholder={item.data.placeholder}
                    >
                      <Text style={styles.dny_buttonText}>
                        {item.data.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : // Dynamic form end
                null}
              </View>
            );
            
          }}
          // onPress={() => handleTouchItem(item,index)}
        />
      </View>
    );
  }
export default App;
