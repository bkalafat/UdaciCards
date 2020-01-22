import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from "./TextButton";

export default class NewDeck extends Component {

  createDeck = () => {
    //Route To Deck
  };

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text}>What is the title of your new Deck?</Text>
        <TextButton style={{ padding: 10 }} onPress={this.createDeck}>
          Create Deck
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
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
    paddingLeft: 10
  },
  button: {
    justifyContent: 'flex-end'
  }
});
