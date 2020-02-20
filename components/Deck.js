import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, Button } from 'react-native'
import TextButton from "./TextButton";
import { bordeaux, white } from '../utils/colors';
export default class Deck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deck: this.props.route.params.deck,
      key: this.props.route.params.key
    }
  }

  addCard = () => {
    this.props.navigation.navigate("New Question", { deck: this.state.deck, key: this.state.key })
  };
  startQuiz = () => {
    if (this.state.deck.cards.length > 0)
      this.props.navigation.navigate("Quiz", { deck: this.state.deck })
    else
      alert("Please add card(s) before start quiz!")
  };

  render() {
    return (
      <View style={styles.container} >
        <Text style={[{ fontSize: 36, fontWeight: "bold" }, styles.text]}>{this.state.deck.title}</Text>
        <Text style={[{ fontSize: 31 }, styles.text]}>{this.state.deck.cards.length} cards</Text>
        <View >
          <TextButton style={styles.whiteButton} onPress={this.addCard} >
            Add Card
        </TextButton>
          <TextButton style={styles.bordeuxButton} onPress={this.startQuiz} >
            Start Quiz
        </TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 180,
    alignItems: 'center'
  },
  text: {
    color: '#464646'
  },
  bordeuxButton: {
    padding: 10,
    margin: 50,
    backgroundColor:
      bordeaux,
    color: white,
    borderRadius: 8,
  },
  whiteButton: {
    padding: 10,
    margin: 50,
    backgroundColor:
      white,
    color: bordeaux,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8
  }
});