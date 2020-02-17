import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from "./TextButton";
import { bordeaux, white } from '../utils/colors';

export default class Deck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deckName: this.props.route.params.deckInfo.deckName,
      cardCount: this.props.route.params.deckInfo.cardCount
    }
  }

  addCard = () => {
    this.props.navigation.navigate('New Question')
  };
  startQuiz = () => {
    this.props.navigation.navigate('Quiz', { deckInfo: { deckName: this.state.deckName, cardCount: this.state.cardCount }})
  };

  render() {
    return (
      <View style={styles.container} >
        <Text style={[{ fontSize: 36, fontWeight: "bold" }, styles.text]}>{this.state.deckName}</Text>
        <Text style={[{ fontSize: 31 }, styles.text]}>{this.state.cardCount} cards</Text>
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