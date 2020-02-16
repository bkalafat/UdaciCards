import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewQuestion from './components/NewQuestion'
import Constants from 'expo-constants'
import Quiz from './components/Quiz'
import { purple } from './utils/colors';
import { createStackNavigator } from 'react-navigation-stack';
import Tabs from './components/Tabs'

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = createAppContainer(createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: () => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
}));

export default function App() {
  return (
    <View style={{ flex: 1 }} >
      <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
      <MainNavigator />
    </View>
  );
}
