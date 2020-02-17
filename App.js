import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Constants from 'expo-constants'
import Quiz from './components/Quiz'
import { purple, bordeaux } from './utils/colors';
import Navigator from './components/Navigator'

import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <View style={{ flex: 1 }} >
      <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
      <Navigator />
    </View>
  );
}
