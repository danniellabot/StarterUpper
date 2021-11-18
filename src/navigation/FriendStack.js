import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, View } from 'react-native';
import { FriendScreen } from '../general/FriendScreen';

const Stack = createStackNavigator();

export default function FriendStack({ navigation }) {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        headerTitle: '',
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: `${Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'}`,
          fontSize: 20,
          fontStyle: 'normal',
        },
      }}
    >
      <Stack.Screen name='FriendScreen' component={FriendScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconRight: {
    marginRight: 20,

  },
  iconLeft: {
    marginLeft: 20
  },
});