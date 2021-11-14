import { Appbar} from 'react-native-paper';
import React from 'react';

export default function FriendsNavigationBar({ navigation, previous }) {

    return (
      <Appbar.Header>
      {/* {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null} */}
      <Appbar.Action onPress={navigation.goBack} icon="arrow-left" />
      <Appbar.Content title="Newsfeed" subtitle={''} />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon='pencil' onPress={() => {console.log('HEY')}} /> */}
      </Appbar.Header>
    );
  }