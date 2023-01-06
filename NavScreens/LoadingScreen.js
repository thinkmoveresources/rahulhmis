import React, { useEffect,useContext } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from "../AuthContext";

export default function LoadingScreen({ navigation }) {
  const { auth } = useContext(AuthContext);
}

