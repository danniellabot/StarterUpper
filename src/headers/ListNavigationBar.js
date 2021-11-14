import { Appbar} from 'react-native-paper';
import  React  from 'react';


export default function ListNavigationBar({ navigation, previous }) {

  
    return (
      <Appbar.Header>
      {/* {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null} */}
      <Appbar.Action onPress={navigation.goBack} icon="home" />
      <Appbar.Content title="Your Posts" />
      <Appbar.Action icon="menu" onPress={() => navigation.navigate('Friend')}  />
      </Appbar.Header>
    );
  }