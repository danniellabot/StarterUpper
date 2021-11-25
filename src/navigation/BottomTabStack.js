import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icon, Badge, Avatar } from "react-native-elements";
import HomeStack from "./HomeStack";
// import ListStack from './ListStack';
import SearchStack from "./SearchStack";
import CreateStack from "./CreateStack";
import FriendStack from "./FriendStack";
import CustomTabBar from "./CustomTabBar";

const Tab = createBottomTabNavigator();

export default function BottomTabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
        style: {
          backgroundColor: "#182028",
          borderTopWidth: 0,
          borderTopColor: "#182028",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Create" component={CreateStack} />
      <Tab.Screen name="Friends" component={FriendStack} />
    </Tab.Navigator>
  );
}
