import React, { useContext, useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { Text, View, Button, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
import { genConfig } from 'react-nice-avatar'
// import { bindActionCreators } from 'redux'
// import { actionCreators } from '../state/index'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';


const openedList = [
    {
        merchantName: 'Eat Tokyo',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        createdAt: '12-Nov',
        createdBy: 'Richard',
        total: '£27.30',
        items: [
            {
                name: 'Chicken',
                quantity: '1',
                price: '£2.50',
                assignedTo: []
            },
            {
                name: 'Beef',
                quantity: '3',
                price: '£7.50',
                assignedTo: []
            },
            {
                name: 'Tofu',
                quantity: '1',
                price: '£2.50',
                assignedTo: []
            },
            {
                name: 'Fish',
                quantity: '4',
                price: '£10.00',
                assignedTo: []
            }
        ]
    },
    {
        merchantName: 'Yorkshire Burrito',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        createdAt: '2-Oct',
        createdBy: 'Danniella',
        total: '£16.00',
    },
 
]

const closedList = [
    {
        merchantName: 'Hawksmoor',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        createdAt: '12-Nov',
        createdBy: 'Richard',
        total: '£27.30',
    },
    {
        merchantName: 'Flat Iron',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        createdAt: '2-Oct',
        createdBy: 'Danniella',
        total: '£16.00',
    },
    {
        merchantName: 'Eataly',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        createdAt: '10-Oct',
        createdBy: 'Danniella',
        total: '£22.20',
    },
 
]


export default function ItemsList(props) {

    const { user } = useContext(AuthenticatedUserContext);
   const { list , navigation } = props
    //console.log(props)
    

    // useEffect(() => {
    //     setList(tab === 'openCategory' ? openedList : closedList)
    //     console.log('OUR NEW TAB IS', tab)
    // }, [tab])

    const { merchantName, avatar_url, createdAt, createdBy, total, items } = list
    //console.log('THIS THE PROPS LIST', list)

    // {
    //     name: 'Chicken',
    //     quantity: '1',
    //     price: '£2.50',
    //     assignedTo: []
    // },
    
    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle="dark-content" /> */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerText}>{merchantName}</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={styles.headerText}>{total}</Text>
                </View>
            </View>

            <ScrollView>
                {items ? 
                    items.map((l, i) => (
                        <ListItem
                            key={i}
                            bottomDivider
                            // onPress navigation to ListScreen
                            onPress={console.log('list item pressed')}
                            style={styles.listItem}
                        >
                            {/* <Avatar source={{ uri: l.avatar_url }} rounded size={40}/> */}
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <ListItem.Subtitle style={styles.topRightContainer}>{l.price}</ListItem.Subtitle>
                                <ListItem.Subtitle style={styles.bottomRightContainer}>{l.quantity}</ListItem.Subtitle>
                                
                            </ListItem.Content>
                        </ListItem>
                    ))
                : null}
                
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItem: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bottomRightContainer: {
        bottom: -1,
        opacity: 1,
        position: "absolute",
        alignSelf: "flex-end",
        fontSize: 13,
      },
      topRightContainer: {
        top: 0,
        opacity: 1,
        position: "absolute",
        alignSelf: "flex-end",
        justifyContent: "flex-end",
      },
        bottomLeftContainer: {
            fontSize: 13,
    },

});
