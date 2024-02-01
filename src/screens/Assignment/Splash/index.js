import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import Button1 from "../../../components/button1";
import { styles } from "./styles";
const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require("../../../assets/images/main_img.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All need you</Text>
        <Text style={styles.title}>Here</Text>
      </View>

      <Button1 title={"Sign Up"}></Button1>
      <Pressable>
        <Text style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
