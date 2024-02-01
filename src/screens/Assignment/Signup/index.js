import React from "react";
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button1 from "../../../components/button1";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = () => {
  const onSignIn = () => {
    console.log('Test Sign in');
  };
  return(
    <View style={styles.container}>
      <AuthHeader title="Sign Up"/>
      <Input label="Name" placeholder="Example John" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="**********" />
      <View style={styles.checkRow}>
        <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
      </View>
      <Button1 style={styles.button} title="Sign Up"></Button1>
      <Separator text="Or sign up with"></Separator>
      <GoogleLogin></GoogleLogin>

      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
         {' '}
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;