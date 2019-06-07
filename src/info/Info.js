import React from 'react';
import { View, Button, Text } from 'react-native';
import navigation from 'react-navigation';

export default class Info extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home ;D</Text>
        <Button
          title="Ir para About"
          onPress={() => navigate('About')}
        />
      </View>
    );
  }
}

Info.navigationOptions = {
  title: 'Home',
}