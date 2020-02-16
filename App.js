import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckView from './components/DeckView'
import Constants from 'expo-constants'
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
      <DeckView deckName="udacicards" cardCount="3" />
    </View>
  );
}
