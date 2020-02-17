import React, { Component } from 'react'
import { StyleSheet, View, Text,TextInput, CheckBox } from 'react-native'
import { bordeaux, white } from '../utils/colors';
import TextButton from './TextButton'


export default class NewQuestion extends Component {

  state = {
    checked: false,
  };

  submit = () => {
    //Route to
  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput
          style={styles.textInput}
          placeholder={"Question"}
        />
        <TextInput
          style={styles.textInput}
          placeholder={"Answer"}
        />
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() => this.setState({ checked: !this.state.checked })}
          />
          <Text style={{ marginTop: 5 }}>The Anwser is true</Text>
        </View>

        <TextButton style={styles.button} onPress={this.submit}>
          Submit
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    borderRadius: 8,
    paddingLeft: 10,
    width: 300,
    height: 80
  },
  button: {
    padding: 10,
    margin: 50,
    backgroundColor:
    bordeaux,

    color: white,
    borderRadius: 8
  }
});
