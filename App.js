import { SafeAreaView, StyleSheet, Animated } from 'react-native';
import React from 'react';
import Practice from './src/screens/Practice';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginPractice';
import UITest from './src/screens/UITest';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CheckBox from '@react-native-community/checkbox';
import TabBarExp from './src/screens/TabBarExp';
const Stack = createStackNavigator();

const App = () => {

  const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
        : 0
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width, // Focused, but offscreen in the beginning
                  0, // Fully focused
                  screen.width * -0.3, // Fully unfocused
                ],
                extrapolate: 'clamp',
              }),
              inverted
            ),
          },
        ],
      },
    };
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true, cardStyleInterpolator: forSlide }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}  />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='TabBar' component={TabBarExp}/>
        <Stack.Screen name="Home" component={UITest}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

const styles = StyleSheet.create({});
