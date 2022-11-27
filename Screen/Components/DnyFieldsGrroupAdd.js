import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
} from "react-native";
import { styles } from "../../Style";
import {rules} from "./DnyFiledJson"
// Add Multiple Fields => Mentioned in DnyFields Json
export function AddFiledFroup({index,onChangeCompany,onChangeProfile,onChangeYear}) {
  return (
    <View style={{ flex: 1, backgroundColor:"#ddd",padding:20}}>
      
      <Text>Add Field Group{index+1}</Text>
      {/* index for increment group title number */}
      <FlatList
        data={rules}
        renderItem={({ item, index }) => {
          return (
            // Main View
            <View>
              {/* COMPANY */}
              {item.field == "TEXT_COMPANY" ? (
                <View>
                  <TextInput
                    onChangeText={(txt) => {
                      onChangeCompany(txt);
                    }}
                    style={styles.dny_commonView}
                    placeholder={item.data.placeholder}
                  />
                </View>
              ) : // PROFILE
              item.field == "TEXT_YEAR" ? (
                <View>
                  <TextInput
                    onChangeText={(txt) => {
                      onChangeYear(txt);
                    }}
                    style={styles.dny_commonView}
                    placeholder={item.data.placeholder}
                  />
                </View>
              ) : // YEAR
              item.field == "TEXT_PROFILE" ? (
                <View>
                  <TextInput
                    onChangeText={(txt) => {
                      onChangeProfile(txt);
                    }}
                    style={styles.dny_commonView}
                    placeholder={item.data.placeholder}
                  />
                </View>
              ) : // : // ADD EXP BUTTON
              // item.field == "BUTTON_ADD_EXP" ? (
              //   <View>
              //     <TouchableOpacity
              //       style={styles.dny_button}

              //     >
              //       <Text style={styles.dny_buttonText}>{item.data.title}</Text>
              //     </TouchableOpacity>
              //   </View>
              // )
              // Dynamic form end
              null}
            </View>
          );
        }}
      />
    </View>
  );
}
    export function Field1() {
      return (
        <View>
          <Text>Reached</Text>
        </View>
      );
    }
    export function Field2() {
      return (
        <View>
          <Text>Not Reached</Text>
        </View>
      );
    }
