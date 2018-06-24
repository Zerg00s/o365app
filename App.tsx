import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import UserList from './Components/UserList';

export default class App extends React.Component {
  public render() { 
    return ( 
      <View style={styles.container}>
        <UserList  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
  },
});
