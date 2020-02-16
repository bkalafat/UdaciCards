import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewQuestion from './components/NewQuestion'
import Constants from 'expo-constants'
import Quiz from './components/Quiz'
import { purple, bordeaux } from './utils/colors';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <View style={{ flex: 1 }} >
      <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
      <NavigationContainer>

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

              // You can return any component that you like here!
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
      </NavigationContainer>
    </View>
  );
}
