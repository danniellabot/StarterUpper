import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Badge, Avatar } from 'react-native-elements';
import HomeStack from './HomeStack';
import ListStack from './ListStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Home') {
        iconName = focused
        ? 'home'
        : 'home';
      } if (route.name === 'List') {
        iconName = focused
        ? 'clipboard'
        : 'clipboard';
      } if (route.name === 'Search') {
        iconName = focused
        ? 'search'
        : 'search';
      }

 return <Icon name={iconName} size={size} color={color}     />;
   },
})}
screenOptions={{
  headerShown: false,
  "tabBarActiveTintColor": "tomato",
  "tabBarInactiveTintColor": "gray",
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}}
    >
      <Tab.Screen name="Home" component={HomeStack}
     />
     <Tab.Screen name="List" component={ListStack}
     />
     <Tab.Screen name="Search" component={SearchStack}
     />
    </Tab.Navigator>
  );
}