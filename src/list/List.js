import React from 'react';
import { View, Button, Text, Input } from 'react-native';

export default class List extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About</Text>
      </View>
    );
  }
}

List.navigationOptions = {
  title: 'About',
}
