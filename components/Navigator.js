import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator'
import Deck from './Deck'
import NewQuestion from './NewQuestion'
import Quiz from './Quiz'
import { createStackNavigator } from '@react-navigation/stack';
import Result from './Result';

const Stack = createStackNavigator();

export default class Navigator extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="UdaciCards" component={TabNavigator} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="New Question" component={NewQuestion} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}