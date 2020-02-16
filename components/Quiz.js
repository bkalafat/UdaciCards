import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextButton from "./TextButton";
import { bordeaux, white } from '../utils/colors';

//TODO this function will be class
export default function Quiz({ deckName, cardCount }) {

  const question = "Does react native work with Android?";
  const answer = "No doesn't work.";
  let showButtonName = "Show Answer";

  return (
    <View>
      <Text style={{ alignSelf: "flex-start", fontSize:22, padding: 10 }} >3/{cardCount}</Text>
      <View style={styles.container} >
        <Text style={[{ fontSize: 36, fontWeight: "bold" }, styles.text]}>{question}</Text>
        <View >
          <TextButton style={styles.showButton} onPress={() => { }} >
            {showButtonName}
          </TextButton>
          <TextButton style={styles.greenButton} onPress={() => { }} >
            Correct
        </TextButton>
          <TextButton style={styles.redButton} onPress={() => { }} >
            Incorrect
        </TextButton>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  showButton: { color: "#FF0000", textAlign: "center", fontSize: 31, fontWeight: "bold", paddingTop: 20 },
  container: {
    paddingTop: 180,
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    color: '#464646'
  },
  redButton: {
    padding: 10,
    margin: 50,
    backgroundColor:
      "#FF0000",
    color: white,
    borderRadius: 8,
  },
  greenButton: {
    padding: 10,
    margin: 50,
    backgroundColor:
      "#015E00",
    color: white,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8
  }
});