import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WelcomeScreen from './WelcomeScreen';
import LoginPractice from './LoginPractice';
import Image1 from './../../assets/images/facebook.png';

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!!</Text>
    </View>
  );
};

const Setting = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Setting!!</Text>
    </View>
  );
};

const TabBarExp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: () => {
            return <Image source={Image1} wi/>;
          },
        }}
      />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default TabBarExp;

const styles = StyleSheet.create({});
