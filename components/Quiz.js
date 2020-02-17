import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from "./TextButton";
import { bordeaux, white } from '../utils/colors';

let text = "";
const question = "Does react native work with Android?";
const answer = "No doesn't work.";
const answerButton = "Show Answer";
const questionButton = "Show Question";

//TODO this function will be class
export default class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deckName: this.props.route.params.deckInfo.deckName,
      cardCount: this.props.route.params.deckInfo.cardCount,
      text: question,
      showButton: answerButton
    }
  }

  flipCard = () => {
    if (this.state.showButton === answerButton) {
      this.setState({
        showButton: questionButton,
        text: answer
      })
    }
    else {
      this.setState({
        showButton: answerButton,
        text: question
      })
    }
  }

  render() {
    return (

      <View>
        <Text style={{ alignSelf: "flex-start", fontSize: 22, padding: 10 }} >3/{this.state.cardCount}</Text>
        <View style={styles.container} >
          <Text style={[{ fontSize: 36, fontWeight: "bold" }, styles.text]}>{this.state.text}</Text>
          <TextButton style={styles.showButton} onPress={this.flipCard} >
            {this.state.showButton}
          </TextButton>
          <TextButton style={styles.greenButton} onPress={() => { }} >
            Correct
          </TextButton>
          <TextButton style={styles.redButton} onPress={() => { }} >
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