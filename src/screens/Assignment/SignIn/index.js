import React from "react";
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button1 from "../../../components/button1";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = () => {
  const onSignIn = () => {
    console.log('Test Sign in');
  };
  return(
    <View style={styles.container}>
      <AuthHeader title="Sign In"/>
      <Input label="Email" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="**********" /> 
      <Button1 style={styles.button} title="Sign In"></Button1>
      <Separator text="Or sign up with"></Separator>
      <GoogleLogin></GoogleLogin>

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
         {' '}
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignIn;