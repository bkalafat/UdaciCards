import React from 'react'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import {  Text, Platform } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { purple, white } from '../utils/colors'
import { createAppContainer } from 'react-navigation';

export default function Tabs() {

  const TabNavigator = createMaterialTopTabNavigator(
    {
      DeckList: DeckList,
      NewDeck: NewDeck
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return routeName === 'DeckList' ? (
            <Text>DECKS</Text>
          ) : (
              <Text>NEW DECK</Text>
            );
        },
      }),
      tabBarOptions: {
        showIcon: false,
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
          height: 66,
          backgroundColor: Platform.OS === 'ios' ? white : purple,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
      },
    }
  );

  const Tabs = createAppContainer(TabNavigator)

  return (<Tabs />)
}