import React, { useContext, useEffect, useState } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import { useColorScheme } from "react-native-appearance";
import { auth } from "../config/firebase";
import { AuthenticatedUserContext } from "./AuthenticatedUserProvider";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import BottomTabStack from "./BottomTabStack";
import DrawerStack from "./DrawerStack";

export const ThemeContext = React.createContext();

export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [theme, setTheme] = useState("Light");
  const themeData = { theme, setTheme };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setUser(authenticatedUser)
            : setUser(null));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme == "Light" ? DefaultTheme : DarkTheme}>
        {user ? <BottomTabStack /> : <AuthStack />}
        {/* {user ?
      <HomeStack>
        <HomeStack.Screen name="Bottom" component={BottomTabStack} />
      </HomeStack>
      : <AuthStack />} */}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
