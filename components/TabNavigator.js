import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { bordeaux } from '../utils/colors';
import DeckList from './DeckList'
import NewDeck from './NewDeck'

const Tab = createBottomTabNavigator();
export default class TabNavigator extends Component {

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'DECKS') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'NEW DECK') {
              iconName = focused ? 'md-add-circle' : 'md-add-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: bordeaux,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="DECKS" component={DeckList} />
        <Tab.Screen name="NEW DECK" component={NewDeck} />
      </Tab.Navigator>
    )
  }

}