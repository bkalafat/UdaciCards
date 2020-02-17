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
export function saveDeckTitle({id, title}) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [id]: {
      title
    }
  }))
}
export function addCardToDeck(id, card) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [id]: {
      cards: [...cards, card]
    }
  }))
}

export function setDummy() {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({
    [1]: {
      title: "BurakTest"
    }
  }))
}

function returnResults (results) {
  return results === null
    ? "Boş"
    : JSON.parse(results)
}