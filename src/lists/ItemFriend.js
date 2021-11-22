import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Button,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import {
  SearchBar,
  ListItem,
  Avatar,
  Divider,
  Card,
} from "react-native-elements";
import { color } from "react-native-reanimated";

const friendList = [
  { uid: "123", name: "Richard" },
  { uid: "456", name: "John" },
  { uid: "789", name: "Jane" },
  {
    uid: "101112",
    name: "Jack",
  },
  {
    uid: "131415",
    name: "Jill",
  },
  {
    uid: "161718",
    name: "Joe",
  },
  {
    uid: "19202122",
    name: "Jenny",
  },
  {
    uid: "23242526",
    name: "Jenny",
  },
  {
    uid: "272829",
    name: "Jenny",
  },
  {
    uid: "30313233",
    name: "Jenny",
  },
  {
    uid: "343536",
    name: "Jenny",
  },
];

const friendReceipt = [
  { uid: "123", name: "Richard", amount: "30.00", status: "Paid" },
  { uid: "456", name: "John", amount: "30.00", status: "Paid" },
  { uid: "789", name: "Jane", amount: "30.00", status: "" },
];

const { width, height } = Dimensions.get("window");

export const ShowFriendReceipt = () => {
  return (
    <View>
      <SearchFriend />
    </View>
  );
};

const SearchFriend = () => {
  const [keywords, setKeywords] = React.useState("");
  const [suggestions, setSuggestions] = React.useState(friendList);
  const [showFriends, setShowFriends] = React.useState(true);

  const onChangeText = (text) => {
    setKeywords(text);
    const suggestedFriends = friendList.filter((friend) =>
      friend.name.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(suggestedFriends);
    console.log("suggestedFriends", suggestedFriends);
  };

  const isFriendReceipt = (uid) => {
    let isFriend = false;
    const checkIsFriend = friendReceipt.find((friend) => friend.uid === uid);
    checkIsFriend ? (isFriend = true) : null;
    return isFriend;
  };

  const FriendListRender = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          Summary
        </Text>
        <Card>
          <Text>Total Amount: $30.00</Text>
          <Divider />
          <Text>Total Paid: $30.00</Text>
        </Card>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          Friends
        </Text>
        <ScrollView>
          {friendReceipt.map((friend, i) => (
            <ListItem
              key={i}
              bottomDivider
              onPress={() => console.log(friend.uid)}
              containerStyle={{
                width: width - 30,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                alignSelf: "center",
                borderColor: friend.status === "Paid" ? "#00ff00" : "#ff0000",
                borderWidth: 2,
                borderBottomWidth: 2,
              }}
            >
              <Avatar
                source={{
                  uri: "https://randomuser.me/api/portraits/lego/1.jpg",
                }}
                rounded
                size={40}
              />
              <ListItem.Content>
                <ListItem.Title>{friend.name}</ListItem.Title>
                <ListItem.Title style={styles.bottomLeftContainer}>
                  {friend.amount}
                </ListItem.Title>
                <ListItem.Title style={styles.topRightContainer}>
                  {friend.status}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    );
  };

  const SuggestionsRender = () => {
    return (
      <ScrollView>
        {suggestions.map((friend, i) => (
          <ListItem key={i} bottomDivider onPress={() => console.log(friend)}>
            <ListItem.Content style={styles.itemsSectionRow}>
              <ListItem.Title>{friend.name}</ListItem.Title>
              <Button
                title={`${isFriendReceipt(friend.uid) ? "Remove" : "Add"}`}
                onPress={() => console.log(friend)}
              />
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    );
  };

  return (
    <View>
      <SearchBar
        placeholder="Add friends"
        onFocus={() => setShowFriends(false)}
        onBlur={() => setShowFriends(true)}
        blurOnSubmit
        onChangeText={(val) => {
          onChangeText(val);
        }}
        onSubmitEditing={() => console.log(`User typed ${keywords}`)}
        value={keywords}
        platform={`${Platform.OS === "ios" ? "ios" : "android"}`}
      />
      {showFriends ? <FriendListRender /> : <SuggestionsRender />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: width,
    marginTop: 20,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  bottomRightContainer: {
    bottom: -1,
    opacity: 1,
    position: "absolute",
    alignSelf: "flex-end",
    fontSize: 16,
  },
  topRightContainer: {
    top: 1,
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    color: "#00ff00",
    fontWeight: "bold",
  },
  bottomLeftContainer: {
    fontSize: 14,
  },
});
