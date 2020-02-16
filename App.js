import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewQuestion from './components/NewQuestion'
import Constants from 'expo-constants'
import Quiz from './components/Quiz'
import { purple } from './utils/colors';

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1 }} >
      <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
      <Quiz deckName="udaciCards" cardCount="3"/>
    </View>
  );
}
