import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getDecks, setDummy } from '../utils/api';

export default class DeckList extends Component {

  state = {
    decks: ""
  }

  getDecksAsync() {
    getDecks().then(decks => {
      this.setState(() => ({
        decks: decks
      }));
    });
  }

  render() {

    this.getDecksAsync()

    const decks = this.state.decks;
    return Object.keys(decks).map((id) => {
      return (
        <View><Text>{JSON.stringify(decks[id].title)}</Text></View>
      )
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
