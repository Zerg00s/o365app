import * as React from 'react';
import { TextInput, View } from 'react-native';


export default class UserNewForm extends React.Component<any, any> {
  public render() {
    return (
     <View>
         <TextInput  placeholder="Enter user name..."/>
     </View>
    );
  }
}
