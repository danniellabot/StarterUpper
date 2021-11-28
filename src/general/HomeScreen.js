import React, { useContext, useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import OpenHome from "../lists/openHome";

import { TabView, TabBar } from "react-native-tab-view";

const initialLayout = { width: Dimensions.get("window").width };

export default function HomeScreen({ navigation }) {
  // const { user } = useContext(AuthenticatedUserContext);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Open" },
    { key: "second", title: "Complete" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <OpenHome tab="openCategory" navigation={navigation} />;
      // return <SecondRoute />;
      // return <HomeComponent user={user}/>;
      case "second":
        return <OpenHome tab="closeCategory" navigation={navigation} />;
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white", height: 4 }}
      style={{ backgroundColor: "#02D4B3" }}
      labelStyle={{
        fontSize: 16,
        fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
        fontWeight: "bold",
      }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={renderTabBar}
    />
  );
}

// Styles
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
