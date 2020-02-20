import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'UdaciCards:decks'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(returnResults)
}
export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY, id).then((deck) => {
    return JSON.parse(deck);
  });
}

export function submitDeck({ deck, key }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function clearSetDummy() {
  return AsyncStorage.clear()
  //then(setDummyData)
}

function returnResults(results) {
  return results === null
    ? ""
    : JSON.parse(results)
}

function setDummyData() {

  let dummyData = {}

  dummyData[1] = {
    title: "DummyDeck",
    cards: [{question: "Dummy Question", answer: "Dummy Answer", isCorrect: false}, {question: "Dummy Question2", answer: "Dummy Answer2", isCorrect: true}]
  }

  dummyData[2] = {
    title: "DummyDeck2",
    cards: [{question: "Dummy2 Question", answer: "Dummy2 Answer", isCorrect: false}, {question: "Dummy2 Question2", answer: "Dummy2 Answer2", isCorrect: true}]
  }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}