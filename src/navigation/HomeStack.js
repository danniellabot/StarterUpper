import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, View, Text } from 'react-native';
import { Icon, Badge, Avatar } from 'react-native-elements';
import HomeScreen from '../general/HomeScreen';
import ListScreen from '../general/ListScreen';
import { DrawerActions } from '@react-navigation/routers';
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';


const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {

  const { user } = useContext(AuthenticatedUserContext);

  return (
    <Stack.Navigator
      screenOptions={{
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
          headerStyle: {
            height: 100,
          },
          headerTitle: '',
          headerLeft: () => (
              <Text style={styles.displayNameText}>Evenit</Text>
          ),
          headerRight: () => (
            <Avatar
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/lego/1.jpg',
              }}
              size={30}
              containerStyle={{ marginRight: 16 }}
            />
          ),
        })}
      />
      <Stack.Screen name='ListScreen' component={ListScreen}
        options={({ navigation, route }) => ({
          headerStyle: {
            height: 100,
          },
          headerTitle: 'Item',
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
  displayNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    fontFamily: `${Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'}`,
  },
});