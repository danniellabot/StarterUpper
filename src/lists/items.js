import React, { useContext, useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { Text, View, Button, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
import { genConfig } from 'react-nice-avatar'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { FlatList } from 'react-native-gesture-handler';


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
    const { list, navigation } = props

    const { merchantName, avatar_url, createdAt, createdBy, total, items } = list
   
    const OverviewSection = () => {
        return (
            <View style={styles.header}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerText}>{merchantName}</Text>
            </View>
            <View style={styles.headerRight}>
                <Text style={styles.headerText}>{total}</Text>
            </View>
        </View>
        )
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
           <OverviewSection />

            <ScrollView>
                {items ?
                    items.map((l, i) => (
                        <ListItem
                            key={i}
                            bottomDivider
                            //onPress navigation to ListScreen
                            onPress={() => console.log(l)}
                            style={styles.listItem}
                        >
                            {/* <Avatar source={{ uri: l.avatar_url }} rounded size={40}/> */}
                            <ListItem.Content>
                                <ListItem.Title style={styles.listItemTitle}>{l.name}</ListItem.Title>
                                <ListItem.Subtitle style={styles.topRightContainer}>{l.quantity}  |  {l.price}</ListItem.Subtitle>
                                <ScrollView>
                                    <FlatList
                                        // size is half the screen width
                                        style={{ width: Dimensions.get('window').width / 2, marginTop: 10 }}
                                        data={l.assignedTo}
                                        horizontal={true}
                                        // if no data
                                        ListEmptyComponent={() => <Text style={styles.assignedToText}>Hey, who ordered the {l.name}?</Text>} 
                                        renderItem={({ item }) => (
                                            <View>
                                                <Avatar
                                                    size='small'
                                                    rounded
                                                    source={{ uri: 'https://randomuser.me/api/portraits/lego/1.jpg' }}
                                                    title={item.name}
                                                    onPress={() => console.log(item)}
                                                    activeOpacity={0.7}
                                                />
                                            </View>
                                        )}
                                        keyExtractor={item => item.uid}
                                    />
                                </ScrollView>
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
    listItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomRightContainer: {
        bottom: 0, 
        opacity: 1,
        position: "absolute",
        alignSelf: "flex-end",
        fontSize: 13,
        paddingTop: 5,
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
    assignedToText: {
        fontSize: 12,
        color: '#000',
        marginRight: 5,
        fontStyle: 'italic',
    },


});
