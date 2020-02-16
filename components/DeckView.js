import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from "./TextButton";
import { bordeaux, white } from '../utils/colors';

export default function DeckView({ deckName, cardCount }) {

  return (
    <View style={styles.container} >
      <Text style={[{ fontSize: 36, fontWeight: "bold" }, styles.text]}>{deckName}</Text>
      <Text style={[{ fontSize: 31 }, styles.text]}>{cardCount} cards</Text>
      <View >
        <TextButton style={styles.whiteButton} >
          Add Card
        </TextButton>
        <TextButton style={styles.bordeuxButton} >
          Start Quiz
        </TextButton>
      </View>
    </View>
  )
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