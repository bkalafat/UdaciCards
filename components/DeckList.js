import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getDecks, setDummy } from '../utils/api';

export default class DeckList extends Component {

  state = {
    decks:""
  }

  componentDidMount() {
    getDecks().then(decks => {
        this.setState(() => ({
          decks: decks
        }))
      })
  }

  render() {
    return (
      <View style={styles.container} >
        <Text> {JSON.stringify(this.state.decks)} </Text>
      </View>
    )
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
