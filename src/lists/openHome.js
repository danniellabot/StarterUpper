import React, { useContext, useState } from 'react';

import { Text, View, Button, StyleSheet, Dimensions, StatusBar } from 'react-native';
// import { bindActionCreators } from 'redux'
// import { actionCreators } from '../state/index'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

export default function OpenHome() {

    const { user } = useContext(AuthenticatedUserContext);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Welcome {user.displayName}</Text>
        
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});
