import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { white } from "../utils/colors"
import TextButton from './TextButton'

export default function Result({ route, navigation }) {

  restart = () => {
    navigation.navigate("Quiz")
  }

  backToDeck = () => {
    navigation.navigate("Deck")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Your Score is: </Text>
      <Text style={styles.text}> {route.params.correctCounter}/{route.params.deck.cards.length}</Text>

      <TextButton style={styles.greenButton} onPress={this.restart} >
        Restart
      </TextButton>
      <TextButton style={styles.redButton} onPress={this.backToDeck} >
        To Deck
        </TextButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 39,
    padding: 50,
    textAlign: 'center',
    color: '#464646'
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
})