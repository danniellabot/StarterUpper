import React, { useContext, useState } from 'react';

import { Text, View, Button, StyleSheet } from 'react-native';
// import { bindActionCreators } from 'redux'
// import { actionCreators } from '../state/index'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

export default function HomeScreen({ navigation }) {



    const { user } = useContext(AuthenticatedUserContext);


    return (
        <View>
            <Text style={styles.text}>You are logged in as {user.displayName} </Text>
            <Button
                title="Go to list"
                onPress={() => navigation.navigate('List')}
            />
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    text: {
        fontSize: 30,

    }
})
