import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { getDecks, clearSetDummy } from '../utils/api';

export default class DeckList extends Component {

  state = {
    decks: ""
  }

  constructor(props) {
    super(props)
    this.props.navigation.addListener('focus', () => {
      this.getDecksAsync()
    });
  }

  getDecksAsync = () => {
    getDecks().then(decks => {
      this.setState(() => ({
        decks: decks
      }));
    });
  }

  navigateDeck(deck, key) {
    return () => { this.props.navigation.navigate('Deck', { deck, key }); };//, refresh: refreshFunction
  }

  render() {
    const decks = this.state.decks;
    console.log(decks)
    return decks != "" ? Object.keys(decks).map(key => {
      const deck = decks[key]
      return (
        <TouchableOpacity key={key} style={[styles.container, styles.borderBottom]} onPress={this.navigateDeck(deck, key)} >
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.card}>{deck.cards.length}</Text>
        </TouchableOpacity>
      )
    }) : <View style={styles.container}><Text style={styles.text}>Create New Deck</Text></View>
  }

}



//TODO bkalafat cards will be count
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borderBottom: {
    borderStyle: "solid",
    borderBottomWidth: 1
  },
  title: {
    fontSize: 31,
    fontWeight: "bold",
    color: "#464646"
  },
  card: {
    fontSize: 21,
    color: "#464646"
  },
  text: {
    fontSize: 39,
    padding: 50,
    textAlign: 'center',
    color: '#464646'
  }
});
