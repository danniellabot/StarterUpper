// react functional component called SearchScreen render search bar and search button

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchScreen = props => {
    return (
        <View style={styles.viewStyle}>
        <SearchBar
            placeholder="Search"
            onChangeText={props.handleChange}
            value={props.search}
            onClear={props.handleClear}
            lightTheme
            round
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={props.handleSubmit}>
            <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
        viewStyle: {
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 5,
            padding: 10,
            backgroundColor: '#fff'
        },
        buttonStyle: {
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 5,
            padding: 10,
            backgroundColor: '#fff'
        },
        buttonText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000'
        }
    });

export default SearchScreen;