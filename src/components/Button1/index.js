import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
const Button1 = ({ title, onPress, style }) => {
  const handlerPress = () => {
    console.log("Clicked");
  };
  return (
    <TouchableOpacity activeOpacity="0.6" onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.textContent}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button1;
