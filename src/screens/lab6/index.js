import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
function HomeScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Notifications')} title = "Go to notifications"></Button>
    </View>
  );
};

function NotificationsScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title='Go back Home Screen'></Button>
    </View>
  );
};

const Drawer =createDrawerNavigator();
const Lab6 = () => {
  return(<NavigationContainer>
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component ={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name='Notifications' component ={NotificationsScreen}></Drawer.Screen>
    </Drawer.Navigator>
  </NavigationContainer>);
};

export default Lab6;