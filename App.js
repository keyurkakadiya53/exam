import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
<<<<<<< Updated upstream
import Practice from './src/screens/Practice';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginPractice';
import UITest from './src/screens/UITest';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CheckBox from '@react-native-community/checkbox';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={UITest} />
      </Stack.Navigator>
    </NavigationContainer>
=======
import HomeScreen from './assets/components/HomeScreen';
import WelcomeScreen from './assets/components/WelcomeScreen';
import Page1 from './assets/components/Page1';
import LifeCycle from './assets/components/LifeCycle';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LifeCycle />
    </SafeAreaView>
>>>>>>> Stashed changes
  );
};

export default App;

const styles = StyleSheet.create({});
