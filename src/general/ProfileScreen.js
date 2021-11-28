// react native functional component 
// render username 
// render avatar 

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform,
} from "react-native";
import {
    ListItem,
    Avatar,
    Icon,
    Badge,
} from "react-native-elements";

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Avatar
                    rounded
                    source={{
                        uri:
                            "https://randomuser.me/api/portraits/lego/1.jpg",
                    }}
                    size={90}
                    containerStyle={{ marginTop: 20 }}
                />
                <View style={styles.headerText}>
                    <Text style={styles.headerTextName}>Danniella</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>
                    Settings
                </Text>
                <Text style={styles.bodyText}>
                    Logout
                </Text>
        
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTextName: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    bodyText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
});

export default ProfileScreen;