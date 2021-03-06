import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import TextButton from "./TextButton";
import { bordeaux, white } from '../utils/colors';
import {  submitDeck } from '../utils/api';
import { generateUniqueId } from '../utils/helpers';



export default class NewDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  createDeck = () => {
    const key = generateUniqueId()
    const title = this.state.text

    const deck = {
      title,
      cards: []
    }

    submitDeck({ key, deck });
    this.setState({
      text: ""
    })
    this.props.navigation.navigate('Deck', { deck, key })
  };

  render() {
    return (
      <View style={styles.container} >

        <View style={{paddingTop:30}}>
          <TextInput
            style={styles.textInput}
            placeholder={"Deck Title"}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <TextButton style={styles.button} onPress={this.createDeck}>
          Create Deck
        </TextButton>
        <Text style={styles.text}>What is the title of new Deck?</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 39,
    justifyContent: "flex-start",
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
