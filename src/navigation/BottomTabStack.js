import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon, Badge, Avatar } from 'react-native-elements';
import HomeStack from './HomeStack';
// import ListStack from './ListStack';
import SearchStack from './SearchStack';
import CreateStack from './CreateStack';
import FriendStack from './FriendStack';

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        "tabBarActiveTintColor": "blue",
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
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" type="feather" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="search" type="feather" color={color} size={26} />
          ),
        }}
      />
            <Tab.Screen name="Friends" component={FriendStack}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({ color }) => (
            <Icon name="users" type="feather" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Create" component={CreateStack}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color }) => (
            <Icon name="file-plus" type="feather" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}