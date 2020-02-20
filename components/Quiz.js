import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from "./TextButton";
import {  white } from '../utils/colors';

let text = "";
const answerButton = "Show Answer";
const questionButton = "Show Question";
let cardIndex = 0
let correctCounter = 0

//TODO this function will be class
export default class Quiz extends Component {

  constructor(props) {
    super(props);

    this.props.navigation.addListener('focus', () => {
      this.reset()
    });
    cardIndex = 0
    correctCounter = 0
    this.state = {
      showButton: answerButton,
      text: this.props.route.params.deck.cards[cardIndex].question
    }
  }

  reset = () => {
    cardIndex = 0
    correctCounter = 0
    this.setCardState()
  }

  goBack = () => {
    this.props.navigation.navigate("Deck")
  }

  flipCard = () => {
    let showButton = ""
    if (this.state.showButton === answerButton) {
      text = this.props.route.params.deck.cards[cardIndex].answer,
        showButton = questionButton
    }
    else {
      text = this.props.route.params.deck.cards[cardIndex].question
      showButton = answerButton
    }
    this.setState({
      showButton,
      text
    })
  }

  correctClicked = () => {
    const cards = this.props.route.params.deck.cards;
    if (cardIndex >= cards.length) {
      this.props.navigation.navigate("Result", { deck: this.props.route.params.deck, key: this.props.route.params.key, correctCounter })
    }
    else {
      if (cardIndex < cards.length && cards[cardIndex].isCorrect)
        correctCounter++
      cardIndex++
      this.setCardState()
    }
  }

  incorrectClicked = () => {
    const cards = this.props.route.params.deck.cards;
    if (cardIndex >= cards.length) {
      this.props.navigation.navigate("Result", { deck: this.props.route.params.deck, key: this.props.route.params.key, correctCounter })
    }
    else {
      if (cardIndex < cards.length && !cards[cardIndex].isCorrect)
        correctCounter++
      cardIndex++
      this.setCardState()
    }
  }

  setCardState = () => {

    if (cardIndex >= this.props.route.params.deck.cards.length) {
      this.props.navigation.navigate("Result", { deck: this.props.route.params.deck, key: this.props.route.params.key, correctCounter })
    }
    else {
      this.setState({
        showButton: answerButton,
        text: this.props.route.params.deck.cards[cardIndex].question
      })
    }
  }

  render() {
    return (

      <View>
        <Text style={{ alignSelf: "flex-start", fontSize: 22, padding: 10 }} >{cardIndex + 1}/{this.props.route.params.deck.cards.length}</Text>
        <View style={styles.container} >
          <Text style={[{ fontSize: 36, fontWeight: "bold" }, styles.text]}>{this.state.text}</Text>
          <TextButton style={styles.showButton} onPress={this.flipCard} >
            {this.state.showButton}
          </TextButton>
          <TextButton style={styles.greenButton} onPress={this.correctClicked} >
            Correct
          </TextButton>
          <TextButton style={styles.redButton} onPress={this.incorrectClicked} >
            Incorrect
        </TextButton>
        </View>
      </View >

    )
  }
}

const styles = StyleSheet.create({
  showButton: { color: "#FF0000", textAlign: "center", fontSize: 31, fontWeight: "bold", paddingTop: 20 },
  container: {
    paddingTop: 180,
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    color: '#464646',
    position: 'absolute',
    height: 155,
    width: 250
  },
  redButton: {
    padding: 10,
    margin: 50,
    backgroundColor:
      "#FF0000",
    color: white,
    borderRadius: 8,
    width: 80,
    height: 37
  },
  greenButton: {
    padding: 10,
    margin: 50,
    backgroundColor:
      "#015E00",
    color: white,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    width: 80,
    height: 37
  }
});