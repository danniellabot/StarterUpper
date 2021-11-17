import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, View } from 'react-native';
import { Icon, Badge, Avatar } from 'react-native-elements';
import HomeScreen from '../general/HomeScreen';
import ListScreen from '../general/ListScreen';
import { DrawerActions } from '@react-navigation/routers';


const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {

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
      <Stack.Screen name='HomeScreen' component={HomeScreen}
        options={({ navigation, route }) => ({
          headerTitle: 'Evenit',
          headerLeft: () => (
            <Avatar
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/lego/1.jpg',
              }}
              size={30}
              containerStyle={{ marginLeft: 16 }}
            />

          ),
          headerRight: () => (
            <Icon
              style={styles.iconRight}
              name='users'
              type='feather'
              color='black'
              size={20}
              onPress={() => console.log('Friends screen here I come')}
            />
          ),
        })}
      />
        <Stack.Screen name='ListScreen' component={ListScreen}
          options={({ navigation, route }) => ({
           headerTitle:'Item',
            headerLeft: () => (
              <Icon
                style={styles.iconLeft}
                name='arrow-left'
                type='feather'
                color='black'
                size={20}
                onPress={() => navigation.goBack()}
                />
            ),
            // headerRight: () => (
            //   <Icon
            //     style={styles.iconRight}
            //     name='users'
            //     type='feather'
            //     color='black'
            //     size={20}
            //     onPress={() => navigation.navigate('Search')}
            //     />
            // ),
          })}

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