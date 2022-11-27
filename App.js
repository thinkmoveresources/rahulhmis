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
  const App = () => {
    // Form Variable
    const [username, setUsername] = useState("");
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
    return (
      // Main View
      <View style={{ flex: 1 }}>
        // {/* <AddFiledFroup /> */}
        <View>
          <View>
            <FlatList
              data={expData}
              renderItem={({ item, index }) => {
                return (
                  <AddFiledFroup
                    index={index}
                    onChangeCompany={(txt) => {
                     changeCompany(index,txt);
                    }}
                    onChangeYear={(txt) => {
                      changeYear(index,txt)
                    }}
                    onChangeProfile={(txt) => {
                      changeProfile(index,txt)
                    }}
                  />
                );
                // Pass Index number to show group count
              }}
              
            />
          </View>
          <TouchableOpacity style={styles.dny_button}
          onPress={()=>{
              let tempData = expData;
              tempData.push({ company: "", profile: "", years: "" });
              let temp=[];
              tempData.map(item=>{temp.push(item)});
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
          renderItem={({ item, index }) => {
            return (
              // Main View
              <View>
                {/* Name */}
                {item.field == "TEXT_INPUT" ? (
                  <View>
                    <TextInput
                      style={styles.dny_commonView}
                      placeholder={item.data.placeholder}
                    />
                  </View>
                ) : // Button
                item.field == "TEXT_INPUT1" ? (
                  <View>
                    <TextInput
                      style={styles.dny_commonView}
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
        />
      </View>
    );
  }
export default App;
