import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './assets/components/HomeScreen';
import WelcomeScreen from './assets/components/WelcomeScreen';
import Page1 from './assets/components/Page1';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Page1 />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
