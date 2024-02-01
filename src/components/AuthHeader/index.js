import React from "react";
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';

const AuthHeader = ({title, onBackPress}) => {
  return(
    <View style={styles.container}>
      <Pressable onBackPress={onBackPress}>
        <Image
          style={styles.iconBack}
          source={require('../../assets/images/auth_back.png')}>
        </Image>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;