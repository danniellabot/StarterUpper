// react functional component called SearchScreen render search bar and search button

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme,
  } from "@react-navigation/native";
import { ThemeContext } from '../navigation/RootNavigator';

const SearchScreen = props => {
    const { setTheme, theme } = React.useContext(ThemeContext);
    //const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setTheme(theme === 'Light' ? 'Dark' : 'Light');

  console.log('THEME', DarkTheme)
  console.log('THEMELIGHT', DefaultTheme)

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
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={theme == "Light" ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={theme == "Light" ? false : true}
        />

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