import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import UserNewForm from './Components/UserNewForm';

export default createStackNavigator({
  userList: {
    navigationOptions: {
      title: 'Users'
    },
    screen: UserList
  },
  // tslint:disable-next-line:object-literal-sort-keys
  userForm: {
    navigationOptions: {
      title: 'User info'
    },
    screen: UserForm,
  },
  userNewForm: {
    navigationOptions: {
      title: 'userNewForm'
    },
    screen: UserNewForm
  },


});



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#eee',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
  },
});
