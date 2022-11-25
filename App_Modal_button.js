import React, { Component,useState } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Switch,
} from "react-native";
import Modal from "react-native-modal"; // 2.4.0


export default function MyComponent() {
    const [visibleModal,setvisibleModal] =useState(null);
//   state = {
//     visibleModal: null,
//   };

  const _renderButton = (text, onPress) => (    
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
  );
// Switch Operator functions
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>

      {/* Extra Added by Me */}
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      {/* End Extra */}
      {_renderButton("Close", () => setvisibleModal(null))}
    </View>
  );

  
    return (
      <View style={styles.container}>
        {_renderButton("Default modal", () => setvisibleModal(1))}
        {_renderButton("Sliding from the sides", () => setvisibleModal(2))}
        {_renderButton("A slower modal", () => setvisibleModal(3))}
        {_renderButton("Fancy modal!", () => setvisibleModal(4))}
        {_renderButton("Bottom half modal", () => setvisibleModal(5))}
        <Modal isVisible={visibleModal === 1}>
          {_renderModalContent()}
        </Modal>
        <Modal
          isVisible={visibleModal === 2}
          animationIn={"slideInLeft"}
          animationOut={"slideOutRight"}
        >
          {_renderModalContent()}
        </Modal>
        <Modal
          isVisible={visibleModal === 3}
          animationInTiming={2000}
          animationOutTiming={2000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
        >
          {_renderModalContent()}
        </Modal>
        <Modal
          isVisible={visibleModal === 4}
          backdropColor={"red"}
          backdropOpacity={1}
          animationIn={"zoomInDown"}
          animationOut={"zoomOutUp"}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {_renderModalContent()}
        </Modal>
        <Modal isVisible={visibleModal === 5} style={styles.bottomModal}>
          {_renderModalContent()}
        </Modal>
      </View>
    );
  
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
