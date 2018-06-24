import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Hello } from './Components/Hello';

export default class App extends React.Component {
  public render() { 
    return ( 
      <View style={styles.container}>
        <Hello enthusiasmLevel={100} name="Denis"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
