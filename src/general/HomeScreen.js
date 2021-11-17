import React, { useContext, useState } from 'react';

import { Text, View, Button, StyleSheet, Dimensions, StatusBar } from 'react-native';
import OpenHome from '../lists/openHome';

import { TabView } from 'react-native-tab-view';


const initialLayout = { width: Dimensions.get('window').width };

export default function HomeScreen({ navigation }) {

   // const { user } = useContext(AuthenticatedUserContext);

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Open' },
        { key: 'second', title: 'Complete' },
    ]);

    const renderScene = ({route}) => {

       // const { route } = props;

        switch (route.key) {
          case 'first':
            return <OpenHome tab='openCategory' navigation={navigation}/>;
           // return <SecondRoute />;
            // return <HomeComponent user={user}/>;
            case 'second':
                return <OpenHome tab='closeCategory' navigation={navigation}/>;
          default:
            return null;
        }
      };

    //   const SecondRoute = () => (
    //     <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    //         <Text>Hey!</Text>
    //         <Button
    //             title="Go to List"
    //             onPress={() => navigation.navigate('ListScreen')}
    //         />
    //     </View>
    // );

    
    return (
      
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={styles.container}
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
})
