import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    Button,
    TextInput,
    ScrollView,
} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';



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
    { uid: "123", name: "Richard" },
    { uid: "456", name: "John" },
    { uid: "789", name: "Jane" },
];


const { width, height } = Dimensions.get('window');

// react native functional component
// button aligns center title 'Search Friends'
// onPress button, SearchBar is rendered
// onClick SearchBar, suggestions are rendered
// onChangeText SearchBar, suggestions are rendered
// onSubmit Search Bar, console.log('uid')

// below search bar is functional component
// list of Friends List

export const ShowFriendReceipt = () => {

  const [showSearchBar, setShowSearchBar] = React.useState(false);

  const onPress = () => {
   showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
  };


    return (
<View>
  <Button
    title="Add friends"
    onPress={onPress}
  />
  {showSearchBar ? <SearchFriend /> : null}
  // render friendReceipt
  {friendReceipt.map((friend, i) => (
    <ListItem
      key={i}
      bottomDivider
      // onPress navigation to ListScreen
      onPress={() => console.log(friend.uid)}
    >
      <ListItem.Content>
        <ListItem.Title>{friend.name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  ))}

</View>

    );
}

const SearchFriend = () => {
  const [keywords, setKeywords] = React.useState('')
  const [suggestions, setSuggestions] = React.useState(friendList)

  const onChangeText = (text) => {
    setKeywords(text)
    const suggestedFriends = friendList.filter(friend => friend.name.toLowerCase().includes(text.toLowerCase()))
    setSuggestions(suggestedFriends)
    console.log('suggestedFriends', suggestedFriends)
  }

  // check if friendList uid is in friendReceipt
  // if yes return true
  // if no return false
  const isFriendReceipt = (uid) => {
    let isFriend = false
    const checkIsFriend = friendReceipt.find(friend => friend.uid === uid)
    checkIsFriend ? isFriend = true : null
    return isFriend
  }


  return (
    <View>
       <SearchBar
    placeholder="Username" 
    // onChangeText={(val) => { setKeywords(val) }}
    onChangeText={(val) => { onChangeText(val) }}
    onSubmitEditing={()=> console.log(`User typed ${keywords}`)}
    value={keywords} 
  />
  <ScrollView>
   {suggestions.map((friend, i) => (
    <ListItem
      key={i}
      bottomDivider
      //onPress navigation to ListScreen
      onPress={() => console.log(friend)}
     
    >
      <ListItem.Content>
        <ListItem.Title>{friend.name}</ListItem.Title>
        {isFriendReceipt(friend.uid) ?
        <Button
          title="Remove"
          onPress={() => console.log(friend)}
         />
        :
        <Button
          title="Add"
          onPress={() => console.log(friend)}
        />
      }
      </ListItem.Content>
     

    </ListItem>
  ))}
  </ScrollView>
    </View>
 
 

  )



    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: width,
    marginTop: 20,
  },

});
