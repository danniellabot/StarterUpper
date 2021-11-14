import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabStack from './BottomTabStack';
import { Button, StyleSheet, View } from 'react-native';
import { Icon, Badge, Avatar } from 'react-native-elements';
import HomeScreen from '../general/HomeScreen';
import ListScreen from '../general/ListScreen';
import FriendScreen from '../general/FriendScreen';

const Stack = createStackNavigator();

export default function ListStack({ navigation }) {

  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: 'pink',
        // },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontFamily: `${Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'}`,
          fontSize: 20,
          fontStyle: 'normal',
        },
      }}
    >
      <Stack.Screen name='ListScreen' component={ListScreen}
      //  options={{
      //   header: ListNavigationBar }}
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