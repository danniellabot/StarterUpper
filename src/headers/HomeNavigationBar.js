import { Appbar, Menu } from 'react-native-paper';
import React from 'react';
import { auth } from '../config/firebase'

export default function HomeNavigationBar({ navigation, previous }) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleSignOut = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <Appbar.Header>
        <Appbar.Action onPress={handleSignOut} icon="logout" />
        {/* {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null} */}
        <Appbar.Content title="Evenit" />
        {!previous ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={openMenu} />
            }>
            <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="SURPRISE!" />
            <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Option 2" />
            <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Option 3" disabled />
          </Menu>
        ) : null}
      </Appbar.Header>
    );
  }