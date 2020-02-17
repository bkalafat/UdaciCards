import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import TextButton from "./TextButton";
import { bordeaux, white } from '../utils/colors';

export default class NewDeck extends Component {

  createDeck = () => {
    this.props.navigation.navigate('Deck', {deckInfo: {deckName: "udaciCardsss", cardCount: 4}})
  };

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text}>What is the title of new Deck?</Text>
        <TextInput
          style={styles.textInput}
          placeholder={"Deck Title"}
        />
        <TextButton style={styles.button} onPress={this.createDeck}>
          Create Deck
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex:1
  },
  text: {
    fontSize: 39,
    padding: 50,
    paddingTop: 200,
    textAlign: 'center',
    color: '#464646'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    borderRadius: 8,
    paddingLeft: 10,
    width: 300,
    height: 80
  },
  button: {
    padding: 10,
    margin: 50,
    backgroundColor:
    bordeaux,
    color: white,
    borderRadius: 8
  }
});
