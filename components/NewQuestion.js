import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, CheckBox } from 'react-native'
import { bordeaux, white } from '../utils/colors';
import TextButton from './TextButton'
import { submitDeck } from '../utils/api';


export default class NewQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deck: this.props.route.params.deck,
      answer: "",
      question: "",
      checked: false
    }
  }

  submit = () => {
    const deck = this.state.deck;
    const key = this.props.route.params.key;

    const card = { question: this.state.question, answer: this.state.answer, isCorrect: this.state.checked }
    deck.cards.push(card)
    submitDeck({ key, deck });
    this.props.navigation.navigate('Deck')
  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
          style={styles.textInput}
          placeholder={"Question"}
        />
        <TextInput
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
          style={styles.textInput}
          placeholder={"Answer"}
        />
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() => this.setState({ checked: !this.state.checked })}
          />
          <Text style={{ marginTop: 5 }}>The Anwser is true</Text>
        </View>

        <TextButton style={styles.button} onPress={this.submit}>
          Submit
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
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
